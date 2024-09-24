import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <HowWorks />
      <Pricing />
      <FAQs />
    </div>
  );
}
