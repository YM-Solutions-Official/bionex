// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  Layers3,
  Menu,
  RadioTower,
  ShieldCheck,
  TowerControl,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: VineetPortfolioPage,
});

const telecomServices = [
  {
    number: "01",
    icon: TowerControl,
    title: "Telecom Tower Foundation",
    description:
      "Detailed foundation drafting and reinforcement detailing for telecom tower installations.",
    items: [
      "GBT Foundations",
      "RTT Foundations",
      "GBM Foundations",
      "RTP Foundations",
      "RCC Foundation Drawings",
      "Foundation Layouts",
      "Reinforcement Detailing",
      "Bar Bending Schedules",
    ],
  },
  {
    number: "02",
    icon: RadioTower,
    title: "Pole & Monopole",
    description:
      "Professional drafting and structural detailing for telecom poles and monopole structures.",
    items: [
      "Telecom Pole Drawings",
      "Monopole Drawings",
      "Pole Foundation Drawings",
      "Structural Detailing",
      "Fabrication Drawings",
      "Connection Details",
      "Assembly Details",
      "Component Details",
    ],
  },
  {
    number: "03",
    icon: Zap,
    title: "Pole Loading & Analysis",
    description:
      "Technical assessment and documentation for telecom poles and tower structures.",
    items: [
      "Pole Loading Validation Analysis",
      "Tower Loading Assessment",
      "Structural Stability Assessment",
      "Pole Analysis",
      "Structural Analysis",
      "Loading Documentation",
      "Technical Drawings",
      "Assessment Documentation",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Pole & Tower Strengthening",
    description:
      "Strengthening drawings and technical documentation for existing telecom structures.",
    items: [
      "Pole Strengthening",
      "Tower Strengthening",
      "Structural Strengthening",
      "Existing Structure Assessment",
      "Strengthening Details",
      "Reinforcement Details",
      "Bill of Materials",
      "Proposal Drawings",
    ],
  },
];

const additionalServices = [
  {
    icon: DraftingCompass,
    title: "TLVA & PLVA Drafting",
    text: "Detailed technical drafting and documentation for Tower Loading Validation Analysis and Pole Loading Validation Analysis.",
  },
  {
    icon: Factory,
    title: "Fabrication Drawings",
    text: "Detailed fabrication drawings for poles, monopoles, towers, structural components and connections.",
  },
  {
    icon: Layers3,
    title: "RCC Foundation Detailing",
    text: "Open, pile, raft, pier shaft, pier cap and portal frame foundation detailing.",
  },
  {
    icon: ClipboardCheck,
    title: "Structural Testing",
    text: "NDT, Ultrasonic Pulse Velocity Testing and Rebound Hammer Testing for concrete structures.",
  },
];

const foundationTypes = [
  "Open Foundation",
  "Pile Foundation",
  "Raft Foundation",
  "Pier Shaft",
  "Pier Cap",
  "Portal Frame",
];

const infrastructureServices = [
  "Bridge Structures",
  "Diaphragm Walls",
  "Soldier Piles",
  "Barricading Walls",
  "Gantry Sign Boards",
  "Stack Systems",
  "RCC Structures",
  "Steel Structures",
];

const workflow = [
  {
    number: "01",
    title: "Requirement",
    text: "Understand the tower, pole, site conditions and project requirements.",
  },
  {
    number: "02",
    title: "Engineering Data",
    text: "Review available structural, site and loading information.",
  },
  {
    number: "03",
    title: "Assessment",
    text: "Carry out the required loading validation, assessment or strengthening review.",
  },
  {
    number: "04",
    title: "Detailed Drafting",
    text: "Prepare accurate AutoCAD drawings, foundation and structural details.",
  },
  {
    number: "05",
    title: "Coordination",
    text: "Coordinate technical requirements with engineers, site teams and clients.",
  },
  {
    number: "06",
    title: "Final Deliverables",
    text: "Deliver drawings and documentation ready for review, fabrication or execution.",
  },
];

function VineetPortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#080b0f] text-white selection:bg-cyan-400 selection:text-black">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080b0f]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="text-left"
            aria-label="Go to homepage"
          >
            <div className="text-lg font-bold tracking-tight">
              VINEET<span className="text-cyan-400">.</span>
            </div>

            <div className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Structural Engineering
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="text-sm text-white/60 transition hover:text-white"
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => scrollTo("expertise")}
              className="text-sm text-white/60 transition hover:text-white"
            >
              Expertise
            </button>

            <button
              type="button"
              onClick={() => scrollTo("workflow")}
              className="text-sm text-white/60 transition hover:text-white"
            >
              Process
            </button>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              Contact
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#080b0f] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="text-left"
              >
                Services
              </button>

              <button
                type="button"
                onClick={() => scrollTo("expertise")}
                className="text-left"
              >
                Expertise
              </button>

              <button
                type="button"
                onClick={() => scrollTo("workflow")}
                className="text-left"
              >
                Process
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-fit rounded-full bg-cyan-400 px-5 py-2.5 font-medium text-black"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="absolute right-[-15%] top-[10%] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Telecom Structural Engineering
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Structures
              <br />
              that <span className="text-cyan-400">connect.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
              Specialized telecom tower and structural drafting services
              covering foundations, poles, monopoles, loading analysis,
              strengthening and fabrication drawings.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="group flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:bg-cyan-300"
              >
                Explore Services

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Start a Project
              </button>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/30">
              <span>AutoCAD</span>
              <span>RCC</span>
              <span>PLVA</span>
              <span>TLVA</span>
              <span>Structural Drafting</span>
            </div>
          </div>

          {/* TOWER GRAPHIC */}
          <div className="relative hidden min-h-[600px] items-center justify-center lg:flex">
            <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-400/10" />
            <div className="absolute h-[380px] w-[380px] rounded-full border border-cyan-400/10" />
            <div className="absolute h-[260px] w-[260px] rounded-full border border-cyan-400/10" />

            <div className="relative h-[500px] w-[260px]">
              <div className="absolute bottom-0 left-1/2 h-[430px] w-[4px] -translate-x-1/2 bg-cyan-400/70" />

              <div className="absolute bottom-0 left-[25px] h-[430px] w-[3px] rotate-[8deg] bg-white/30" />

              <div className="absolute bottom-0 right-[25px] h-[430px] w-[3px] -rotate-[8deg] bg-white/30" />

              {Array.from({ length: 11 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute left-[30px] right-[30px] h-px bg-white/25"
                  style={{
                    bottom: `${index * 38}px`,
                    transform:
                      index % 2 === 0
                        ? "rotate(14deg)"
                        : "rotate(-14deg)",
                  }}
                />
              ))}

              <div className="absolute left-1/2 top-4 h-20 w-px -translate-x-1/2 bg-cyan-400" />

              <div className="absolute left-1/2 top-12 flex -translate-x-1/2 gap-8">
                <div className="h-16 w-2 rounded-full bg-cyan-400/70" />
                <div className="h-16 w-2 rounded-full bg-cyan-400/70" />
                <div className="h-16 w-2 rounded-full bg-cyan-400/70" />
              </div>

              <div className="absolute bottom-0 left-1/2 h-2 w-48 -translate-x-1/2 bg-cyan-400/30" />
            </div>

            <div className="absolute bottom-8 left-0 border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Primary Expertise
              </div>

              <div className="mt-1 font-medium">
                Telecom Tower Structures
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/25 lg:flex">
          Scroll to explore
          <ChevronDown size={16} />
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              Core Focus
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Telecom infrastructure
            </h2>
          </div>

          <p className="text-sm leading-7 text-white/50">
            From tower foundations and monopoles to structural assessment and
            strengthening, the work is focused on practical engineering
            documentation and detailed drafting.
          </p>

          <p className="text-sm leading-7 text-white/50">
            Supporting services also cover RCC foundations, fabrication
            drawings, infrastructure structures and non-destructive testing.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            01 / Services
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Telecom services
            <br />
            built around detail.
          </h2>

          <p className="mt-6 text-base leading-7 text-white/45">
            Specialized services for telecom structures, foundations,
            structural assessment and strengthening.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {telecomServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group bg-[#080b0f] p-8 transition hover:bg-[#0c1117] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-cyan-400/20 bg-cyan-400/5">
                    <Icon size={22} className="text-cyan-400" />
                  </div>

                  <span className="font-mono text-sm text-white/20">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
                  {service.description}
                </p>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-white/60"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-cyan-400/70"
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SPECIALIZED SERVICES */}
      <section className="border-y border-white/10 bg-[#0b0f14]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                02 / Specialized
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Beyond the tower.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                Additional structural services supporting telecom,
                construction and infrastructure requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {additionalServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="border border-white/10 bg-[#080b0f] p-7"
                  >
                    <Icon size={24} className="text-cyan-400" />

                    <h3 className="mt-6 text-lg font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {service.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section
        id="expertise"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              03 / Foundation Expertise
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Foundation detailing for demanding structures.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/45">
              Detailed RCC foundation drawings and reinforcement documentation
              for telecom and structural applications.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {foundationTypes.map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white/65"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden border border-white/10 bg-[#0b0f14] p-8">
            <div className="absolute inset-0 opacity-[0.08]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <div className="relative h-full">
              <div className="absolute left-1/2 top-12 h-[260px] w-[3px] -translate-x-1/2 bg-cyan-400/50" />

              <div className="absolute left-1/2 top-[80px] h-[180px] w-[180px] -translate-x-1/2 rotate-45 border border-cyan-400/40" />

              <div className="absolute bottom-16 left-1/2 h-20 w-64 -translate-x-1/2 border border-cyan-400/40" />

              <div className="absolute bottom-5 left-1/2 h-2 w-80 -translate-x-1/2 bg-cyan-400/30" />

              <div className="absolute left-5 top-5 text-[10px] font-mono uppercase tracking-widest text-cyan-400/50">
                FOUNDATION / DETAIL 01
              </div>

              <div className="absolute bottom-5 right-5 text-[10px] font-mono text-white/20">
                RCC STRUCTURE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYSIS */}
      <section className="bg-cyan-400 text-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.5fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/50">
              Structural Assessment
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              PLVA. TLVA.
              <br />
              Structural stability.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="border border-black/15 p-6">
              <div className="text-3xl font-semibold">PLVA</div>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Pole Loading Validation Analysis drafting and documentation.
              </p>
            </div>

            <div className="border border-black/15 p-6">
              <div className="text-3xl font-semibold">TLVA</div>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Tower Loading Validation Analysis drafting and documentation.
              </p>
            </div>

            <div className="border border-black/15 p-6">
              <div className="text-3xl font-semibold">NDT</div>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Non-destructive testing and structural assessment support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              04 / Infrastructure
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Structural drafting across infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {infrastructureServices.map((item) => (
              <div
                key={item}
                className="bg-[#080b0f] p-6 text-sm text-white/60 transition hover:bg-white/[0.04] hover:text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="border-y border-white/10 bg-[#0b0f14]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              05 / Process
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              From requirement
              <br />
              to final drawing.
            </h2>
          </div>

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step) => (
              <div
                key={step.number}
                className="bg-[#0b0f14] p-8 lg:p-10"
              >
                <div className="font-mono text-sm text-cyan-400">
                  {step.number}
                </div>

                <h3 className="mt-8 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-16 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Tools
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Engineering tools.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "AutoCAD",
              "STAAD Foundation",
              "MS Excel",
              "MS Project",
            ].map((tool) => (
              <span
                key={tool}
                className="border border-white/10 px-5 py-3 text-sm text-white/60"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Start a Project
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            Have a telecom
            <br />
            <span className="text-cyan-400">structure project?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45">
            Get in touch for tower foundation drawings, pole and monopole
            detailing, PLVA/TLVA drafting, strengthening, fabrication drawings
            or structural testing services.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:vineet8115722137@gmail.com"
              className="group flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:bg-cyan-300"
            >
              Email Us

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+919971749689"
              className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:bg-white/5"
            >
              +91 99717 49689
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 text-xs text-white/30 sm:flex-row lg:px-8">
          <div>© {new Date().getFullYear()} Er. Vineet Kumar</div>

          <div>Telecom Tower & Structural Engineering</div>
        </div>
      </footer>
    </main>
  );
}
