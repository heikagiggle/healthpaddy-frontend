import { ComponentProps, PropsWithChildren, ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type Props = ComponentProps<typeof Dialog> & {
  heading: string;
  description?: string;
  trigger?: ReactNode;
  progressBar?: ReactNode;
};

export function DefaultModal({
  heading,
  description,
  children,
  trigger,
  progressBar,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Dialog {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="lg:max-w-xl md:max-w-lg sm:max-w-md max-w-[22rem] min-h-[550px] max-h-[550px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">{heading}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {progressBar && (
          <div className="sticky top-[4.5rem] w-full bg-white z-10">
            {progressBar}
          </div>
        )}

        <div className="flex-grow overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
