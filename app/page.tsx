"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BookOpenText, CheckCircle2, ClipboardCheck, Clock3, FileCheck2, FilePenLine, FileSearch, GraduationCap, Menu, NotebookPen, Search, Send, ShieldCheck, X } from "lucide-react";

const forms = [
  { code: "F-TGN-001", title: "Nomination of Thesis Adviser", description: "Nominate and secure the consent of a faculty thesis adviser.", category: "Advising & Approval", status: "Available", href: "/forms/f-tgn-001.html", icon: FilePenLine },
  { code: "F-TGN-002", title: "Thesis Title Approval Sheet", description: "Submit a proposed thesis title for review and approval.", category: "Advising & Approval", status: "Coming soon", icon: ClipboardCheck },
  { code: "F-TGN-003", title: "Application for Outline/Final Examination", description: "Apply for the thesis outline or final examination schedule.", category: "Examination", status: "Coming soon", icon: GraduationCap },
  { code: "F-TGN-004", title: "Minutes of Thesis Defense", description: "Record the proceedings, recommendations, and decisions of the thesis defense.", category: "Examination", status: "Coming soon", icon: NotebookPen },
  { code: "F-TGN-005", title: "Defense Evaluation Form", description: "Evaluate the student’s thesis presentation and defense performance.", category: "Examination", status: "Coming soon", icon: FileCheck2 },
  { code: "F-TGN-006", title: "Result of Examination for Defense", description: "Document the official result of the thesis defense examination.", category: "Examination", status: "Coming soon", icon: ClipboardCheck },
  { code: "F-TGN-007A", title: "Thesis Outline Processing Form", description: "Track the evaluation and approval of the thesis outline.", category: "Processing", status: "Coming soon", icon: FileSearch },
  { code: "F-TGN-007B", title: "Thesis Manuscript Processing Form", description: "Track the review and final acceptance of the thesis manuscript.", category: "Processing", status: "Coming soon", icon: FileSearch },
  { code: "F-TGN-008A", title: "Distribution of Thesis Outline", description: "Record the distribution of thesis outline copies to the examining committee.", category: "Distribution", status: "Coming soon", icon: Send },
  { code: "F-TGN-008B", title: "Distribution of Thesis Manuscript", description: "Record the distribution of manuscript copies to the examining committee.", category: "Distribution", status: "Coming soon", icon: Send },
  { code: "F-TGN-009", title: "Permit to Conduct", description: "Request authorization to begin the approved thesis study.", category: "Research Documents", status: "Coming soon", icon: FileCheck2 },
  { code: "F-TGN-010", title: "Thesis Consultation Form", description: "Document thesis consultations, guidance, and agreed actions.", category: "Research Documents", status: "Coming soon", icon: NotebookPen },
  { code: "F-TGN-011", title: "Thesis Proposal", description: "Prepare the official thesis proposal document.", category: "Research Documents", status: "Coming soon", icon: BookOpenText },
  { code: "F-TGN-012", title: "Thesis Manuscript", description: "Prepare the official final thesis manuscript document.", category: "Research Documents", status: "Coming soon", icon: BookOpenText },
];

const categories = ["All forms", "Advising & Approval", "Examination", "Processing", "Distribution", "Research Documents"];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All forms");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleForms = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return forms.filter((form) => (category === "All forms" || form.category === category) && (!normalized || `${form.code} ${form.title} ${form.description}`.toLowerCase().includes(normalized)));
  }, [category, query]);

  return (
    <main className="min-h-screen bg-[#f4f7f4] text-[#173523]">
      <div className="h-1.5 bg-gradient-to-r from-[#f4b223] via-[#f4b223] to-[#174f2a]" />
      <header className="border-b border-[#174f2a]/10 bg-white">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="College of Agriculture E-Form Generator home">
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <img src={`${basePath}/assets/adssu-seal.png`} alt="Agusan del Sur State University logo" className="h-12 w-12 object-contain sm:h-16 sm:w-16" />
              <img src={`${basePath}/assets/college-of-agriculture-logo.png`} alt="College of Agriculture logo" className="h-12 w-12 rounded-full object-contain sm:h-16 sm:w-16" />
            </div>
            <div className="min-w-0 border-l border-[#174f2a]/15 pl-3">
              <p className="truncate text-[0.72rem] font-bold uppercase tracking-[0.13em] text-[#39704b]">College of Agriculture · ADSSU</p>
              <p className="truncate font-serif text-xl font-bold leading-tight sm:text-2xl">E-Form Generator</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#46604d] md:flex" aria-label="Primary navigation">
            <a href="#forms" className="transition hover:text-[#174f2a]">Forms</a><a href="#guide" className="transition hover:text-[#174f2a]">How it works</a><a href="#support" className="transition hover:text-[#174f2a]">Support</a>
          </nav>
          <button type="button" onClick={() => setMenuOpen((v) => !v)} className="rounded-xl border border-[#174f2a]/15 p-2.5 md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#174f2a]/10 px-5 py-3 text-sm font-semibold md:hidden" aria-label="Mobile navigation"><a href="#forms" className="block py-2" onClick={() => setMenuOpen(false)}>Forms</a><a href="#guide" className="block py-2" onClick={() => setMenuOpen(false)}>How it works</a><a href="#support" className="block py-2" onClick={() => setMenuOpen(false)}>Support</a></nav>}
      </header>

      <section id="top" className="relative overflow-hidden bg-[#174f2a] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_78%_25%,#f4b223_0,transparent_26%),linear-gradient(120deg,transparent_58%,#2f7b49_58%)]" />
        <div className="relative mx-auto grid max-w-[1240px] gap-8 px-5 py-12 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-[#ffe5a4]"><GraduationCap size={16} /> College of Agriculture</div>
            <h1 className="max-w-3xl font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">Thesis e-forms in one official workspace.</h1>
          </div>
          <div className="self-end rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/15 backdrop-blur-sm sm:p-6">
            <label htmlFor="form-search" className="mb-3 block text-sm font-bold uppercase tracking-[0.11em] text-[#ffe5a4]">Find a form</label>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-[#173523] shadow-lg"><Search size={21} className="shrink-0 text-[#39704b]" /><input id="form-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title or document code" className="w-full bg-transparent text-base outline-none placeholder:text-[#6d7f71]" />{query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={18} /></button>}</div>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/70"><ShieldCheck size={17} className="text-[#ffd168]" /> Uses approved document formats</div>
          </div>
        </div>
      </section>

      <section id="forms" className="mx-auto max-w-[1240px] px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#b47600]">F-TGN form series</p><h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Choose an e-form</h2></div><p className="max-w-md text-base leading-7 text-[#5a6d5f]">All 14 College of Agriculture thesis forms are listed below. Forms become accessible as each digital generator is finalized.</p></div>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter forms by category">
          {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition ${category === item ? "bg-[#174f2a] text-white shadow-md" : "border border-[#174f2a]/15 bg-white text-[#46604d] hover:border-[#174f2a]/35"}`}>{item}</button>)}
        </div>
        {visibleForms.length ? <div className="mt-6 grid gap-5 md:grid-cols-2">{visibleForms.map((form) => {
          const Icon = form.icon; const available = form.status === "Available";
          const content = <><div className="flex items-start justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef6ef] text-[#174f2a]"><Icon size={24} /></span><span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${available ? "bg-[#e8f7ec] text-[#1f6a36]" : "bg-[#fff3d8] text-[#8a5b00]"}`}>{available ? <CheckCircle2 size={14} /> : <Clock3 size={14} />}{form.status}</span></div><p className="mt-6 text-xs font-extrabold uppercase tracking-[0.15em] text-[#b47600]">{form.code}</p><h3 className="mt-2 font-serif text-2xl font-bold leading-tight">{form.title}</h3><p className="mt-3 flex-1 leading-7 text-[#607064]">{form.description}</p><div className="mt-6 flex items-center justify-between border-t border-[#174f2a]/10 pt-4 text-sm font-bold"><span className="text-[#718076]">{form.category}</span><span className={available ? "flex items-center gap-2 text-[#174f2a]" : "text-[#8b968e]"}>{available ? <>Open form <ArrowRight size={17} /></> : "In preparation"}</span></div></>;
          return available ? <a key={form.code} href={`${basePath}${form.href}`} className="group flex min-h-[300px] flex-col rounded-3xl border border-[#174f2a]/12 bg-white p-6 shadow-[0_14px_36px_rgba(23,79,42,.07)] transition hover:-translate-y-1 hover:border-[#174f2a]/30 hover:shadow-[0_20px_45px_rgba(23,79,42,.12)] sm:p-7">{content}</a> : <article key={form.code} className="flex min-h-[300px] flex-col rounded-3xl border border-[#174f2a]/10 bg-white/65 p-6 sm:p-7">{content}</article>;
        })}</div> : <div className="mt-6 rounded-3xl border border-dashed border-[#174f2a]/25 bg-white p-12 text-center"><FileSearch className="mx-auto text-[#39704b]" size={34} /><h3 className="mt-4 text-xl font-bold">No forms found</h3><p className="mt-2 text-[#607064]">Try another title, document code, or category.</p></div>}
      </section>

      <section id="guide" className="border-y border-[#174f2a]/10 bg-white"><div className="mx-auto max-w-[1240px] px-5 py-12 lg:px-8 lg:py-16"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#b47600]">Simple workflow</p><h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">From entries to a ready document</h2></div><ol className="grid gap-4 sm:grid-cols-3">{[["01","Select","Choose the required official form."],["02","Complete","Enter the details and review every field."],["03","Generate","Preview, print, or save the final document."]].map(([number,title,description]) => <li key={number} className="rounded-2xl bg-[#f4f7f4] p-5"><span className="font-serif text-3xl font-bold text-[#d69819]">{number}</span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 leading-6 text-[#607064]">{description}</p></li>)}</ol></div></div></section>

      <footer id="support" className="bg-[#102f1c] text-white/75">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-7 px-5 py-9 lg:flex-row lg:items-center lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex shrink-0 items-center gap-1.5">
              <img src={`${basePath}/assets/adssu-seal.png`} alt="" className="h-11 w-11 object-contain" />
              <img src={`${basePath}/assets/college-of-agriculture-logo.png`} alt="" className="h-11 w-11 rounded-full object-contain" />
            </div>
            <div>
              <p className="font-bold text-white">College of Agriculture E-Form Generator</p>
              <p className="mt-1 text-sm">Agusan del Sur State University&nbsp; | &nbsp;Bunawan, Agusan del Sur, 8506&nbsp; | &nbsp;</p>
            </div>
          </div>
          <p className="max-w-lg text-sm leading-6 lg:text-right">For corrections or assistance, contact the Chairperson of the Research and Creative Works, CA.</p>
        </div>
      </footer>
    </main>
  );
}
