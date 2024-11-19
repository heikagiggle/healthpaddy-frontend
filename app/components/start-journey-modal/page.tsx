import React from 'react';
import dynamic from 'next/dynamic';

interface Props {
  trigger: React.ReactNode;
}

const StartJourneyModalSteps = dynamic(() => import('./StartJourneryModalSteps'), { ssr: false });


const StartJourneyModal = ({ trigger }: Props) => {
  return (
    <div>
      <StartJourneyModalSteps trigger={trigger} />
    </div>
  );
};

export default StartJourneyModal;
