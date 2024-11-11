import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as apigateway from 'aws-cdk-lib/aws-apigatewayv2';
import * as apigatewayIntegrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const region = cdk.Stack.of(this).region;

    const publicBucket = new s3.Bucket(this, 'Bucket', {
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      blockPublicAccess: {
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
        blockPublicAcls: true,
        ignorePublicAcls: true,
      },
      websiteIndexDocument: 'index.html',
      cors: [
        {
          allowedHeaders: ['*'],
          allowedOrigins: ['*'],
          allowedMethods: [
            s3.HttpMethods.GET,
            s3.HttpMethods.PUT,
            s3.HttpMethods.POST,
          ],
        },
      ],
      bucketName: `${props.stackName}-bucket`,
    });

    publicBucket.addToResourcePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ['s3:GetObject'],
          principals: [new iam.AnyPrincipal()],
          resources: ['arn:aws:s3:::' + publicBucket.bucketName + '/*'],
        })
    );

    new s3Deploy.BucketDeployment(this, `${id}StaticDeployment`, {
      destinationBucket: publicBucket,
      sources: [s3Deploy.Source.asset(`./.deploy/static`)],
      retainOnDelete: false,
      prune: false,
    });

    const webAdapterLayer = lambda.LayerVersion.fromLayerVersionArn(
        this,
        'WebAdapterLayer',
        `arn:aws:lambda:${region}:753240598075:layer:LambdaAdapterLayerX86:16`
    );

    const app = new lambda.Function(this, id, {
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 512,
      handler: 'run.sh',
      layers: [webAdapterLayer],
      timeout: cdk.Duration.seconds(60),
      code: lambda.Code.fromAsset( `./.deploy/code.zip` ),
      environment: {
        AWS_LAMBDA_EXEC_WRAPPER: '/opt/bootstrap',
        PORT: '8080',
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      },
    });

    const defaultIntegration = new apigatewayIntegrations.HttpLambdaIntegration(
        `WebIntegration`,
        app
    )

    const appApi = new apigateway.HttpApi(this, `${props.stackName}-Api`, {
      defaultIntegration,
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [apigateway.CorsHttpMethod.ANY],
        allowHeaders: ['*'],
      },
    });

    const publicIntegration = new apigatewayIntegrations.HttpUrlIntegration(
        'PublicIntegration',
        publicBucket.bucketWebsiteUrl,
        {
          parameterMapping: apigateway.ParameterMapping.fromObject({
            'overwrite:path': apigateway.MappingValue.requestPath(),
          }),
        }
    );

    appApi.addRoutes({
      path: '/_next/static/{proxy+}',
      methods: [apigateway.HttpMethod.ANY],
      integration: publicIntegration,
    });

    appApi.addRoutes({
      path: '/_next/image',
      methods: [apigateway.HttpMethod.ANY],
      integration: defaultIntegration,
    });

    new cdk.CfnOutput(this, 'AppUrl', {
      key: 'appUrl',
      value: appApi.apiEndpoint,
    });
  }
}
