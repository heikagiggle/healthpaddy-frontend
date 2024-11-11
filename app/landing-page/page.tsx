import Benefits from "./benefits";
import Faqs from "./faqs/faqs";
import Support from "./support";
import CtaCalorieCal from "./cta-calorie-cal";
import Chop from "./chop";
import HeroSection from "./hero-section";
import Goals from "./goals";
import MeetUsers from "./meet-users";

export default function LandingPage() {
  return (
    <>
      <div>
        <HeroSection />
        <Goals />
        <Benefits />
        <CtaCalorieCal />
        <Chop />
        <MeetUsers />
        <Faqs />
        <Support />
      </div>
    </>
  );
}
