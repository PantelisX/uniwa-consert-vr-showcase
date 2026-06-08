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

export const Route = createFileRoute('/projects/auscultation-trainingEr-lab')({
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

          <div className="space-y-12">
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
              
              {/* Overview */}
              <h3 className="text-2xl font-bold text-foreground mb-4">Overview</h3>
              <p className="text-lg md:text-xl leading-relaxed font-medium text-foreground/90">
                The Auscultation training ER Lab is an innovative mobile application designed to enhance the learning experience for medical professionals and students in auscultation skills. By utilizing mixed reality (MR) technology, users can practice identifying heart and respiratory sounds through interactive simulations. The application is compatible with Meta Quest devices, offering a user-friendly interface that facilitates hands-on training.
              </p>

              {/* How It Works */}
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">How It Works</h3>
              <p className="leading-relaxed">
                The application provides an immersive experience by combining audio simulations of heart and respiratory sounds with visual representations of the anatomy. Users can select various scenarios, allowing them to practice identifying normal and pathological sounds in a realistic environment.
              </p>
              
              <h4 className="text-xl font-semibold text-foreground mb-4 mt-8">Key features include:</h4>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</span>
                  <span><strong className="text-foreground">Realistic Sound Simulation:</strong> The app generates high-quality audio samples of heartbeats and breath sounds, allowing users to familiarize themselves with different physiological and pathological conditions.</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</span>
                  <span><strong className="text-foreground">Interactive Anatomy Visualizations:</strong> Users can explore detailed 3D models of the heart and lungs, helping to contextualize the sounds they are learning to identify.</span>
                </li>
              </ul>

              {/* Hardware/Software Requirements */}
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">Hardware/Software Requirements</h3>
              <p className="leading-relaxed mb-4">The Auscultation training ER Lab requires:</p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</span>
                  <span>Installation on a compatible Meta Quest device, preferably colored passthrough models like the Quest Pro, Quest 3, and Quest 3S.</span>
                </li>
              </ul>

              {/* Benefits */}
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">Benefits</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</span>
                  <span><strong className="text-foreground">Enhanced Learning:</strong> The combination of audio and visual elements supports different learning styles, making it easier for users to grasp complex concepts.</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</span>
                  <span><strong className="text-foreground">Convenience:</strong> Users can practice anytime and anywhere, eliminating the need for physical stethoscope training sessions or expensive training tools.</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</span>
                  <span><strong className="text-foreground">Engaging Interface:</strong> The interactive nature of the app keeps users motivated and engaged in their learning process.</span>
                </li>
              </ul>

              {/* Conclusion */}
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">Conclusion</h3>
              <p className="leading-relaxed">
                The Auscultation training ER Lab represents a significant advancement in medical education technology. By leveraging mixed reality and audio simulations, it provides an effective platform for training in auscultation skills, helping to prepare future healthcare professionals with confidence and competence.
              </p>

              {/* Collaboration & Credits Box */}
              <div className="mt-12 bg-secondary/40 p-6 md:p-8 rounded-2xl border border-border">
                <p className="leading-relaxed mb-6 italic text-sm md:text-base">
                  This project is being developed in collaboration with the ICU Follow-up Care Research Lab (Eργαστήριο ΜΕΘ – Μετανοσοκομειακή Παρακολούθηση Ασθενών) of the Nursing Department, highlighting the importance of interdisciplinary partnerships in advancing medical education.
                </p>
                <div className="space-y-2 text-sm md:text-base text-foreground bg-background/50 p-4 rounded-xl">
                  <p><strong className="text-primary tracking-wide uppercase text-xs mr-2">Lead Developer:</strong> Kladogenis Panagiotis</p>
                  <p><strong className="text-primary tracking-wide uppercase text-xs mr-2">Associate Researchers:</strong> Konstantinos Evgenikos, Dimitrios Papageorgiou</p>
                </div>
              </div>

              
              {/* YouTube Video Embed */}
              <div className="mt-12 rounded-2xl overflow-hidden border border-border shadow-2xl bg-black">
                <div className="aspect-video w-full relative">
                  <iframe 
                    src="https://www.youtube.com/embed/EdTsUYTJUHc" 
                    title="Auscultation Training ER lab - YouTube" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  ></iframe>
                </div>
              </div>

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