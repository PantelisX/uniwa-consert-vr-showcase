import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Menu, 
  X,
  BrainCircuit, 
  Gamepad2, 
  Network, 
  Blocks, 
  ShieldAlert, 
  Lightbulb
} from "lucide-react";
import logoAsset from "@/assets/META4.png";
import heroBg from "@/assets/hero-network.jpg";
import xrealUltra from "@/assets/xreal2.jpeg";
import xrealUltraAlt1 from "@/assets/xreal3.jpeg";
import xrealUltraAlt2 from "@/assets/xreal1.jpeg";
import evenG1 from "@/assets/even-realities-g1.jpg";
import evenG1Alt1 from "@/assets/even-realities-g1-3.webp";
import evenG1Alt2 from "@/assets/even-realities-g1-2.jpg";
import xrealBeam from "@/assets/Xreal-beam-pro1.png";
import xrealBeamAlt1 from "@/assets/xreal-beam2.jpeg";
import xrealBeamAlt2 from "@/assets/xreal-beam3.jpeg";
import vuzix from "@/assets/Vuzix-Blade3.jpg";
import vuzixAlt1 from "@/assets/Vuzix-Blade1.webp";
import vuzixAlt2 from "@/assets/Vuzix-Blade2.webp";
import metaQuest from "@/assets/meta-quest1.webp";
import metaQuestAlt1 from "@/assets/meta-quest2.jpg";
import metaQuestAlt2 from "@/assets/meta-quest3.webp";
import visionPro from "@/assets/apple-vision1.png";
import visionProAlt1 from "@/assets/apple-vision2.webp";
import visionProAlt2 from "@/assets/apple-vision3.webp";
import appleVideo from "@/assets/applevisionprovid.mp4";
import xrealVideo from "@/assets/xrealvid.mp4";
import evenG1Video from "@/assets/evenrealitiesvid.mp4";
import xrealBeamVideo from "@/assets/xrealbeamprovid.mp4";
import vuzixVideo from "@/assets/vuzixvid.mp4";
import metaQuestVideo from "@/assets/metaquest3vid.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home | META4" },
      { name: "description", content: "Explore the state-of-the-art Virtual and Augmented Reality equipment of the CONSERT Laboratory at the University of West Attica." },
      { property: "og:title", content: "VR/AR Equipment — CONSERT Laboratory" },
      { property: "og:description", content: "Discover the cutting-edge VR/AR equipment powering immersive research at CONSERT." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const navItems = [
  { name: "Projects", path: "/projects" },
];

type Equipment = {
  name: string;
  images: string[];
  desc: string;
  video?: string;
};

const XREAL_ULTRA_VIDEO = xrealVideo;
const EVEN_REALITIES_G1_VIDEO = evenG1Video;
const XREAL_BEAM_PRO_VIDEO = xrealBeamVideo;
const VUZIX_MODEL_VIDEO = vuzixVideo;
const META_QUEST_VIDEO = metaQuestVideo;
const APPLE_VIDEO = appleVideo;

const equipment: Equipment[] = [
  { name: "XReal Air 2 Ultra AR", images: [xrealUltra, xrealUltraAlt1, xrealUltraAlt2], desc: "Next-generation AR glasses delivering an expansive 152-inch virtual display with spatial computing capabilities for immersive research applications.", video: XREAL_ULTRA_VIDEO },
  { name: "Even Realities G1", images: [evenG1, evenG1Alt1, evenG1Alt2], desc: "Lightweight everyday smart glasses with seamless HUD integration — ideal for ambient computing and contextual data studies.", video: EVEN_REALITIES_G1_VIDEO },
  { name: "Xreal Beam Pro", images: [xrealBeam, xrealBeamAlt1, xrealBeamAlt2], desc: "Dedicated spatial computing companion that streams 3D content to AR glasses and serves as a tetherless research controller.", video: XREAL_BEAM_PRO_VIDEO },
  { name: "Vuzix Model 494", images: [vuzix, vuzixAlt1, vuzixAlt2], desc: "Enterprise-grade smart glasses engineered for industrial AR workflows, remote assistance and field data collection.", video: VUZIX_MODEL_VIDEO },
  { name: "Meta Quest 3", images: [metaQuest, metaQuestAlt1, metaQuestAlt2], desc: "Standalone mixed-reality headset with full-color passthrough, enabling VR experimentation and interactive prototyping.", video: META_QUEST_VIDEO },
  { name: "Apple Vision Pro", images: [visionPro, visionProAlt1, visionProAlt2], desc: "Premium spatial computer with ultra-high-resolution micro-OLED displays and eye-tracking — a benchmark for next-gen XR research.", video: APPLE_VIDEO },
  { name: "Apple Vision Pro", images: [visionPro, visionProAlt1, visionProAlt2], desc: "Premium spatial computer with ultra-high-resolution micro-OLED displays and eye-tracking — a benchmark for next-gen XR research.", video: APPLE_VIDEO },
  { name: "Apple Vision Pro", images: [visionPro, visionProAlt1, visionProAlt2], desc: "Premium spatial computer with ultra-high-resolution micro-OLED displays and eye-tracking — a benchmark for next-gen XR research.", video: APPLE_VIDEO },
];

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative z-50 bg-background border-b border-border shadow-sm">
        <div className="w-full h-24 md:h-32 flex items-center justify-between px-6 md:px-10">
          <a href="/" className="flex items-center shrink-0">
            <img src={logoAsset} alt="CONSERT Laboratory" className="h-24 md:h-40 w-auto object-contain" />
          </a>
          
          {/* ----- DESKTOP MENU ----- */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                ref={(el) => {
                  navRefs.current[`desktop-${item.name}`] = el;
                }}
                className="text-sm md:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-md text-foreground hover:bg-secondary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* ----- MOBILE MENU ----- */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-border bg-background">
            <ul className="px-6 py-4 flex flex-col">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    ref={(el) => {
                      navRefs.current[`mobile-${item.name}`] = el;
                    }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 text-base font-medium text-foreground/90 hover:text-primary border-b border-border/60 last:border-0 transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="relative mx-auto max-w-5xl px-6 py-28 md:py-40 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.15] drop-shadow-lg">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              META<span className="text-white relative -top-3 md:-top-5 ml-1 text-2xl md:text-4xl font-black inline-block drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">4</span> Innovation Hub
            </span>
            <span className="block mt-4 text-2xl md:text-4xl font-medium text-slate-200 leading-snug">
              is an interdisciplinary effort among research teams of <strong className="text-white font-bold">UniWA</strong> over research and innovation in the{' '}
              <span className="inline-block px-4 py-1 mx-1 -translate-y-1 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md text-white font-semibold shadow-xl">
                four pillars
              </span>{' '}
              defining the new Internet era
            </span>
          </h1>
          <p className="mt-10 text-2xl md:text-3xl font-semibold text-white">
            Check our work on
          </p>
          <form className="mt-8 max-w-3xl mx-auto flex items-stretch bg-white rounded-sm overflow-hidden shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search equipment, research, publications…"
              className="flex-1 px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none"
              aria-label="Search"
            />
            <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 inline-flex items-center gap-2 transition-colors">
              <Search className="h-4 w-4" />
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Innovation Hub Goals */}
      <HubGoals />

      {/* Equipment Showcase */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <div className="h-1 w-12 bg-primary mb-5" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              VR / AR Equipment
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Our laboratory is equipped with a comprehensive suite of headsets, smart glasses and spatial computing devices —
              enabling research across mixed reality, human–computer interaction and immersive learning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <EquipmentCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border text-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
          <div>
            <img src={logoAsset} alt="CONSERT" className="h-20 w-auto" />
            <p className="mt-6 text-sm text-muted-foreground max-w-xs">
              <span className="font-semibold">I<span className="text-primary">M</span>mersion Int<span className="text-primary">E</span>lligence <span className="text-primary">T</span>rust and Decentr<span className="text-primary">A</span>lization</span>
            </p>
            <p className="mt-6 text-sm text-muted-foreground">© Meta4 {new Date().getFullYear()}</p>
          </div>
          <div>
            <div className="h-0.5 w-10 bg-primary mb-3" />
            <h4 className="text-base font-bold text-foreground mb-4">Address</h4>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>University Campus II (Ancient Olive Grove)</p>
              <p>Thivon 250 &amp; Petrou Ralli str, Egaleo, GR 12241<br />ZB 109, Building Z (in Greek → Ktirio Zeta)</p>
              <p>
                (+30) 210.538.1514<br />
                (+30) 210.538.1549<br />
                (+30) 210.538.1637
              </p>
            </address>
          </div>
          <div>
            <div className="h-0.5 w-10 bg-primary mb-3" />
            <h4 className="text-base font-bold text-foreground mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.facebook.com/CoNSeRT.UNIWA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-3.5 w-3.5 text-primary" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/consert-uniwa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-3.5 w-3.5 text-primary" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@CoNSeRTUNIWA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-3.5 w-3.5 text-primary" /> YouTube
                </a>
              </li>
              <li>
                <a href="https://x.com/consertlab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-3.5 w-3.5 text-primary" /> X 
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HubGoals() {
  const domains = [
    {
      title: "Intelligence & Autonomy",
      subtitle: "AI & Machine Learning",
      description: "Development of intelligent, adaptive, and human-centric systems powered by artificial and ambient intelligence.",
    },
    {
      title: "Immersion & Interaction",
      subtitle: "XR, Serious & Entertainment Videogames",
      description: "Advancement of extended reality and gamified environments that seamlessly blend physical and digital worlds.",
    },
    {
      title: "Trust & Decentralization",
      subtitle: "Blockchain & Web3",
      description: "Design of secure, transparent, and decentralized infrastructures for digital ownership, identity, and interoperability.",
    },
    {
      title: "Connectivity & Automation",
      subtitle: "IoT, Robotics & Digital Twins",
      description: "Integration of connected sensing systems, autonomous robotics, and digital twin technologies to enable cyber-physical-social convergence.",
    },
    {
      title: "Safety & Resilience",
      subtitle: "Security, Privacy & Cyber-Trust",
      description: "Ensuring ethical, privacy-preserving, and cyber-resilient frameworks for immersive and intelligent technologies.",
    },
    {
      title: "Societal Applications",
      subtitle: "Industry, Education & Culture",
      description: "Application of immersive and intelligent systems across industry, education, culture, and social innovation.",
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* --- Minimalist Header --- */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-6">
            Our Vision & Mission
          </h2>
          <p className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tighter">
            The Hub’s overarching goal is to establish a research, education, and innovation ecosystem across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">six key domains.</span>
          </p>
        </div>

        {/* --- Typographic List --- */}
        <div className="flex flex-col w-full border-t border-border">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 md:py-10 border-b border-border transition-all duration-300 ease-out"
            >
              
              {/* Massive Number */}
              <div className="text-[4rem] md:text-[6rem] font-black text-foreground/5 group-hover:text-blue-500/20 leading-none tracking-tighter transition-colors duration-500 lg:w-40 shrink-0">
                0{index + 1}
              </div>

              {/* Title & Subtitle */}
              <div className="flex-1 lg:pr-8 mt-4 lg:mt-0">
                <h4 className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 md:mb-3">
                  {domain.subtitle}
                </h4>
                {/* Εδώ επανήλθε το gradient hover effect στον τίτλο */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 transition-all duration-500 tracking-tight">
                  {domain.title}
                </h3>
              </div>

              {/* Description */}
              <div className="w-full lg:w-[35%] mt-4 lg:mt-0 text-muted-foreground group-hover:text-foreground leading-relaxed text-sm md:text-base font-medium transition-colors duration-500">
                {domain.description}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function EquipmentCard({ item }: { item: Equipment }) {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // We use a handler to play the video only on hover for performance,
  // but pre-loading is handled by the "preload" attribute in the tag itself.
  const handleMouseEnter = () => {
    // Pause other videos
    document.querySelectorAll("video").forEach((vid) => {
      if (vid !== videoRef.current) {
        vid.pause();
      }
    });
    // Play current
    videoRef.current?.play().catch(() => {});
  };
  
  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <article
      className="group h-full flex flex-col bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-transparent">
        <img
          src={item.images[active]}
          alt={item.name}
          loading="eager" // Changed from lazy to eager for primary images
          width={800}
          height={600}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground min-h-[2rem]">{item.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground min-h-[5rem]">{item.desc}</p>
        
        {/* ... (Keep your image selection grid here) ... */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {item.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`block aspect-video rounded-md overflow-hidden bg-card border transition-colors ${
                active === i ? "border-primary ring-2 ring-primary/40" : "border-border hover:border-primary"
              }`}
            >
              <img src={src} alt={item.name} loading="lazy" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>

        <div className="mt-3">
          {item.video && (
            item.video.includes("youtube.com/embed") ? (
              <iframe
                src={item.video}
                title={`${item.name} video`}
                loading="lazy"
                className="aspect-video w-full rounded-md overflow-hidden bg-secondary border border-border"
              />
            ) : (
              <video
                ref={videoRef}
                src={item.video}
                muted
                loop
                playsInline
                preload="auto" // <-- KEY CHANGE: 'auto' forces browser to buffer immediately
                className="aspect-video w-full rounded-md overflow-hidden bg-secondary border border-border object-cover"
                // Adding a poster image can also hide the blue/black frame
                poster={item.images[0]} 
              />
            )
          )}
        </div>
        <div className="mt-auto pt-5">
          <div className="h-0.5 w-8 bg-primary transition-all duration-300 group-hover:w-16" />
        </div>
      </div>
    </article>
  );
}