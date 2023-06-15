import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactForm />
      <Features />
    </>
  );
}
