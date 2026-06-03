import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ChevronRight, Search, Facebook, Linkedin, Twitter, MapPin } from "lucide-react";
import logoAsset from "@/assets/consert-logo.png.asset.json";
const logo = logoAsset.url;
import heroBg from "@/assets/hero-network.jpg";
import xrealUltra from "@/assets/xreal-ultra-2.jpg";
import evenG1 from "@/assets/even-g1.jpg";
import xrealBeam from "@/assets/xreal-beam-pro.jpg";
import vuzix from "@/assets/vuzix-494.jpg";
import metaQuest from "@/assets/meta-quest-3.jpg";
import visionPro from "@/assets/apple-vision-pro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VR/AR Equipment — CONSERT Laboratory | UNIWA" },
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

const navItems = ["About", "RnD", "Initiatives", "People", "News & Events", "Opportunities"];

const equipment = [
  { name: "Xreal Ultra 2", img: xrealUltra, desc: "Next-generation AR glasses delivering an expansive 152-inch virtual display with spatial computing capabilities for immersive research applications." },
  { name: "Even Realities G1", img: evenG1, desc: "Lightweight everyday smart glasses with seamless HUD integration — ideal for ambient computing and contextual data studies." },
  { name: "Xreal Beam Pro", img: xrealBeam, desc: "Dedicated spatial computing companion that streams 3D content to AR glasses and serves as a tetherless research controller." },
  { name: "Vuzix Model 494", img: vuzix, desc: "Enterprise-grade smart glasses engineered for industrial AR workflows, remote assistance and field data collection." },
  { name: "Meta Quest 3", img: metaQuest, desc: "Standalone mixed-reality headset with full-color passthrough, enabling VR experimentation and interactive prototyping." },
  { name: "Apple Vision Pro", img: visionPro, desc: "Premium spatial computer with ultra-high-resolution micro-OLED displays and eye-tracking — a benchmark for next-gen XR research." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="CONSERT Laboratory" className="h-12 w-auto" width={48} height={48} />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item} href="#" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground inline-flex items-center gap-1 transition-colors">
                {item}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="relative mx-auto max-w-5xl px-6 py-28 md:py-40 text-center text-white">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-6">VR / AR Research</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Exploring the Future with<br />Immersive Technologies
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Discover the cutting-edge VR/AR equipment of the multi-disciplinary CONSERT Laboratory.
          </p>
          <form className="mt-12 max-w-2xl mx-auto flex items-stretch bg-white rounded-md overflow-hidden shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search equipment, research, publications…"
              className="flex-1 px-5 py-4 text-foreground placeholder:text-muted-foreground outline-none"
              aria-label="Search"
            />
            <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 inline-flex items-center gap-2 transition-colors">
              <Search className="h-4 w-4" />
              Search
            </button>
          </form>
        </div>
      </section>

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
              <article
                key={item.name}
                className="group bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <div className="mt-5 h-0.5 w-8 bg-primary transition-all duration-300 group-hover:w-16" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border text-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
          <div>
            <img src={logo} alt="CONSERT" className="h-20 w-auto" />
            <p className="mt-6 text-sm text-muted-foreground max-w-xs">
              <span className="font-semibold"><span className="text-primary">CO</span>mputer Networks &amp; <span className="text-primary">SE</span>rvices <span className="text-primary">R</span>esearch labora<span className="text-primary">T</span>ory</span>
            </p>
            <p className="mt-6 text-sm text-muted-foreground">© CoNSeRT {new Date().getFullYear()}</p>
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
              <li><a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"><ChevronRight className="h-3.5 w-3.5 text-primary" /> Facebook</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"><ChevronRight className="h-3.5 w-3.5 text-primary" /> LinkedIn</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"><ChevronRight className="h-3.5 w-3.5 text-primary" /> YouTube</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"><ChevronRight className="h-3.5 w-3.5 text-primary" /> X (former Twitter)</a></li>
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
