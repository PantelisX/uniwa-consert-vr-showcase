import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X,
  Mail, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Phone 
} from "lucide-react";
import logoAsset from "@/assets/META4.png";
import heroBg from "@/assets/hero-network.jpg";

export const Route = createFileRoute("/team/faculty")({
  head: () => ({
    meta: [{ title: "Faculty | META4" }],
  }),
  component: FacultyPage,
});

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

const facultyMembers = [
  {
    category: "Meet the faculty members of Meta4",
    members: [
      {
        name: "Charalampos Z. Patrikakis",
        title: "Professor (Lab Director)",
        bio: "He is a Professor at the University of West Attica (UniWA) on the Design and Implementation of Interconnected Electronic Systems and Services, with emphasis on data collection and processing. He is the Director of Computer Network Services Research laboraTory, Director of the Information Transmission-Processing and Networks Division of the Dept. of Electrical and Electronics Engineering of UniWA, a founding member of THINGENIOUS, a spinoff company of UniWA and the Director of the MSc Program “Artificial Intelligence and Deep Learning”. He has served as advisor to the Deputy Minister of Development in Greece, responsible for issues related to research during 2006-2007. He is currently Editor in Chief of IEEE IT Professional Magazine, Computer Society representative at the Steering committee of IEEE Internet of Things Journal, a Senior Member of IEEE, an IEEE Computer Society Distinguished Contributor, IEEE Computer society Distinguished Visitor and counselor of IEEE Student Branch of UniWA, Chair of the Special Interest Group on Trustworthiness on Social Networks of the Social Networks Technical Committee of IEEE and Member of the Technical Chamber of Greece.",
        imageUrl: "https://consert.uniwa.gr/patrikakis-square/", 
        social: {
          linkedin: "#", facebook: "#", twitter: "#", instagram: "#", youtube: "#", skype: "#", whatsapp: "#", mail: "#"
        }
      },
    ]
  },
  {
    category: "Teaching Personel",
    subtitle: "Meet the Teaching Personel of Meta4.",
    members: [
       {
        name: "",
        title: "r",
        bio: "",
        imageUrl: "https://via.placeholder.com/150",
        social: { linkedin: "#", skype: "#", mail: "#" }
      },
    ]
  },
  {
    category: "Collaborating Members",
    subtitle: "Meet the collaborating members of Meta4.",
    members: [
      {
        name: "",
        title: "",
        bio: "",
        imageUrl: "https://via.placeholder.com/150",
        social: { mail: "#" }
      }
    ]
  },
   {
    category: "Visiting Professors",
    subtitle: "Meet the Visiting Professors of Meta4.",
    members: [
      {
        name: "",
        title: "",
        bio: "",
        imageUrl: "https://via.placeholder.com/150",
        social: { mail: "#" }
      },
    ]
  }
];

function SocialIcons({ social }: { social: any }) {
  if (!social || Object.keys(social).length === 0) return null;
  const iconClass = "h-4 w-4 text-muted-foreground hover:text-primary transition-colors";
  
  return (
    <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
      {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin className={iconClass} /></a>}
      {social.facebook && <a href={social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"><Facebook className={iconClass} /></a>}
      {social.twitter && <a href={social.twitter} target="_blank" rel="noopener noreferrer" title="X (Twitter)"><Twitter className={iconClass} /></a>}
      {social.instagram && <a href={social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram className={iconClass} /></a>}
      {social.youtube && <a href={social.youtube} target="_blank" rel="noopener noreferrer" title="YouTube"><Youtube className={iconClass} /></a>}
      {social.skype && <a href={social.skype} target="_blank" rel="noopener noreferrer" title="Skype"><Phone className={iconClass} /></a>}
      {social.whatsapp && <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp"><Phone className={iconClass} /></a>}
      {social.mail && <a href={`mailto:${social.mail}`} title="Mail"><Mail className={iconClass} /></a>}
    </div>
  );
}

function FacultyPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ----------------- NAVBAR ----------------- */}
      <header className="relative z-50 bg-background border-b border-border shadow-sm">
        <div className="w-full h-24 md:h-32 flex items-center justify-between px-6 md:px-10">
          <a href="/" className="flex items-center shrink-0">
            <img src={logoAsset} alt="META4" className="h-24 md:h-40 w-auto object-contain" />
          </a>
          
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
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

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
                            <Link to={subItem.path} onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link to={item.path} onClick={() => setMobileOpen(false)} className="flex items-center justify-between py-3 text-base font-medium text-foreground/90 hover:text-primary border-b border-border/60 last:border-0 transition-colors">
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

      {/* ----------------- HERO BANNER ----------------- */}
      <section className="relative w-full h-48 md:h-64 flex items-center overflow-hidden border-b border-border">
        <img 
          src={heroBg} 
          alt="Faculty Header Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight shadow-sm">
            Faculty
          </h1>
          <div className="h-1 w-16 bg-primary mt-4 rounded-full mx-auto" />
        </div>
      </section>

      {/* ----------------- MAIN CONTENT ----------------- */}
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          
          {facultyMembers.map((section, index) => (
            <div key={index} className="mb-20 last:mb-0">
              {/* Section Header */}
              <div className="mb-12 border-b border-border pb-6 text-center flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                  {section.category}
                </h2>
                <p className="text-lg text-primary italic max-w-2xl">
                  {section.subtitle}
                </p>
              </div>

              {/* Members List */}
              <div className="flex flex-col gap-16">
                {section.members.map((member, mIndex) => (
                  <div key={mIndex} className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Image & Social Column */}
                    <div className="flex flex-col items-center flex-shrink-0 w-full md:w-48">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-sm mb-4">
                        <img 
                          src={member.imageUrl} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <SocialIcons social={member.social} />
                    </div>

                    {/* Text Content Column */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                        {member.title}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </main>

      {/* ----------------- FOOTER ----------------- */}
      <footer className="bg-card border-t border-border text-foreground mt-auto">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
          <div>
            <img src={logoAsset} alt="META4" className="h-20 w-auto" />
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
                <a href="https://gr.linkedin.com/in/consert-uniwa-0a747b200" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="h-3.5 w-3.5 text-primary" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCQzf34x36_aISpcy9PIF2ZA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
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