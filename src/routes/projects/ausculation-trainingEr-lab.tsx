import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X,
  ArrowLeft
} from "lucide-react";
import logoAsset from "@/assets/META4.png";
import Project1 from "@/assets/project1.png";

export const Route = createFileRoute('/projects/ausculation-trainingEr-lab')({
  head: () => ({
    meta: [
      { title: "Auscultation Training ER Lab | META4" },
    ],
  }),
  component: ProjectPage,
});

const navItems = [
  { name: "Projects", path: "/projects/" }
];

function ProjectPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="relative z-50 bg-background border-b border-border shadow-sm">
        <div className="w-full h-24 md:h-32 flex items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoAsset} alt="CONSERT Laboratory" className="h-24 md:h-40 w-auto object-contain" />
          </Link>
          
          {/* ----- DESKTOP MENU ----- */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm md:text-base font-medium text-foreground/80 hover:text-primary transition-colors [&.active]:text-primary [&.active]:font-bold"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-md text-foreground hover:bg-secondary transition-colors"
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
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 text-base font-medium text-foreground/90 hover:text-primary border-b border-border/60 last:border-0"
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

      {/* Main Content - Project Details */}
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm font-bold text-primary tracking-widest uppercase mb-10 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="space-y-10">
            {/* Project Header */}
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4">
                Innovations
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tighter">
                Auscultation training ER Lab - CoNSeRT
              </h1>
            </div>

            {/* Featured Image */}
            <div className="w-full aspect-video overflow-hidden rounded-2xl bg-secondary">
              <img 
                src={Project1} 
                alt="Auscultation Training ER Lab" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p className="text-lg md:text-xl leading-relaxed font-medium text-foreground/90">
                The Auscultation training ER Lab is an innovative mobile application designed to enhance the learning experience for medical professionals and students in auscultation skills.
              </p>
              <p className="mt-6">
                By utilizing mixed reality (MR) technology, users can practice identifying heart and respiratory sounds through interactive simulations. The application is compatible with Meta Quest devices, offering a user-friendly interface that facilitates hands-on training.
              </p>
            </div>
          </div>

        </div>
      </main>

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
      </footer>
    </div>
  );
}