"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Briefcase, Linkedin, Quote, Star, TrendingUp, Twitter, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="plain"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="The Techshop"
          navItems={[
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "News", id: "news" }
          ]}
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="The Techshop"
          description="Patient and active capital for the best early-stage ventures in the B2B digital space"
          buttons={[
            { text: "Explore Portfolio", href: "portfolio" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092538129-8b9so3rq.jpg"
          imageAlt="Venture capital and tech startup environment"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Approach"
          description={[
            "We partner with founders at the seed stage, providing both active support and strategic know-how.",
            "Our team combines deep expertise in B2B digital ventures with a patient capital approach that supports early-stage companies through their critical growth phases."
          ]}
          buttons={[
            { text: "Start Your Journey", href: "contact" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Our Process"
          description="Discover how we bring innovative ideas to life through strategic capital and active support"
          tag="Investment Strategy"
          tagIcon={Zap}
          textboxLayout="split"
          features={[
            {
              id: 1,
              title: "Seed Stage Investment",
              description: "We identify and partner with exceptional founders operating in the B2B digital space at their earliest stages of growth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092538833-2ead07to.jpg",
              imageAlt: "Seed stage founders meeting and collaboration"
            },
            {
              id: 2,
              title: "Strategic Support",
              description: "Beyond capital, we provide hands-on mentorship, industry connections, and strategic guidance to accelerate growth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092539785-tt16ivii.jpg",
              imageAlt: "Strategic business planning and support"
            },
            {
              id: 3,
              title: "Portfolio Development",
              description: "We actively manage our portfolio, helping companies navigate challenges and capitalize on market opportunities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092540524-dpw70rj9.jpg",
              imageAlt: "Portfolio management and analytics"
            }
          ]
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardThree
          title="Portfolio"
          description="Our curated selection of promising B2B digital ventures backed by strategic capital and active support"
          tag="Current Investments"
          tagIcon={Briefcase}
          textboxLayout="default"
          products={[
            {
              id: "1",
              name: "Platform Intelligence",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092541369-se0sytja.jpg",
              imageAlt: "Platform Intelligence B2B SaaS solution",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Digital Commerce",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092542610-cmsh6xz9.jpg",
              imageAlt: "Digital Commerce platform for enterprises",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Enterprise Solutions",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092543323-ts7izbdg.jpg",
              imageAlt: "Enterprise B2B technology solutions",
              initialQuantity: 1
            }
          ]
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Impact & Growth"
          description="Demonstrable results from our portfolio companies and strategic investments"
          tag="Performance"
          tagIcon={TrendingUp}
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: Zap,
              title: "Active Investments",
              value: "20+"
            },
            {
              id: "2",
              icon: Users,
              title: "Portfolio Companies",
              value: "15"
            },
            {
              id: "3",
              icon: TrendingUp,
              title: "Average Growth",
              value: "250%"
            },
            {
              id: "4",
              icon: Award,
              title: "Success Rate",
              value: "85%"
            }
          ]
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced professionals dedicated to supporting early-stage ventures in the B2B digital space"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Founder & Managing Partner",
              description: "Venture capital expert with 15+ years in B2B digital investments and portfolio management",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092544095-2v08xgr0.jpg",
              imageAlt: "Marco Rossi, Founder & Managing Partner",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Giulia Ferrari",
              role: "Investment Director",
              description: "Strategic investor focusing on early-stage B2B companies with disruptive technologies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092544893-6cg71jvz.jpg",
              imageAlt: "Giulia Ferrari, Investment Director",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "Andrea Bianchi",
              role: "Operations Partner",
              description: "Expert in scaling operations and financial management for growing tech ventures",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092545600-tzy4xctt.jpg",
              imageAlt: "Andrea Bianchi, Operations Partner",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",
              name: "Laura Conti",
              role: "Business Development Lead",
              description: "Connects portfolio companies with strategic partnerships and market opportunities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092546350-jolh3tbl.jpg",
              imageAlt: "Laura Conti, Business Development Lead",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Founders Say"
          description="Testimonials from portfolio company founders who have benefited from our strategic support and capital"
          tag="Portfolio Feedback"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Alex Chen",
              handle: "@alexchen_founder",
              testimonial: "The Techshop didn't just provide capital, they provided strategic guidance that accelerated our growth by months. Their hands-on approach made all the difference.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092547075-7sbm0bv2.jpg",
              imageAlt: "Alex Chen, Founder",
              icon: Quote
            },
            {
              id: "2",
              name: "Sofia Martinez",
              handle: "@sofiamartinez",
              testimonial: "Exceptional partners who truly understand the B2B digital space. Their network and expertise have opened doors we couldn't have accessed alone.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092547755-9otcb3w1.jpg",
              imageAlt: "Sofia Martinez, CEO",
              icon: Quote
            },
            {
              id: "3",
              name: "Thomas Wagner",
              handle: "@twagner",
              testimonial: "The patient capital approach is refreshing. They're invested in our long-term success, not just quick exits. Perfect partnership for our growth stage.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092548510-xloboagl.jpg",
              imageAlt: "Thomas Wagner, Co-Founder",
              icon: Quote
            },
            {
              id: "4",
              name: "Priya Patel",
              handle: "@priyap_tech",
              testimonial: "Working with The Techshop transformed how we approach strategic planning. Their insights have been invaluable for scaling our B2B platform.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092549190-lmvn84m5.jpg",
              imageAlt: "Priya Patel, Founder",
              icon: Quote
            }
          ]
          animationType="opacity"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Interested in partnering with us? We'd love to hear from founders building the next generation of B2B digital ventures."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your venture and vision",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764092549956-4ojpa56p.jpg"
          imageAlt="Modern office meeting space"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Portfolio", href: "portfolio" },
                { label: "Team", href: "team" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "News", href: "news" },
                { label: "Blog", href: "https://blog.techshop.capital" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://techshop.capital/privacy" },
                { label: "Terms & Conditions", href: "https://techshop.capital/terms" },
                { label: "Compliance", href: "https://techshop.capital/compliance" }
              ]
            }
          ]
          copyrightText="© 2025 The Techshop SGR S.p.A. | Iscritta al n. 194 dell'Albo delle Società di Gestione del Risparmio"
        />
      </div>
    </ThemeProvider>
  );
}