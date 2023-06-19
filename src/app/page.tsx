import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/Features";
import { ExtraData } from "@/components/ExtraData";
import Footer from "@/components/Footer";
import Courses from "@/components/FAQ";
import FAQ from "@/components/FAQ";
import { CallWhatsapp } from "@/components/CallWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactForm />
      <Features />
      <ExtraData />
      <FAQ />
      <Footer />
      <CallWhatsapp />
    </>
  );
}
