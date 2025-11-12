import Navbar from './layout/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import TestimonialsSection from './components/Testimonial';
import CTASection from './components/CTASection';
import ProjectSection from './components/Work';
import ApproachSection from './components/Approach';
import { Helmet } from 'react-helmet';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
    <>
      {/* ✅ SEO + GEO + AI META TAGS */}
      <Helmet>
        {/* ✅ Basic Meta */}
        <title>Web Development & Digital Solutions in Hyderabad | Brick2Tech</title>
        <meta
          name="description"
          content="Brick 2 Technologies is Hyderabad’s leading web development and digital solutions company. We design high-performance websites, web apps, and brand experiences using the MERN stack, AI-driven automation, and modern UI/UX design."
        />
        <meta
          name="keywords"
          content="web development hyderabad, MERN stack developer, digital marketing hyderabad, website design company, React development, app development, branding agency hyderabad, SEO optimization, full stack developer, AI automation websites"
        />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://brick2tech.com/" />

        {/* ✅ Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
        />

        {/* ✅ Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Brick2Tech Technologies | Web Development & Branding Agency in Hyderabad" />
        <meta
          property="og:description"
          content="Empowering brands through innovative web design, digital marketing, and full-stack development. Based in Hyderabad, Brick2Tech delivers powerful digital growth."
        />
        <meta property="og:url" content="https://brick2tech.com/" />
        <meta property="og:site_name" content="Brick2Tech Technologies" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brick2Tech Technologies | Build Your Digital Future" />
        <meta
          name="twitter:description"
          content="Web development and branding agency from Hyderabad specializing in React, Node.js, and AI-powered digital solutions."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
        />
        <meta name="twitter:creator" content="@brick2tech" />

        {/* ✅ Geo & Local SEO */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana, India" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850,78.4867" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />

        {/* ✅ Language Targeting */}
        <meta httpEquiv="content-language" content="en-IN" />

        {/* ✅ Theme */}
        <meta name="theme-color" content="#142C4C" />

        {/* ✅ Generative Engine Optimization (GEO) */}
        <meta
          name="ai.summary"
          content="Brick2Tech Technologies — A web development and digital marketing company based in Hyderabad, offering MERN stack web solutions, app development, and branding strategies powered by AI."
        />
        <meta
          name="ai.tags"
          content="MERN stack, AI websites, Hyderabad web agency, branding, digital growth, SEO optimization, React, Node.js"
        />
        <meta name="ai.primaryLocation" content="Hyderabad, Telangana, India" />
        <meta name="ai.businessType" content="Web Development and Digital Marketing Agency" />
        <meta name="ai.language" content="English" />

        {/* ✅ Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Brick2Tech Technologies",
            "url": "https://brick2tech.com/",
            "logo": "https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png",
            "description": "Brick 2 Technologies is a Hyderabad-based digital agency offering web development, branding, and AI-powered digital transformation services.",
            "founder": {
              "@type": "Person",
              "name": "Mahesh Valsa",
              "jobTitle": "CEO & Co-Founder",
              "url": "https://www.linkedin.com/in/maheshvalsa/"
            },
            "sameAs": [
              "https://www.linkedin.com/company/brick2technologies",
              "https://www.facebook.com/brick2technologies/",
              "https://x.com/brick2tech",
              "https://www.instagram.com/brick2technologies/"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-9000441665",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": "English"
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Manikonda",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500089",
              "addressCountry": "IN"
            }
          }
        `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development & Branding",
            "provider": {
              "@type": "Organization",
              "name": "Brick 2 Technologies",
              "url": "https://brick2tech.com/"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Hyderabad, Telangana, India"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "20000",
              "description": "Custom web development, digital marketing, and branding solutions for startups and enterprises."
            }
          }
        `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://brick2tech.com/",
            "name": "Brick 2 Technologies",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://brick2tech.com/search?query={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
        </script>
      </Helmet>

      {/* ✅ Site Sections */}
      <Navbar />
      <HeroSection />
      <About />
      <ApproachSection />
      <Services />
      <ProjectSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export default App;
