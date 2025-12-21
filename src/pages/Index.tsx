import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SparkleClean - Professional Cleaning Services | Home & Office Cleaning</title>
        <meta
          name="description"
          content="SparkleClean offers premium residential and commercial cleaning services. Get a spotless home with our eco-friendly deep cleaning, regular maintenance, and more. Book your free quote today!"
        />
        <meta
          name="keywords"
          content="cleaning services, house cleaning, deep cleaning, commercial cleaning, eco-friendly cleaning, professional cleaners"
        />
      </Helmet>

      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Stats />
        <About />
        <BeforeAfter />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
