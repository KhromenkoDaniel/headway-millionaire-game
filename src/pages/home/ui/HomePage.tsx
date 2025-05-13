import { StartSection } from '@/widgets/start-section';

export default function HomePage() {
  return (
    <StartSection
      title={
        <>
          Who wants to be
          <br />a millionaire?
        </>
      }
      button="Start"
    />
  );
}
