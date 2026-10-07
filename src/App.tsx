import { useEffect, useState, type FormEvent } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Crosshair,
  Crown,
  FileCheck2,
  Fingerprint,
  Landmark,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  Orbit,
  Radar,
  Send,
  ServerCog,
  ShieldCheck,
  ShieldAlert,
  Stethoscope,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import cyberNetworkLogo from "./assets/logo.svg";
import cyberNetworkFooterLogo from "./assets/logo-footer.svg";
import programHackerIllustration from "./assets/A hacker breaks into a program.svg";
import hackerUsingLaptopIllustration from "./assets/Hacker using laptop.svg";
import documentProtectionIllustration from "./assets/Document protection.svg";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

function InstagramIcon({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none" /></svg>;
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.76 1.88 1.88 0 0 0 4.88 3ZM20.75 13.26c0-3.54-1.89-5.19-4.42-5.19a3.83 3.83 0 0 0-3.47 1.91V8.25H9.61V20h3.25v-5.82c0-1.53.29-3.02 2.19-3.02 1.87 0 1.89 1.75 1.89 3.12V20h3.25l.56-6.74Z" /></svg>;
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.44 0 .07 5.37.07 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.93 11.93 0 0 0 5.84 1.49h.01C18.64 23.87 24 18.5 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.04 21.85h-.01a9.91 9.91 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.58-.23-.37a9.93 9.93 0 0 1-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94a9.86 9.86 0 0 1 7.03 2.92 9.88 9.88 0 0 1 2.91 7.04c0 5.48-4.46 9.86-10.03 9.86Zm5.45-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" /></svg>;
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/cybernetworkco/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cybernetworkco/", icon: LinkedInIcon },
  { label: "WhatsApp", href: "https://wa.me/", icon: WhatsAppIcon },
];

const services = [
  {
    icon: Radar,
    title: "Security Assessment",
    text: "Identify exposure across applications, infrastructure, identities, and cloud environments with a prioritized remediation plan.",
    tags: ["VAPT", "Risk review", "Attack surface"],
  },
  {
    icon: ShieldCheck,
    title: "Offensive Security",
    text: "Validate real-world resilience through penetration testing, adversary simulation, and focused red-team engagements.",
    tags: ["Pen testing", "Red team", "API security"],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    text: "Secure cloud workloads with practical architecture reviews, posture assessments, and identity-first controls.",
    tags: ["AWS", "Azure", "Cloud posture"],
  },
  {
    icon: FileCheck2,
    title: "Governance & Compliance",
    text: "Turn regulatory requirements into sustainable operating controls that teams can understand and maintain.",
    tags: ["ISO 27001", "SOC 2", "Policy"],
  },
  {
    icon: Network,
    title: "Zero Trust Architecture",
    text: "Reduce lateral movement and implicit trust through identity, segmentation, and least-privilege design.",
    tags: ["IAM", "Segmentation", "ZTA"],
  },
  {
    icon: ServerCog,
    title: "Managed Security",
    text: "Strengthen day-to-day defense with continuous monitoring, incident guidance, and security program support.",
    tags: ["Monitoring", "Response", "Advisory"],
  },
];

const industries = [
  { icon: Landmark, name: "Financial Services", text: "Protect transactions, customer data, and regulated digital systems." },
  { icon: Stethoscope, name: "Healthcare", text: "Secure sensitive records and connected clinical environments." },
  { icon: Building2, name: "Enterprise", text: "Build security into complex hybrid infrastructure and operations." },
  { icon: Code2, name: "Technology", text: "Ship secure products with cloud-native and application security." },
];

const solutionSteps = [
  ["01", "Discover", "Understand the business, critical assets, current controls, and the threat scenarios that matter."],
  ["02", "Validate", "Test assumptions with evidence-led assessments, technical review, and controlled security testing."],
  ["03", "Prioritize", "Translate findings into a practical roadmap based on risk, effort, and operational impact."],
  ["04", "Strengthen", "Support remediation, architecture improvements, governance, and continuous security maturity."],
];

const caseStudies = [
  {
    number: "01",
    industry: "Financial services",
    title: "Containing a credential-led cloud breach",
    summary: "A realistic incident simulation for a fast-growing fintech tested how quickly its team could detect compromised credentials and stop unauthorized access to customer data.",
    challenge: "A convincing phishing message captured an employee session, allowing the mock attacker to access a cloud console and begin privilege escalation.",
    response: "We traced the simulated attack path, isolated the affected identity, revoked active sessions, and helped the team coordinate technical, legal, and leadership decisions.",
    outcomes: ["Access contained in 42 minutes", "No mock customer data exfiltrated", "MFA and session controls strengthened"],
  },
  {
    number: "02",
    industry: "Healthcare",
    title: "Stopping ransomware before clinical disruption",
    summary: "A controlled ransomware exercise challenged a healthcare provider’s ability to protect connected systems while keeping essential services available.",
    challenge: "The mock incident began on an unmanaged endpoint and moved laterally toward a shared server used by operational and clinical teams.",
    response: "We worked with IT to segment the affected systems, validate backups, preserve evidence, and run a clear communication rhythm across operational stakeholders.",
    outcomes: ["Lateral movement blocked", "Critical services remained available", "Recovery playbook reduced to 6 steps"],
  },
];

type PageKey = "services" | "solutions" | "industries" | "case-studies" | "about" | "contact";

function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = document.querySelectorAll<HTMLElement>("[data-scroll-reveal], main > section");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("scroll-reveal-ready");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      root.classList.remove("scroll-reveal-ready");
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("scroll-reveal-ready");
    };
  }, []);
}

function SocialLinks() {
  return (
    <div className="mt-6 flex items-center gap-2" aria-label="Social media links">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Follow Cyber Network on ${social.label}`}
          title={social.label}
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#445149] transition-all hover:-translate-y-0.5 hover:border-[#00a765]/40 hover:bg-[#e8f8f0] hover:text-[#008c55]"
        >
          <social.icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}

function GreenChatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string }>>([]);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { role: "user", text },
      {
        role: "assistant",
        text: "Thanks for your question. The G.R.E.E.N chat preview is not connected to an AI service yet. For tailored help, contact contact@cybernetworkco.com.",
      },
    ]);
    setMessage("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {open && (
        <section
          aria-label="G.R.E.E.N chatbot"
          className="flex h-[min(500px,calc(100dvh-120px))] w-[min(360px,calc(100vw-40px))] flex-col overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(11,23,18,0.24)]"
        >
          <header className="flex items-center justify-between bg-[#0b1712] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#00b871]/15 text-[#55e6aa]">
                <Zap className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">G.R.E.E.N</p>
                <p className="mt-0.5 text-xs text-white/55">Cybersecurity chat assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close G.R.E.E.N chat"
              className="grid h-9 w-9 place-items-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f7f8f7] p-4" aria-live="polite">
            <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white p-3.5 text-sm leading-6 text-[#34433b] shadow-sm">
              Hi, I’m G.R.E.E.N. Ask me about cybersecurity services, risk priorities, or getting in touch with our team.
            </div>
            {messages.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                className={`max-w-[88%] rounded-2xl p-3.5 text-sm leading-6 ${
                  item.role === "user"
                    ? "ml-auto rounded-br-md bg-[#00b871] text-[#06130e]"
                    : "rounded-bl-md bg-white text-[#34433b] shadow-sm"
                }`}
              >
                {item.text}
              </div>
            ))}
            <p className="px-1 text-[11px] leading-5 text-[#77847c]">
              Chat preview — AI responses are not connected yet.
            </p>
          </div>

          <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-black/[0.07] bg-white p-3">
            <label className="sr-only" htmlFor="green-chat-message">Your message</label>
            <input
              id="green-chat-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type your message..."
              className="min-w-0 flex-1 rounded-full border border-black/10 bg-[#f7f8f7] px-4 py-3 text-sm text-[#0b1712] outline-none transition focus:border-[#00a765]"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!message.trim()}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#00b871] text-[#06130e] transition hover:bg-[#55e6aa] disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? "Close G.R.E.E.N chatbot" : "Chat with G.R.E.E.N"}
        className="group inline-flex items-center gap-2.5 rounded-full bg-[#0b1712] px-5 py-4 text-sm font-bold text-white shadow-[0_12px_36px_rgba(11,23,18,0.24)] transition hover:-translate-y-0.5 hover:bg-[#00a765]"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span>{open ? "Close chat" : "Chat with G.R.E.E.N"}</span>
      </button>
    </div>
  );
}

const pageCopy: Record<PageKey, { eyebrow: string; title: string; intro: string }> = {
  services: { eyebrow: "Our services", title: "Security expertise that turns risk into action.", intro: "Focused, senior-led engagements spanning assessment, protection, governance, and continuous improvement." },
  solutions: { eyebrow: "How we work", title: "A clear path from uncertainty to resilience.", intro: "We connect evidence, business context, and practical delivery so every security investment has a purpose." },
  industries: { eyebrow: "Industry expertise", title: "Security grounded in your operating reality.", intro: "Different environments carry different risks. Our guidance reflects the systems, regulations, and pressures that shape your sector." },
  "case-studies": { eyebrow: "Case studies", title: "Real-world pressure. Practiced before it matters.", intro: "Two fictional but realistic incident simulations showing how clear decisions, technical evidence, and disciplined response can limit business impact." },
  about: { eyebrow: "About Cyber Network", title: "A focused partner for consequential security decisions.", intro: "We are a Bangalore-based cybersecurity consultancy combining technical depth with direct, business-minded advice." },
  contact: { eyebrow: "Start a conversation", title: "Tell us what you need to protect.", intro: "Share your priorities, challenges, or upcoming initiative. We’ll help you find the right starting point." },
};

const riskAssessmentFocus = ["Security assessment", "Cloud security", "Identity access", "Compliance advisory", "Managed security"];

const companyJourney = [
  {
    year: "2019",
    title: "The beginning",
    text: 'The journey began on Instagram as "Cyber India"—an independent idea built to share useful knowledge and create something meaningful.',
  },
  {
    year: "2021",
    title: "A clearer identity",
    text: 'The name evolved to "Cyber Network", reflecting a sharper focus on networking, cybersecurity, and the people who rely on both.',
  },
  {
    year: "2024",
    title: "A stronger return",
    text: "Operations resumed with renewed focus, an expanding service portfolio, and a growing role in the technology community.",
  },
];

const certificationCards = [
  { label: "CCNP Security", detail: "Advanced network security expertise", icon: ShieldCheck },
  { label: "NSE Certified", detail: "Vendor-aligned firewall capability", icon: BadgeCheck },
  { label: "CCNA", detail: "Networking training and certification preparation", icon: Network },
  { label: "CEH", detail: "Ethical hacking training and certification preparation", icon: Fingerprint },
];

const teamCapabilities = [
  { title: "Network specialists", text: "Architecture, routing, switching, firewalls, and reliable infrastructure built for real operating environments.", icon: Network },
  { title: "Security practitioners", text: "Risk assessment, ethical hacking, threat detection, and practical protection for critical digital assets.", icon: ShieldCheck },
  { title: "Technical educators", text: "Hands-on learning that turns complex networking and security concepts into job-ready skills.", icon: BookOpenCheck },
  { title: "Delivery partners", text: "Clear communication, responsive support, and solutions shaped around each organization’s goals.", icon: UsersRound },
];

function IncidentAlertBar() {
  return (
    <div className="bg-[#0b1712] text-white">
      <div className="mx-auto flex min-h-9 max-w-[1280px] items-center justify-center gap-2 px-5 text-center text-xs sm:px-8 sm:text-sm">
        <Activity className="h-3.5 w-3.5 text-[#55e6aa]" aria-hidden="true" />
        <span className="text-white/75">Suspect a security incident?</span>
        <a
          href="mailto:contact@cybernetworkco.com?subject=Suspected%20security%20incident"
          className="inline-flex items-center gap-1 font-bold text-[#55e6aa] underline decoration-[#55e6aa]/50 underline-offset-4 transition-colors hover:text-white"
        >
          Report an incident <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function SiteHeader({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#f7f8f7]/90 backdrop-blur-xl">
      <IncidentAlertBar />
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <a href="/" aria-label="Cyber Network home"><img src={cyberNetworkLogo} alt="Cyber Network" className="h-10 w-auto sm:h-11" /></a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} className={`text-sm font-medium transition-colors hover:text-[#00a765] ${location.pathname === item.href ? "text-[#00a765]" : "text-[#425049]"}`}>{item.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="mailto:contact@cybernetworkco.com" className="px-4 py-2 text-sm font-semibold text-[#304039] hover:text-[#00a765]">contact@cybernetworkco.com</a>
          <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[#0b1712] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#00a765]">Talk to an expert <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white lg:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {menuOpen && <div className="border-t border-black/[0.06] bg-[#f7f8f7] px-5 py-5 lg:hidden"><nav className="mx-auto flex max-w-[1280px] flex-col gap-1">{navItems.map((item) => <a key={item.href} href={item.href} className="flex items-center justify-between rounded-xl px-4 py-3.5 font-semibold hover:bg-white">{item.label}<ChevronRight className="h-4 w-4 text-[#00a765]" /></a>)}<a href="/contact" className="mt-3 rounded-xl bg-[#0b1712] px-4 py-4 text-center font-semibold text-white">Talk to an expert</a></nav></div>}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#09140f] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
        <div className="mb-10 flex flex-col gap-6 rounded-[28px] border border-[#00b871]/25 bg-[#0d2419] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#55e6aa]">Suspected security incident?</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
              Think your organization may have been attacked?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Contact our team to discuss what happened and identify practical next steps.
            </p>
          </div>
          <a
            href="mailto:contact@cybernetworkco.com?subject=Suspected%20security%20incident"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#00b871] px-5 py-3 text-sm font-bold text-[#06130e] transition-colors hover:bg-[#55e6aa]"
          >
            Contact incident response <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr_1fr]">
          <div>
            <img src={cyberNetworkFooterLogo} alt="Cyber Network" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Cybersecurity and consulting for resilient digital businesses.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#55e6aa]">Navigate</p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block transition-colors hover:text-[#55e6aa]">
                  {item.label}
                </a>
              ))}
              <a href="/contact" className="block transition-colors hover:text-[#55e6aa]">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#55e6aa]">Capabilities</p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              {services.slice(0, 4).map((service) => (
                <a key={service.title} href="/services" className="block transition-colors hover:text-[#55e6aa]">
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#55e6aa]">Need a security review?</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em]">Let’s talk through your risk priorities.</h3>
            <a href="mailto:contact@cybernetworkco.com" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#55e6aa] hover:text-white">
              contact@cybernetworkco.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#00b871] px-5 py-3 text-sm font-bold text-[#06130e] transition-all hover:bg-[#55e6aa]">
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p>© {new Date().getFullYear()} Cyber Network. All rights reserved.</p>
            <p>GSTIN: 29ABCDE1234F1Z5</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="/privacy-policy" className="font-semibold text-white hover:text-[#55e6aa]">Privacy Policy</a>
            <a href="/terms-and-conditions" className="font-semibold text-white hover:text-[#55e6aa]">Terms & Conditions</a>
            <a href="/refund-policy" className="font-semibold text-white hover:text-[#55e6aa]">Refund Policy</a>
            <a href="mailto:contact@cybernetworkco.com" className="font-semibold hover:text-[#55e6aa]">Email us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RiskSnapshotSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section data-scroll-reveal className="border-b border-black/[0.07] bg-[#edf5f1] py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-8 rounded-[32px] border border-[#00b871]/15 bg-white p-6 shadow-[0_26px_64px_rgba(11,23,18,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8 xl:p-10">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Quick risk snapshot</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#09140f] sm:text-4xl xl:text-[3rem]">
              Assess the biggest priorities driving your next security decision.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#59675f]">
              Share a few details and we’ll help you pinpoint where to start, what to prioritize, and how to build a practical remediation roadmap.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.12em] text-[#2a3d34]">
              {[
                "Risk review",
                "Cloud posture",
                "Compliance support",
              ].map((item) => (
                <span key={item} className="rounded-full border border-[#00b871]/20 bg-[#e8f8f0] px-3 py-2 text-[10px]">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "150+", label: "assessments" },
                { value: "< 48h", label: "response" },
                { value: "Senior", label: "advisory" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/[0.06] bg-[#f7f8f7] p-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[#0b1712]">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5d6d65]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-black/[0.06] bg-[#f5f7f5] p-5 sm:p-6">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[#dff5e9] text-[#00a765]">
                  <Check className="h-7 w-7 stroke-[3]" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-[#0b1712]">Your risk snapshot request is in.</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#5d6d65]">
                  We’ll review the context and follow up with a practical next-step recommendation for your security priorities.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm font-bold text-[#008c55]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-field">
                    Company
                    <input required name="company" placeholder="Company name" />
                  </label>
                  <label className="form-field">
                    Industry
                    <select name="industry" defaultValue="">
                      <option value="" disabled>Select industry</option>
                      <option>Financial services</option>
                      <option>Healthcare</option>
                      <option>Technology</option>
                      <option>Enterprise</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="form-field">
                    Work email
                    <input required type="email" name="email" placeholder="you@company.com" />
                  </label>
                  <label className="form-field">
                    Primary focus
                    <select name="focus" defaultValue="">
                      <option value="" disabled>Select a need</option>
                      {riskAssessmentFocus.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="form-field">
                  What do you want reviewed?
                  <textarea rows={4} name="message" placeholder="Tell us about your environment, current concerns, or the challenge you want help with." />
                </label>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b1712] px-6 py-4 text-sm font-bold text-white transition-all hover:bg-[#00a765] sm:w-auto"
                >
                  Get my risk snapshot
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8f7] text-[#0b1712] selection:bg-[#00b871] selection:text-[#06110c]">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-[112px]">
        <section className="relative overflow-hidden border-b border-black/[0.07]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_28%,rgba(0,184,113,0.18),transparent_30%),linear-gradient(rgba(11,23,18,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(11,23,18,0.035)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" />
          <div className="relative mx-auto grid min-h-[650px] max-w-[1280px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:py-24">
            <div data-scroll-reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00a765]/25 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#087c50] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#00b871] shadow-[0_0_0_5px_rgba(0,184,113,0.12)]" />
                Our story · Since 2019
              </div>
              <h1 className="mt-7 max-w-3xl text-[clamp(3.4rem,7vw,6.5rem)] font-semibold leading-[.92] tracking-[-.065em]">
                Built from curiosity. Grown with <span className="text-[#00a765]">purpose.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#536159] sm:text-xl">
                Cyber Network helps businesses and individuals move confidently through a changing digital world with practical networking, cybersecurity, and professional training.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#story" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1712] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#00a765]">
                  Read our story <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-bold transition hover:border-[#00a765]/40 hover:text-[#008c55]">
                  Work with us <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div data-scroll-reveal className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-[#00b871]/20 bg-[#0b1712] p-7 text-white shadow-[0_34px_90px_rgba(11,23,18,.2)] sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,184,113,.38),transparent_28%),linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]" />
              <div className="relative flex h-full min-h-[350px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs font-bold uppercase tracking-[.15em] text-[#55e6aa]">Bengaluru · India</span>
                  <Orbit className="h-7 w-7 text-[#55e6aa]" />
                </div>
                <div>
                  <p className="max-w-lg text-3xl font-medium leading-[1.15] tracking-[-.04em] sm:text-4xl">Knowledge creates capability. Security creates confidence.</p>
                  <div className="mt-8 flex items-center gap-3 text-sm text-white/45">
                    <span className="h-px w-10 bg-[#55e6aa]" />
                    The idea behind Cyber Network
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="scroll-mt-32 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
              <div data-scroll-reveal className="lg:sticky lg:top-32 lg:self-start">
                <p className="eyebrow">Company story</p>
                <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[1] tracking-[-.055em]">From a spark to a growing digital network.</h2>
                <p className="mt-6 max-w-md text-base leading-8 text-[#59675f]">The name changed. The mission became clearer. The commitment to useful, accessible expertise stayed constant.</p>
              </div>
              <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
                {companyJourney.map((item) => (
                  <article data-scroll-reveal key={item.year} className="grid gap-5 py-9 sm:grid-cols-[110px_1fr] sm:py-11">
                    <p className="font-mono-code text-3xl font-semibold text-[#00a765]">{item.year}</p>
                    <div>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-3 max-w-2xl leading-7 text-[#647168]">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1712] py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-20">
            <div data-scroll-reveal className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-white/10 bg-[#10261b] p-8 sm:p-11">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00b871]/25 blur-3xl" />
              <div className="relative flex h-full min-h-[372px] flex-col justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#00b871]/15 text-[#55e6aa]"><Crown className="h-7 w-7" /></span>
                <div>
                  <p className="text-3xl font-medium leading-snug tracking-[-.04em] sm:text-4xl">“Build something meaningful and independent.”</p>
                  <p className="mt-6 font-mono-code text-xs font-bold uppercase tracking-[.15em] text-[#55e6aa]">The founding idea · 2019</p>
                </div>
              </div>
            </div>
            <div data-scroll-reveal>
              <p className="eyebrow text-[#55e6aa]">Founder section</p>
              <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[1] tracking-[-.055em]">Independent by origin. Collaborative by design.</h2>
              <p className="mt-7 text-lg leading-8 text-white/60">Cyber Network began with a founder’s simple ambition: turn genuine interest in technology into something useful for others. What started as an Instagram page became a platform for services, learning, and practical support.</p>
              <p className="mt-5 text-base leading-8 text-white/45">Today, that same founder-led mindset keeps the work direct, curious, and close to the people and organizations it is meant to help.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {[['01','Learn'],['02','Protect'],['03','Empower']].map(([number, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[.045] p-5"><p className="font-mono-code text-xs text-[#55e6aa]">{number}</p><p className="mt-7 font-semibold">{label}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf2ef] py-24 sm:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div data-scroll-reveal className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div><p className="eyebrow">Certifications & expertise</p><h2 className="section-title mt-5">Credentials that support real-world delivery.</h2></div>
              <p className="max-w-xl text-base leading-7 text-[#59675f]">Cyber Network’s portfolio references advanced security credentials and industry-recognized learning paths across networking and ethical hacking.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {certificationCards.map((item) => (
                <article data-scroll-reveal key={item.label} className="motion-card rounded-[24px] border border-black/[.08] bg-white p-7 sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e5f7ed] text-[#009a5d]"><item.icon className="h-6 w-6" /></span>
                  <h3 className="mt-10 text-xl font-semibold">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#647168]">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div data-scroll-reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Team section</p>
              <h2 className="section-title mx-auto mt-5">A network of complementary expertise.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#59675f]">The team brings together infrastructure, security, education, and client delivery—so advice stays technically sound and practically useful.</p>
            </div>
            <div className="mt-14 grid overflow-hidden rounded-[30px] border border-black/[.08] md:grid-cols-2">
              {teamCapabilities.map((item, index) => (
                <article data-scroll-reveal key={item.title} className={`group p-8 sm:p-10 ${index < 2 ? 'border-b border-black/[.08]' : ''} ${index % 2 === 0 ? 'md:border-r md:border-black/[.08]' : ''} ${index === 1 ? 'md:border-b' : ''}`}>
                  <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0b1712] text-[#55e6aa]"><item.icon className="h-6 w-6" /></span><span className="font-mono-code text-xs text-black/25">0{index + 1}</span></div>
                  <h3 className="mt-10 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 max-w-md leading-7 text-[#647168]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e7f5ed] py-20 sm:py-24">
          <div data-scroll-reveal className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-9 px-5 sm:px-8 md:flex-row md:items-center">
            <div className="max-w-2xl"><p className="eyebrow">Let’s build what comes next</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Bring clarity to your next technology decision.</h2></div>
            <a href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0b1712] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#00a765]">Start a conversation <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>

        <section className="bg-[#0b1712] py-16 text-white sm:py-20">
          <div data-scroll-reveal className="mx-auto grid max-w-[1100px] gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#ff665f]/10 text-[#ff7b75]"><ShieldAlert className="h-7 w-7" /></span>
              <div><p className="font-mono-code text-xs font-bold uppercase tracking-[.16em] text-[#ff8c86]">Report incident</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Think something is wrong?</h2><p className="mt-3 max-w-2xl leading-7 text-white/55">If you suspect a security incident, contact the team with what you know. Early context helps shape a faster, clearer response.</p></div>
            </div>
            <a href="mailto:contact@cybernetworkco.com?subject=Urgent%3A%20Suspected%20security%20incident" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00b871] px-7 py-4 text-sm font-bold text-[#06130e] transition hover:bg-[#55e6aa]">Report an incident <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>
      <GreenChatbot />
      <SiteFooter />
    </div>
  );
}

function DedicatedPage({ page }: { page: PageKey }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const copy = pageCopy[page];
  const heroIllustration = page === "services" ? programHackerIllustration : page === "solutions" ? hackerUsingLaptopIllustration : null;
  return <div className="min-h-screen bg-[#f7f8f7] text-[#0b1712]">
    <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main className="pt-[112px]">
      <section className="relative overflow-hidden border-b border-black/[0.07] py-24 sm:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(0,184,113,0.14),transparent_32%),linear-gradient(rgba(11,23,18,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(11,23,18,0.035)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" /><div data-scroll-reveal className={`relative mx-auto max-w-[1280px] px-5 sm:px-8 ${heroIllustration ? "grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]" : ""}`}><div><p className="eyebrow">{copy.eyebrow}</p><h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,6rem)] font-semibold leading-[.96] tracking-[-.06em]">{copy.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#59675f] sm:text-xl">{copy.intro}</p></div>{heroIllustration && <div className="relative mt-8 min-h-[320px] overflow-hidden rounded-[32px] border border-[#00b871]/20 bg-[#e7f5ed] shadow-[0_30px_80px_rgba(11,23,18,.12)] lg:mt-0 lg:min-h-[500px]"><div className="absolute inset-6 rounded-full bg-[#00b871]/10 blur-3xl" /><img src={heroIllustration} alt={page === "services" ? "Cybersecurity specialist assessing a computer system" : "Cybersecurity specialist working with digital systems"} className="relative h-full min-h-[320px] w-full object-contain p-2 lg:min-h-[500px]" /></div>}</div></section>
      <RiskSnapshotSection />
      {page === "services" && <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-[1280px] gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">{services.map((service, i) => <article key={service.title} className="rounded-[24px] border border-black/[.08] bg-white p-8"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f8f0] text-[#009a5d]"><service.icon /></span>{service.title === "Governance & Compliance" ? <img src={documentProtectionIllustration} alt="" className="h-16 w-32 object-contain" /> : <span className="text-xs text-black/25">0{i+1}</span>}</div><h2 className="mt-8 text-2xl font-semibold">{service.title}</h2><p className="mt-4 leading-7 text-[#647168]">{service.text}</p><div className="mt-7 flex flex-wrap gap-2">{service.tags.map(t => <span key={t} className="rounded-full bg-[#f1f3f1] px-3 py-1.5 text-xs font-semibold">{t}</span>)}</div></article>)}</div></section>}      {page === "solutions" && <section className="bg-[#0b1712] py-20 text-white sm:py-28"><div className="mx-auto max-w-[1000px] divide-y divide-white/10 border-y border-white/10 px-5 sm:px-8">{solutionSteps.map(([n,t,d]) => <div key={n} className="grid gap-4 py-9 sm:grid-cols-[60px_180px_1fr]"><span className="text-sm font-bold text-[#55e6aa]">{n}</span><h2 className="text-2xl font-semibold">{t}</h2><p className="leading-7 text-white/60">{d}</p></div>)}</div></section>}
      {page === "industries" && <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-[1280px] gap-5 px-5 sm:px-8 md:grid-cols-2">{industries.map(ind => <article key={ind.name} className="rounded-[26px] border border-black/[.08] bg-white p-8 sm:p-10"><ind.icon className="h-8 w-8 text-[#00a765]"/><h2 className="mt-12 text-3xl font-semibold">{ind.name}</h2><p className="mt-4 max-w-md leading-7 text-[#647168]">{ind.text}</p><a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#008c55]">Discuss your needs <ArrowRight className="h-4 w-4" /></a></article>)}</div></section>}
      {page === "case-studies" && <section className="py-20 sm:py-28"><div className="mx-auto max-w-[1180px] px-5 sm:px-8"><div className="mb-10 flex items-center gap-3 rounded-2xl border border-[#00a765]/20 bg-[#e8f8f0] px-5 py-4 text-sm leading-6 text-[#315d49]"><ShieldCheck className="h-5 w-5 shrink-0 text-[#00a765]"/><p><strong>Scenario note:</strong> These are representative mock incidents created to demonstrate our response approach. They do not describe named client engagements.</p></div><div className="space-y-8">{caseStudies.map((study) => <article key={study.number} className="overflow-hidden rounded-[30px] border border-black/[.08] bg-white shadow-[0_24px_70px_rgba(11,23,18,.06)]"><div className="grid lg:grid-cols-[.72fr_1.28fr]"><div className="relative overflow-hidden bg-[#0b1712] p-8 text-white sm:p-12"><div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#00b871]/25 blur-3xl"/><div className="relative"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.16em] text-[#55e6aa]">Case {study.number}</span><span className="text-xs text-white/40">Mock incident</span></div><p className="mt-16 text-sm font-semibold text-white/55">{study.industry}</p><h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{study.title}</h2><p className="mt-6 leading-7 text-white/60">{study.summary}</p></div></div><div className="p-8 sm:p-12"><div className="grid gap-9 sm:grid-cols-2"><div><p className="eyebrow">The incident</p><p className="mt-4 leading-7 text-[#59675f]">{study.challenge}</p></div><div><p className="eyebrow">Our response</p><p className="mt-4 leading-7 text-[#59675f]">{study.response}</p></div></div><div className="mt-10 border-t border-black/[.08] pt-8"><p className="text-xs font-bold uppercase tracking-[.15em] text-[#26352d]">Simulated outcomes</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{study.outcomes.map((outcome) => <div key={outcome} className="flex items-start gap-2 rounded-xl bg-[#f1f5f2] p-4 text-sm font-semibold leading-5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00a765]"/>{outcome}</div>)}</div></div></div></div></article>)}</div></div></section>}
      {page === "about" && <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center"><div className="aspect-[4/3] rounded-[30px] bg-[#0b1712] p-10 text-white"><Zap className="text-[#55e6aa]"/><p className="mt-28 text-3xl font-medium leading-snug">Good security creates confidence to move faster.</p><p className="mt-5 text-sm text-white/45">Cyber Network principle</p></div><div><h2 className="text-4xl font-semibold tracking-tight">Independent thinking. Practical outcomes.</h2><p className="mt-6 text-lg leading-8 text-[#59675f]">We help leadership and technical teams understand what matters, make sound decisions, and build security that works in the real world.</p><div className="mt-9 grid gap-5 sm:grid-cols-2">{["Senior-led delivery","Clear priorities","Operationally grounded","Knowledge transfer"].map(x => <div key={x} className="flex gap-3 font-semibold"><Check className="h-5 w-5 text-[#00a765]"/>{x}</div>)}</div></div></div></section>}
      {page === "contact" && <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-[1100px] overflow-hidden rounded-[30px] bg-[#0b1712] text-white lg:grid-cols-[.8fr_1.2fr]"><div className="p-8 sm:p-12"><h2 className="text-3xl font-semibold">Let’s talk.</h2><p className="mt-5 leading-7 text-white/55">We’ll respond with a practical next step, not a generic sales pitch.</p><a href="mailto:contact@cybernetworkco.com" className="mt-10 flex items-center gap-3 text-[#55e6aa]"><Mail className="h-5 w-5"/>contact@cybernetworkco.com</a><p className="mt-5 flex items-center gap-3 text-white/70"><MapPin className="h-5 w-5 text-[#55e6aa]"/>Bangalore, Karnataka, India</p></div><div className="bg-[#f3f5f3] p-8 text-[#0b1712] sm:p-12">{submitted ? <div className="grid min-h-[360px] place-items-center text-center"><div><Check className="mx-auto h-12 w-12 text-[#00a765]"/><h3 className="mt-5 text-2xl font-semibold">Thank you for reaching out.</h3><p className="mt-3 text-[#637067]">Your request has been captured.</p></div></div> : <form onSubmit={e => {e.preventDefault(); setSubmitted(true)}}><div className="grid gap-5 sm:grid-cols-2"><label className="form-field">Name<input required placeholder="Your name"/></label><label className="form-field">Work email<input required type="email" placeholder="you@company.com"/></label><label className="form-field sm:col-span-2">Company<input placeholder="Company name"/></label></div><label className="form-field mt-5">How can we help?<textarea required rows={5} placeholder="Share your priorities..."/></label><button className="mt-6 rounded-full bg-[#0b1712] px-7 py-4 text-sm font-bold text-white hover:bg-[#00a765]">Send enquiry</button></form>}</div></div></section>}
      {page !== "contact" && <section className="bg-[#e7f5ed] py-20"><div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center"><div><p className="eyebrow">Ready when you are</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Make your next security decision clearer.</h2></div><a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0b1712] px-6 py-4 text-sm font-bold text-white hover:bg-[#00a765]">Talk to an expert <ArrowRight className="h-4 w-4"/></a></div></section>}
    </main><GreenChatbot /><SiteFooter />
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useScrollReveal();

  const closeMenu = () => setMenuOpen(false);

  const page = location.pathname.slice(1) as PageKey;
  if (page === "about") return <AboutPage />;
  if (["services", "solutions", "industries", "case-studies", "contact"].includes(page)) return <DedicatedPage page={page} />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8f7] text-[#0b1712] selection:bg-[#00b871] selection:text-[#06110c]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#f7f8f7]/90 backdrop-blur-xl">
        <IncidentAlertBar />
        <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
          <a href="#home" onClick={closeMenu} aria-label="Cyber Network home" className="shrink-0">
            <img src={cyberNetworkLogo} alt="Cyber Network" className="h-10 w-auto sm:h-11" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-[#425049] transition-colors hover:text-[#00a765]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="mailto:contact@cybernetworkco.com" className="rounded-full px-4 py-2 text-sm font-semibold text-[#304039] transition-colors hover:text-[#00a765]">
              contact@cybernetworkco.com
            </a>
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[#0b1712] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#00a765]">
              Talk to an expert
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button onClick={() => setMenuOpen((open) => !open)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white lg:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/[0.06] bg-[#f7f8f7] px-5 py-5 lg:hidden">
            <nav className="mx-auto flex max-w-[1280px] flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold hover:bg-white">
                  {item.label}<ChevronRight className="h-4 w-4 text-[#00a765]" />
                </a>
              ))}
              <a href="/contact" onClick={closeMenu} className="mt-3 rounded-xl bg-[#0b1712] px-4 py-4 text-center font-semibold text-white">Talk to an expert</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pt-[112px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(0,184,113,0.14),transparent_31%),linear-gradient(rgba(11,23,18,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(11,23,18,0.035)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" />
          <div className="relative mx-auto grid min-h-[760px] max-w-[1280px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
            <div data-scroll-reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#00a765]/25 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#087c50] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#00b871] shadow-[0_0_0_5px_rgba(0,184,113,0.12)]" />
                Cybersecurity consulting · Bangalore
              </div>
              <h1 className="max-w-3xl text-[clamp(3rem,7vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#09140f]">
                Security built for how business <span className="text-[#00a765]">moves.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#536159] sm:text-xl">
                Cyber Network helps organizations understand cyber risk, strengthen critical systems, and build resilient security programs that support growth.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0b1712] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_34px_rgba(11,23,18,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#00a765]">
                  Request a consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1712]/15 bg-white/80 px-7 py-4 text-sm font-bold transition-all hover:border-[#00a765]/50 hover:bg-white">
                  Explore our services
                </a>
              </div>
              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-black/10 pt-7 sm:grid-cols-3">
                {["Business-first advice", "Senior-led delivery", "Actionable outcomes"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-[#34433b]">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#00b871]/12 text-[#00a765]"><Check className="h-3 w-3 stroke-[3]" /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-8 rounded-full bg-[#00b871]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1712] p-5 text-white shadow-[0_36px_100px_rgba(11,23,18,0.25)] sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Security posture</p>
                    <p className="mt-1 text-lg font-semibold">Unified risk overview</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#00b871]/15 px-3 py-2 text-xs font-semibold text-[#55e6aa]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#55e6aa]" /> Live
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                    <div className="flex items-start justify-between">
                      <div><p className="text-xs text-white/50">Protection coverage</p><p className="mt-2 text-4xl font-semibold tracking-tight">Strong</p></div>
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#00b871]/15 text-[#55e6aa]"><ShieldCheck className="h-6 w-6" /></div>
                    </div>
                    <div className="mt-6 flex h-2 gap-1 overflow-hidden rounded-full bg-white/10">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => <span key={bar} className={`h-full flex-1 rounded-full ${bar < 7 ? "bg-[#00b871]" : "bg-white/10"}`} />)}
                    </div>
                  </div>
                  {[{ label: "Identity", value: "Verified", icon: LockKeyhole }, { label: "Cloud", value: "Hardened", icon: Cloud }].map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 sm:p-5">
                      <metric.icon className="h-5 w-5 text-[#55e6aa]" />
                      <p className="mt-5 text-[11px] uppercase tracking-wider text-white/45">{metric.label}</p>
                      <p className="mt-1 text-sm font-semibold">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                  <div className="flex items-center justify-between"><span className="text-sm font-semibold">Continuous improvement</span><span className="text-xs text-[#55e6aa]">Active</span></div>
                  <div className="mt-5 flex items-end gap-2">
                    {[35, 48, 43, 62, 58, 76, 70, 88, 84, 96].map((height, index) => <span key={index} className="flex-1 rounded-t bg-[#00b871]" style={{ height: `${height * 0.65}px`, opacity: 0.3 + index * 0.07 }} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-reveal className="border-y border-black/[0.07] bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-semibold text-[#56645c]">Security aligned with the standards your business relies on</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold tracking-[0.13em] text-[#26352d] sm:gap-x-10">
              {[
                { label: "ISO 27001", icon: FileCheck2 },
                { label: "NIST CSF", icon: ShieldCheck },
                { label: "MITRE ATT&CK", icon: Crosshair },
                { label: "CIS CONTROLS", icon: LockKeyhole },
                { label: "SOC 2", icon: BadgeCheck },
              ].map((standard) => (
                <span key={standard.label} className="inline-flex items-center gap-2">
                  <standard.icon className="h-4 w-4 text-[#00a765]" aria-hidden="true" />
                  {standard.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section data-scroll-reveal className="bg-[#eef5f1] py-16 sm:py-24" aria-label="Security risk assessment">
          <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="relative min-h-[300px] overflow-hidden rounded-[30px] border border-[#00b871]/20 bg-white shadow-[0_24px_70px_rgba(11,23,18,0.08)] sm:min-h-[420px]">
              <div className="absolute inset-8 rounded-full bg-[#00b871]/10 blur-3xl" />
              <img src={programHackerIllustration} alt="Cybersecurity specialist assessing a program" className="relative h-full min-h-[300px] w-full object-contain p-2 sm:min-h-[420px]" />
            </div>
            <div className="max-w-xl">
              <p className="eyebrow">Built for real threats</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">See risk clearly. Respond with confidence.</h2>
              <p className="mt-6 text-base leading-8 text-[#59675f] sm:text-lg">
                Understand where your systems are exposed with focused security assessments, actionable findings, and clear priorities for what to address next.
              </p>
              <a href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#008c55] hover:text-[#006b41]">
                Explore security services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section data-scroll-reveal className="bg-[#0b1712] py-16 text-white sm:py-24" aria-label="Security response and resilience">
          <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="max-w-xl">
              <p className="eyebrow text-[#55e6aa]">Ready when it matters</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl">Build resilience before the pressure is on.</h2>
              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                Prepare your people and technology to detect threats, make confident decisions, and recover with less disruption.
              </p>
              <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#55e6aa] hover:text-white">
                Talk to a security expert <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-[30px] border border-[#00b871]/20 bg-[#e7f5ed] shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:min-h-[420px]">
              <div className="absolute inset-8 rounded-full bg-[#00b871]/15 blur-3xl" />
              <img src={hackerUsingLaptopIllustration} alt="Security professional using a laptop to monitor digital threats" className="relative h-full min-h-[300px] w-full object-contain p-2 sm:min-h-[420px]" />
            </div>
          </div>
        </section>

        <section data-scroll-reveal id="services" className="scroll-mt-28 py-24 sm:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div><p className="eyebrow">What we do</p><h2 className="section-title mt-5">Practical security expertise, end to end.</h2></div>
              <p className="max-w-xl text-base leading-7 text-[#59675f] lg:ml-auto lg:text-lg">From the first risk conversation to ongoing improvement, our services connect technical depth with clear business priorities.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article data-scroll-reveal key={service.title} className="motion-card group flex min-h-[310px] flex-col rounded-[24px] border border-black/[0.08] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00a765]/35 hover:shadow-[0_22px_60px_rgba(11,23,18,0.09)] sm:p-8">
                  <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f8f0] text-[#009a5d]"><service.icon className="h-6 w-6" /></span>{service.title === "Governance & Compliance" ? <img src={documentProtectionIllustration} alt="" className="h-16 w-32 object-contain" /> : <span className="text-xs font-semibold text-black/25">0{index + 1}</span>}</div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#647168]">{service.text}</p>
                  <div className="mt-7 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f1f3f1] px-3 py-1.5 text-[11px] font-semibold text-[#4a584f]">{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-scroll-reveal id="solutions" className="scroll-mt-28 bg-[#0b1712] py-24 text-white sm:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow text-[#55e6aa]">How we work</p>
              <h2 className="section-title mt-5 text-white">Clarity before complexity.</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-white/55">Our engagement model keeps decision-makers informed and technical teams focused on the work that reduces risk fastest.</p>
              <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#55e6aa]">Discuss your priorities <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["01", "Discover", "Understand the business, critical assets, current controls, and the threat scenarios that matter."],
                ["02", "Validate", "Test assumptions with evidence-led assessments, technical review, and controlled security testing."],
                ["03", "Prioritize", "Translate findings into a practical roadmap based on risk, effort, and operational impact."],
                ["04", "Strengthen", "Support remediation, architecture improvements, governance, and continuous security maturity."],
              ].map(([number, title, text]) => (
                <div key={number} className="grid gap-5 py-8 sm:grid-cols-[56px_150px_1fr] sm:items-start sm:py-10">
                  <span className="text-xs font-bold text-[#55e6aa]">{number}</span><h3 className="text-xl font-semibold">{title}</h3><p className="text-sm leading-6 text-white/55 sm:text-base sm:leading-7">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-scroll-reveal id="industries" className="scroll-mt-28 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="max-w-2xl"><p className="eyebrow">Industry context</p><h2 className="section-title mt-5">Security shaped around your operating reality.</h2></div>
            <div className="mt-14 grid overflow-hidden rounded-[28px] border border-black/[0.08] md:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry) => (
                <article data-scroll-reveal key={industry.name} className="motion-card group border-b border-black/[0.08] p-7 last:border-b-0 md:border-r md:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0 sm:p-8">
                  <industry.icon className="h-7 w-7 text-[#00a765]" />
                  <h3 className="mt-12 text-lg font-semibold">{industry.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#647168]">{industry.text}</p>
                  <ChevronRight className="mt-8 h-5 w-5 text-black/20 transition-all group-hover:translate-x-1 group-hover:text-[#00a765]" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-scroll-reveal id="case-studies" className="scroll-mt-28 bg-[#0b1712] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl"><p className="eyebrow text-[#55e6aa]">Case studies</p><h2 className="section-title mt-5 text-white">Real-world incidents, safely rehearsed.</h2></div>
              <a href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-[#55e6aa]">View both case studies <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {caseStudies.map((study) => (
                <a data-scroll-reveal key={study.number} href="/case-studies" className="motion-card group rounded-[26px] border border-white/10 bg-white/[.055] p-7 transition-all hover:-translate-y-1 hover:border-[#55e6aa]/35 hover:bg-white/[.075] sm:p-9">
                  <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.16em] text-[#55e6aa]">Case {study.number}</span><span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-white/45">Mock incident</span></div>
                  <p className="mt-12 text-sm font-semibold text-white/45">{study.industry}</p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{study.title}</h3>
                  <p className="mt-5 line-clamp-3 leading-7 text-white/55">{study.summary}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#55e6aa]">Read the scenario <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section data-scroll-reveal id="about" className="scroll-mt-28 border-y border-black/[0.07] bg-[#edf1ee] py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] bg-[#112019] p-7 text-white sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(0,184,113,0.32),transparent_32%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#55e6aa]"><Zap className="h-4 w-4" /> Bangalore · India</div>
                <div><p className="max-w-md text-2xl font-medium leading-snug sm:text-3xl">“Good security creates confidence to move faster.”</p><p className="mt-5 text-sm text-white/45">Cyber Network principle</p></div>
              </div>
            </div>
            <div>
              <p className="eyebrow">About Cyber Network</p>
              <h2 className="section-title mt-5">A focused security partner for modern organizations.</h2>
              <p className="mt-6 text-base leading-8 text-[#59675f] sm:text-lg">Cyber Network is a Bangalore-based cybersecurity and consulting company. We bring together technical expertise, business context, and straightforward communication to help teams make better security decisions.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {["Independent, objective advice", "Clear priorities and ownership", "Security designed for operations", "Knowledge transfer to your team"].map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#00b871] text-white"><Check className="h-3 w-3 stroke-[3]" /></span>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-reveal id="contact" className="scroll-mt-28 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="overflow-hidden rounded-[32px] bg-[#0b1712] text-white shadow-[0_32px_80px_rgba(11,23,18,0.16)]">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative overflow-hidden p-7 sm:p-12 lg:p-14">
                  <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#00b871]/20 blur-3xl" />
                  <div className="relative">
                    <p className="eyebrow text-[#55e6aa]">Start a conversation</p>
                    <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Let’s make your next security decision clearer.</h2>
                    <p className="mt-6 text-base leading-7 text-white/55">Tell us what you are working through. We’ll help identify the right starting point.</p>
                    <div className="mt-10 space-y-5 text-sm">
                      <a href="mailto:contact@cybernetworkco.com" className="flex items-center gap-3 text-white/80 hover:text-[#55e6aa]"><Mail className="h-5 w-5 text-[#55e6aa]" />contact@cybernetworkco.com</a>
                      <div className="flex items-center gap-3 text-white/80"><MapPin className="h-5 w-5 text-[#55e6aa]" />Bangalore, Karnataka, India</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f3f5f3] p-7 text-[#0b1712] sm:p-12 lg:p-14">
                  {submitted ? (
                    <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#dff5e9] text-[#00a765]"><Check className="h-7 w-7 stroke-[3]" /></span>
                      <h3 className="mt-6 text-2xl font-semibold">Thank you for reaching out.</h3>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-[#637067]">Your request has been captured. Connect the form to your preferred email or CRM service before production launch.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-7 text-sm font-bold text-[#008c55]">Send another message</button>
                    </div>
                  ) : (
                    <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="form-field">Name<input required name="name" placeholder="Your name" /></label>
                        <label className="form-field">Work email<input required type="email" name="email" placeholder="you@company.com" /></label>
                        <label className="form-field">Company<input required name="company" placeholder="Company name" /></label>
                        <label className="form-field">Area of interest<select name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>Security assessment</option><option>Penetration testing</option><option>Cloud security</option><option>Compliance advisory</option><option>Managed security</option></select></label>
                      </div>
                      <label className="form-field mt-5">How can we help?<textarea name="message" rows={4} placeholder="Share a little about your priorities..." /></label>
                      <button type="submit" className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b1712] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#00a765] sm:w-auto">Send enquiry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GreenChatbot />
      <SiteFooter />
    </div>
  );
}

export default App;
