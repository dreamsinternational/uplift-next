import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/Features";
import { ExtraData } from "@/components/ExtraData";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { CallWhatsapp } from "@/components/CallWhatsapp";
import SimpleSlider from "@/components/ResCarousal";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactForm />
      <Features />
      <SimpleSlider />
      <ExtraData />
      <Testimonials />
      <FAQ />
      <Footer />
      <CallWhatsapp />
    </>
  );
}
