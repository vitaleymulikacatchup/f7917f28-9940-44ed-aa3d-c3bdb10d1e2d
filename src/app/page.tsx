"use client";
import { CanvasRevealEffect } from '@/components/background/CanvasRevealEffect';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import Image from 'next/image';

const Home = () => {
  const portfolioItems = [
    { title: "Futuristic Landscape", image: "/images/placeholder1.avif" },
    { title: "Urban Vibes", image: "/images/placeholder2.avif" },
    { title: "Neon Glow", image: "/images/placeholder3.avif" },
    { title: "Cinematic Portraits", image: "/images/placeholder4.avif" },
    { title: "Night City Life", image: "/images/placeholder5.avif" },
    { title: "Artistic Shadows", image: "/images/placeholder6.avif" },
    { title: "Minimalistic", image: "/images/placeholder7.avif" },
    { title: "Abstract Patterns", image: "/images/placeholderwide1.jpg" },
  ];

  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-hero p-6">
        <SimpleHero
          title="NovaLens Studio"
          description="Capture the essence of moments with our futuristic photography."
          primaryButtonText="View Portfolio"
          secondaryButtonText="Contact Us"
        />
      </section>
      <section id="about" className="bg-about">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">About the Photographer</h2>}
          description={<p>With a bold vision, I capture high-contrast, cinematic moments that resonate.</p>}
        />
      </section>
      <section id="portfolio" className="bg-portfolio">
        <GalleryBento
          items={portfolioItems}
          className="gallery-grid"
          gridClassName="grid grid-cols-2 gap-4"
        />
      </section>
      <section id="services" className="bg-services">
        <SimpleKPIBento
          items={[
            { value: "Portraits", description: "Capturing emotions and personalities.", icon: <Image src="/images/logo-dot.svg" alt="Portraits Icon" /> },
            { value: "Editorial", description: "Bringing stories to life through visuals.", icon: <Image src="/images/logo-dot.svg" alt="Editorial Icon" /> },
            { value: "Brand Shoots", description: "Visual identity that resonates with your audience.", icon: <Image src="/images/logo-dot.svg" alt="Brand Shoots Icon" /> },
          ]}
          className="services-grid"
        />
      </section>
      <section id="testimonials" className="bg-testimonials">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">What Our Clients Say</h2>}
          description={<p>"The results were stunning!" - Alex</p>}
        />
      </section>
      <section id="contact" className="bg-contact">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input" required />
          <input type="email" placeholder="Your Email" className="input" required />
          <select className="input">
            <option value="Portraits">Portraits</option>
            <option value="Editorial">Editorial</option>
            <option value="Brand Shoots">Brand Shoots</option>
          </select>
          <textarea placeholder="Your Message" className="input" required></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
      <footer>
        <SimpleFooter
          columns={[
            { title: "Follow Us", items: [{ label: "Instagram", onClick: () => {} }] },
            { title: "Contact", items: [{ label: "Email", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 NovaLens. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </footer>
    </SiteThemeProvider>
  );
};

export default Home;
