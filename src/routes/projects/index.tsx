import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useRef } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight
} from "lucide-react";
import logoAsset from "@/assets/META4.png";
import Project1 from "@/assets/project1.png";

export const Route = createFileRoute('/projects/')({
    head: () => ({
    meta: [
      { title: "Projects | META4" },
      ],
  }),
  component: ProjectsPage,
})

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Publications", path: "/publications" },
  { 
    name: "Team", 
    path: "/team",
    subItems: [
      { name: "Faculty", path: "/team/faculty" },
      { name: "Researchers", path: "/team/researchers" },
      { name: "Students", path: "/team/students" },
    ]
  },
  { name: "Contact", path: "/contact" },
];

const projectsData = [
  {
    id: "auscultation-trainingEr-lab",
    title: "Auscultation Training ER Lab",
    category: "Innovations",
    description: "The Auscultation training ER Lab is an innovative mobile application designed to enhance the learning experience for medical professionals and students in auscultation skills. By utilizing mixed reality (MR) technology, users can practice identifying heart and respiratory sounds through interactive simulations. The application is compatible with Meta Quest devices, offering a user-friendly interface that facilitates hands-on training.",
    image: Project1
  }
];

function ProjectsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="relative z-50 bg-background border-b border-border shadow-sm">
        <div className="w-full h-24 md:h-32 flex items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoAsset} alt="CONSERT Laboratory" className="h-24 md:h-40 w-auto object-contain" />
          </Link>
          
          {/* ----- DESKTOP MENU ----- */}
                    <nav className="hidden lg:flex items-center gap-8">
                      {navItems.map((item) => (
                        <div key={item.path} className="relative group">
                          {item.subItems ? (
                             <>
                               <span className="flex items-center gap-1.5 py-4 text-sm md:text-base font-medium text-foreground/80 group-hover:text-primary cursor-default select-none transition-colors">
                                  {item.name}
                                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                </span>
                                <div className="absolute left-1/2 top-[90%] -translate-x-1/2 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                                  <div className="w-48 bg-background/95 backdrop-blur-md border border-border/60 rounded-xl shadow-xl p-2 flex flex-col gap-1">
                                    {item.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.path}
                                        to={subItem.path}
                                        className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <Link
                                to={item.path}
                                className="py-4 text-sm md:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
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
                            {item.subItems ? (
                              <div className="flex flex-col py-3 border-b border-border/60 last:border-0">
                                <div className="flex items-center justify-between text-base font-medium text-foreground/90 select-none">
                                  <span className="flex-1">{item.name}</span>
                                  <ChevronDown className="h-4 w-4 opacity-60" />
                                </div>
                                  <ul className="mt-3 ml-2 flex flex-col gap-1 border-l-2 border-border pl-4">
                                    {item.subItems.map((subItem) => (
                                      <li key={subItem.path}>
                                        <Link
                                          to={subItem.path}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <Link
                                  to={item.path}
                                  onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-between py-3 text-base font-medium text-foreground/90 hover:text-primary border-b border-border/60 last:border-0 transition-colors"
                                >
                                  {item.name}
                                  <ChevronRight className="h-4 w-4 opacity-60" />
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    )}
      </header>

      {/* Main Content - Projects List */}
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          
          {/* --- Minimalist Header --- */}
          <div className="mb-16 md:mb-24 max-w-3xl pt-8">
            <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-6">
              Research & Development
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tighter">
              Exploring the boundaries of technology through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">applied innovation.</span>
            </h1>
          </div>

          {/* --- Typographic Interactive List --- */}
          <div className="flex flex-col w-full border-t border-border">
            {projectsData.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}` as unknown as string}
                className="group flex flex-col lg:flex-row items-start lg:items-center py-8 md:py-12 border-b border-border transition-colors duration-300 cursor-pointer gap-6 lg:gap-10"
              >

                {/* Project Image */}
                <div className="w-full lg:w-48 xl:w-56 aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-xl bg-secondary shrink-0 relative">
                  {/* Subtle overlay to blend the image into the design */}
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Title & Subtitle */}
                <div className="flex-1 lg:pr-4 mt-2 lg:mt-0">
                  <h4 className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-2 md:mb-3">
                    {project.category}
                  </h4>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 transition-all duration-500 tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description & Action Arrow */}
                <div className="w-full lg:w-[35%] mt-2 lg:mt-0 flex items-center justify-between gap-6 text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  <p className="leading-relaxed text-sm md:text-base font-medium">
                    {project.description}
                  </p>
                  
                  {/* Hover Arrow Indicator */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300 shrink-0 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                
              </Link>
            ))}
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