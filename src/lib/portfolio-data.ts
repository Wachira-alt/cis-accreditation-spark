// Single source of truth for the Woodcreek School CIS Accreditation Portfolio.
// Structure is aligned with the CIS Accreditation Portfolio Guide (August 2025).
// Each `href` is a placeholder ("#") to be replaced with the corresponding
// Google Drive link before the portfolio is shared with CIS.

export type EvidenceLink = {
  label: string;
  href: string;
  note?: string;
};

export type Subsection = {
  id: string;
  title: string;
  description: string;
  /** Shown as "Last updated" on the subsection page; the CIS guide asks for update dates. */
  updated?: string;
  links: EvidenceLink[];
};

export type Section = {
  id: string;
  number: string;
  title: string;
  intro: string;
  subsections: Subsection[];
};

const P = "#"; // placeholder — replace with Google Drive view-only link before submission

// ─────────────────────────────────────────────────────────────────────────────
// PART 1: LEARNING COMMUNITY PROFILE
// Share with CIS 8 weeks before the Preparatory Engagement Visit
// ─────────────────────────────────────────────────────────────────────────────

export const part1: Section = {
  id: "part-1",
  number: "Part 1",
  title: "Learning Community Profile",
  intro:
    "Contextual information about Woodcreek School as a learning community: who we are, the community we serve, the data that describes us, and the perspectives of those who lead our learning community. Prepared in accordance with the CIS Accreditation Portfolio Guide (Part 1, pages 8–15). Shared with CIS 8 weeks before the Preparatory Engagement Visit: 14–17 September 2026.",
  subsections: [
    // ── 1A: School Context ──────────────────────────────────────────────────
    // Responsible: Joan (Folder 1) | Accreditation Coordinator: Jairo Obege
    {
      id: "school-context",
      updated: "July 2026",
      title: "A. School Context",
      description:
        "Key contextual information that orients CIS visitors to Woodcreek School before the Preparatory Engagement Visit. Presented as clearly and visually as possible, with descriptive text kept to a minimum. Covers the school's basic profile, learning programmes, a glossary of school-specific language, history and authorisation background, governance and ownership structure, and the regulatory environment in which the school operates in Kenya.",
      links: [
        {
          label: "School overview — name, location, campus(es), current enrolment by division",
          href: "https://drive.google.com/file/d/1VlGHySOv1u9iasRNdEH2VVf4PRL-1A7J/view",
        },
        {
          label: "Learning programmes — curricular, language, and extracurricular",
          href: "https://drive.google.com/file/d/1c0L9WYx-G3ZOIjEQH8jPRbKK_UTCRxET/view",
        },
        {
          label: "Glossary of school-specific language and terminology",
          href: "https://drive.google.com/file/d/1pdL_Mr4PGW9LUG1LPbteUjtU4lZ0L3_X/view",
        },
        {
          label:
            "School history — founding, significant milestones, and authorisation history with any agency",
          href: "https://drive.google.com/file/d/1dRwflchRAv6p-kUV1_wQSXLFboQqZy1d/view",
        },
        {
          label:
            "Summary of actions taken from previous accreditation recommendations (if applicable)",
          href: P,
        },
        {
          label: "Governance and ownership structure — organisational chart",
          href: "https://drive.google.com/file/d/1JUrsYG8JefM1B4aR_4Yd838SoRSKy5is/view",
        },
        {
          label:
            "School divisions overview — age ranges, programmes, and current enrolment per division",
          href: "https://drive.google.com/file/d/1sAxo1v-lAiTHlCn0hWDuyd4ybQ_MFTiz/view",
        },
        {
          label:
            "Regulatory environment — Kenyan regulatory context, licence to operate (when granted, by which authority, any restrictions on operations)",
          href: "https://drive.google.com/file/d/1VSbedpnuO_jEM8sQa4SPqzJlL08Pqjlc/view",
        },
        {
          label:
            "External compliance requirements — inspections, health and safety, safeguarding, data security",
          href: "https://drive.google.com/file/d/17lIZLacnVJ6nkmoWSTlW5kevGOurQ_tL/view",
        },
        {
          label:
            "Embassy and diplomatic relationships — formal relationships with missions operating in Kenya (if applicable)",
          href: "https://drive.google.com/file/d/1ZH1kyR-bTVq2IeTRmMpexMAqAjR1jxfr/view",
        },
      ],
    },

    // ── 1B: Community Voices Showcase ───────────────────────────────────────
    // Responsible: Richard / Alex (Folder 2)
    // One artefact per community group. Max 3 minutes video/audio or 1 page text.
    // Parental consent required before recording EY and KS1 children.
    {
      id: "community-voices",
      updated: "July 2026",
      title: "B. Community Voices Showcase",
      description:
        "A creative showcase of Woodcreek's guiding principles through the authentic voices of each community group. The purpose is to demonstrate how the school's guiding principles are lived and felt by the people within the community, and to give CIS evaluators a genuine sense of the school's unique identity and culture. Each artefact should be original and meaningful — videos, images, artwork, audio recordings, or written reflections are all welcome. One artefact per community group; maximum three minutes for video or audio, or one page for written submissions. Parental consent must be obtained before recording Early Years and Key Stage 1 children.",
      links: [
        {
          label: "Learners — student voices across school sections",
          href: P,
        },
        {
          label: "Educators and staff — teaching and support staff voices",
          href: P,
        },
        {
          label: "Leaders — Head of School and senior leadership voices",
          href: P,
        },
        {
          label: "Governors / owners — board and ownership voices",
          href: P,
        },
        {
          label: "Parents — parent community voices",
          href: P,
        },
        {
          label: "Alumni — voices of former students (if available)",
          href: P,
        },
      ],
    },

    // ── 1C: Community Data ───────────────────────────────────────────────────
    // Responsible: Nicole / Dennis (Folder 3); Linet (Folder 4); HR Team (Folder 5); Nicole (Folder 6)
    {
      id: "community-data",
      updated: "July 2026",
      title: "C. Community Data",
      description:
        "Data samples describing the Woodcreek learning community across four categories: the school's approach to data collection, learner data, human resources data, and community perception data including the CIS Community Survey. All data is anonymised in line with CIS data protection expectations. Where data shows a trend, the school provides brief contextual commentary to help evaluators interpret it accurately. Key data is presented visually where possible (graphs, charts) rather than as raw tables.",
      links: [
        {
          label: "C.1 Approach to collecting community data — written statement (max 200 words)",
          href: "https://drive.google.com/file/d/1SzaWyVOxhLL__K0I7s45qx8GVZjVs79_/view",
        },
        {
          label: "C.2a Admissions and attrition data — last three years by Key Stage",
          href: "https://drive.google.com/file/d/1Pjs3l2Zm4-7P1EJnSCtC5HMCLFtivJUz/view",
        },
        {
          label:
            "C.2b Holistic learner data — academic achievement, holistic achievement, well-being",
          href: "https://drive.google.com/file/d/1PH7SCGTJKqEVxOjj-NRugquqSjxY9hLX/view",
        },
        {
          label:
            "C.3a Educator data — anonymised staff profile, qualifications, and retention (last three years)",
          href: "https://drive.google.com/file/d/1rme2uDZkpAHxOSWY1TAGDQIOE1DgxP7l/view",
        },
        {
          label: "C.3b Support staff and contractors data — anonymised, last three years",
          href: P,
        },
        {
          label: "C.4a Community perception data — approach and recent examples",
          href: "https://drive.google.com/file/d/1d6EHYfDHgB6MoxDTR-Lncpc69N4QRpSR/view",
        },
        {
          label:
            "C.4b CIS Community Survey — administration overview, gap analysis, strengths, opportunities, and action plan",
          href: P,
        },
      ],
    },

    // ── 1D: Leadership Insights ──────────────────────────────────────────────
    // Responsible: Richard and Alex (Folder 7) — Head of School Oliver Omotto + Director
    // Max 300 words or equivalent multimedia format with transcript
    {
      id: "leadership-insights",
      updated: "July 2026",
      title: "D. Leadership Insights",
      description:
        "A reflective response from Woodcreek School's leadership on the aims, hopes, and challenges of the upcoming CIS accreditation journey. Responds to five specific CIS reflection questions covering the school's goals for the process, how accreditation is expected to impact the community, anticipated challenges, hoped-for benefits, and what the school hopes to learn. Maximum 300 words, or an equivalent multimedia format (e.g. a recorded video, a recorded leadership conversation, or a slide deck) with a written transcript.",
      links: [
        {
          label: "Leadership reflection — written response to five CIS questions (max 300 words)",
          href: P,
        },
        {
          label: "Leadership insights video — Head of School and Director (optional)",
          href: P,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PART 2: CORNERSTONE EXPECTATIONS
// Share with CIS 8 weeks before the Preparatory Engagement Visit
// Each Cornerstone requires: (1) current status statement and (2) 150-word self-assessment
// ─────────────────────────────────────────────────────────────────────────────

export const part2: Section = {
  id: "part-2",
  number: "Part 2",
  title: "Cornerstone Expectations",
  intro:
    "Evidence of Woodcreek School's alignment with the three CIS Cornerstone Expectations — Purpose, Practices, and Planning. Each Cornerstone is accompanied by a current status statement (chosen from the CIS fixed menu for both Documentation and Implementation) and a 150-word self-assessment narrative as required by the CIS Portfolio Guide (pages 17–21).",
  subsections: [
    // ── PURPOSE ─────────────────────────────────────────────────────────────
    // Responsible: Jairo Obege and Oliver Omotto (Folder 8)
    {
      id: "purpose",
      updated: "July 2026",
      title: "1. Purpose",
      description:
        "Evidence that Woodcreek School has clearly stated its purpose (why it exists) and its guiding principles (its main values and beliefs), that these reflect the CIS Code of Ethics commitments, and that they are embedded across programmes and operations to support the school's designs for learning and well-being. Evidence is organised under two headings as specified by CIS: (A) Purpose and guiding principles, and (B) Overview of a learner.",
      links: [
        {
          label: "Mission and/or vision statement(s)",
          href: "https://drive.google.com/file/d/1EoA93rlqGdxlI4UUrbLJTNVUkDIY6KJ3/view",
        },
        {
          label: "Guiding principles — values, beliefs, and related graphic representations",
          href: "https://drive.google.com/file/d/1LUWB6uqFPTdvArAwW_08Hm1Bt40gVWLU/view",
        },
        {
          label: "Evidence of guiding principles embedded across school programmes and operations",
          href: "https://drive.google.com/file/d/1GS_hDjSVfXkV9vu-p_CItL0jagaKaAxU/view",
        },
        {
          label: "Process and schedule for regular review of guiding statements",
          href: "https://drive.google.com/file/d/10wAXQ5auoej4MGzRNi1SdZSeidDZ5JM7/view",
        },
        {
          label: "Woodcreek learner profile — description of the school's ideal graduate",
          href: "https://drive.google.com/file/d/17NoPa12VdQT-W4ucoqBTPIe3bbYPWnfS/view",
        },
      ],
    },

    // ── PURPOSE: SELF-ASSESSMENT ─────────────────────────────────────────────
    // Responsible: Head of School Oliver Omotto (Folder 11)
    {
      id: "purpose-self-assessment",
      updated: "July 2026",
      title: "1. Purpose — Self-Assessment",
      description:
        "The Head of School's self-assessment of Woodcreek's current alignment with the Purpose Cornerstone. Requires two current status statements chosen from the CIS fixed menu — one for Documentation and one for Implementation — followed by a reflective narrative of no more than 150 words identifying significant strengths and areas for further development in the school's documentation and implementation of its purpose and guiding principles. Documentation options: 'Robust, coherent, and regularly reviewed' / 'Clear and relevant with room for development' / 'Currently in active development' / 'Not yet sufficiently developed'. Implementation options: 'Deeply embedded for impact' / 'Widely implemented with room for improvement' / 'Inconsistently implemented' / 'Not yet sufficiently evidenced'.",
      links: [
        {
          label:
            "Purpose self-assessment narrative (max 150 words) — strengths and areas for development",
          href: P,
        },
      ],
    },

    // ── PRACTICES: ORGANISATION OF PEOPLE / STAFFING ────────────────────────
    // Responsible: Amoshe / Charleston (Folder 9) | HR Manager (C1–C6)
    {
      id: "practices-organisation",
      updated: "July 2026",
      title: "2. Practices — Organisation of People and Staffing",
      description:
        "Evidence that Woodcreek School has ethical and clear structures in place for managing relationships and supporting the people in its community — including leaders, governors, owners, staff, learners, and families. This section covers the school's organisational structure, defined roles, HR documentation, performance evaluation systems, and communication agreements, as specified under section C and D1 of the CIS Practices evidence requirements.",
      links: [
        {
          label: "C1 Organisational chart — governance, leadership, and school structure",
          href: P,
        },
        {
          label:
            "C2 Role profiles / job descriptions — key governance, leadership, pastoral, and educational roles",
          href: P,
        },
        {
          label: "C3 Anonymised staff list — all staff with roles and qualifications",
          href: P,
        },
        {
          label: "C4 Human resources documentation — safer recruitment policy and sample staff contract",
          href: P,
        },
        {
          label: "C5 Performance evaluation system — appraisal policy and procedures",
          href: P,
        },
        {
          label: "C6 Communication agreements — staff, parents, and students",
          href: P,
        },
        {
          label:
            "D1 Governance by-laws and statutes — board composition, succession planning, governance self-evaluation, and Head of School evaluation",
          href: "https://drive.google.com/file/d/13Cqa9QORu8hKrqBb8WYw6N1clQ-KpgEo/view",
        },
      ],
    },

    // ── PRACTICES: DIMENSION 1 — EMBEDDING GUIDING PRINCIPLES ───────────────
    {
      id: "practices-d1",
      updated: "July 2026",
      title: "2. Practices — Dimension 1: Embedding Guiding Principles",
      description:
        "Governance-approved policies and operational procedures that embed Woodcreek's guiding principles across whole-school systems. CIS requires evidence across fifteen specific policy areas for this Dimension. For each policy, the portfolio provides both the governance-approved policy document and the operational procedure (handbook, guideline, or equivalent) that puts the policy into practice. Where a document is not yet in place, a brief written explanation is provided.",
      links: [
        {
          label: "Academic calendars",
          href: P,
        },
        {
          label: "Anti-discrimination and equity policy",
          href: "https://drive.google.com/file/d/1Z2vQ-DYSDbfyzjm_25MugiEWagofMG0r/view",
        },
        {
          label: "Code of conduct / ethics — adults and students",
          href: P,
        },
        {
          label: "Communication policy",
          href: "https://drive.google.com/file/d/15pgyvFP0jB7ntxOwJc4b_xWaCwjAe_Pa/view",
        },
        {
          label: "Evidence of systematic and regular review of policy, procedure, and programmes",
          href: "https://drive.google.com/file/d/1PKYfEdPtaThcvFl_89ezpg5kL9KagbCa/view",
        },
        {
          label: "Facilities planning policy",
          href: P,
        },
        {
          label: "Financial management and procurement policy",
          href: "https://drive.google.com/file/d/19rAeYFxuD4IBmCzSgbjks-ya0dg6-3mr/view",
        },
        {
          label: "Grievances and whistleblowing policy",
          href: "https://drive.google.com/file/d/1d0O4ZVeQWjiyjbWOdqd59WQ-lx4PPcQo/view",
        },
        {
          label: "Language / mother tongue policy",
          href: "https://drive.google.com/file/d/1kCbD7fGxtMcscKqSJtgCFtkChduxHegp/view",
        },
        {
          label: "Performance evaluation policy",
          href: "https://drive.google.com/file/d/1DSBRLVrw-NgnvcQH1PkIk_rG6jEzUGhM/view",
        },
        {
          label: "Policy manual — full set of governance-approved policies",
          href: "https://drive.google.com/file/d/1jTanBMc0EosiBixzQs3LiYXgQ9tKptq3/view",
        },
        {
          label: "Safer recruitment policy and procedures",
          href: "https://drive.google.com/file/d/18X4cwZfnKe1GrLzYAMS3WaV8qTl3EWrg/view",
        },
        {
          label: "Safeguarding and child protection policy",
          href: "https://drive.google.com/file/d/1pCYyQXT_A_ah68dQVZnz-qxxeCUr2mxm/view",
        },
        {
          label: "Planned resources and technologies — whole-school operational systems",
          href: P,
        },
        {
          label:
            "Staff handbook — operational procedures for whole-school guiding principle systems",
          href: "https://drive.google.com/file/d/134hzDInaLjjjrIbYK7NpXzzdnWSNhk7v/view",
        },
        {
          label:
            "Governance by-laws and statutes — see Practices: Organisation of People and Staffing (D1)",
          href: "https://drive.google.com/file/d/13Cqa9QORu8hKrqBb8WYw6N1clQ-KpgEo/view",
        },
      ],
    },

    // ── PRACTICES: DIMENSION 2 — FOSTERING WELL-BEING ───────────────────────
    {
      id: "practices-d2",
      updated: "July 2026",
      title: "2. Practices — Dimension 2: Fostering Well-being",
      description:
        "Policies and operational procedures that make up Woodcreek's whole-school design for well-being. CIS requires evidence that the school has a comprehensive, coherent approach to student and staff well-being — covering safeguarding systems, health and safety, behaviour management, digital safety, data ethics, and sustainability. Each policy is accompanied by the operational procedures that put it into practice. Where a policy area is not applicable to Woodcreek's context, a brief written explanation is provided.",
      links: [
        {
          label: "Behaviour and student conduct policy",
          href: "https://drive.google.com/file/d/1ro-uFENHt1areFASO0IFcyryiRZrE0Z2/view",
        },
        {
          label: "Crisis, risk, and critical incident management policy",
          href: "https://drive.google.com/file/d/1L50m9IeU7bHL8cIRTMTOCLhGQkdvK1Ar/view",
        },
        {
          label: "Data security policy — including ethical use of data",
          href: "https://drive.google.com/file/d/1HzPfEkf-EovShm1jZ2bL0P_MHYmoaXhz/view",
        },
        {
          label: "Digital citizenship and online safety policy",
          href: "https://drive.google.com/file/d/1k_DqfOxM9sReoZaL8waKbuaQ2QbFE-QD/view",
        },
        {
          label:
            "Facilities management policy — including lab safety, document storage, and examination storage",
          href: "https://drive.google.com/file/d/1pNe3ge05bxOJR4QtP2Pkw655OFxzhQ3c/view",
        },
        {
          label: "Health, safety, and security policy",
          href: "https://drive.google.com/file/d/1nxolyi4ATaglHYvf7QADl5UqKFrYvmin/view",
        },
        {
          label: "Human resource management policy",
          href: P,
        },
        {
          label: "Recruitment and retention policy",
          href: P,
        },
        {
          label: "Student support services policy — well-being, social-emotional, and pastoral",
          href: "https://drive.google.com/file/d/1he7kJRw5KG3PG1bRH5l1SIUp45S50rPZ/view",
        },
        {
          label: "Sustainability policy",
          href: "https://drive.google.com/file/d/1BD8DHy97kpJvA4aziRtSaqvswEkhdzha/view",
        },
        {
          label:
            "Appropriate and ethical use of technology policy — including artificial intelligence",
          href: "https://drive.google.com/file/d/1nWuSNpbOA8ZuTJ6x9bf35PYHkOWUc8-2/view",
        },
        {
          label: "Boarding / residential programme policy",
          href: "https://drive.google.com/file/d/1GdDU2Uh64xui2fV7zmydiU0ntuF_uvxi/view",
        },
        {
          label: "Planned resources and technologies — well-being systems",
          href: "https://drive.google.com/file/d/1va_6M3m1kYtm04F8TxL9a5-kWEUNdjCh/view",
        },
        {
          label:
            "Well-being operational procedures — e.g. pastoral care handbook or student support manual",
          href: P,
        },
      ],
    },

    // ── PRACTICES: DIMENSION 3 — ADVANCING LEARNING ─────────────────────────
    {
      id: "practices-d3",
      updated: "July 2026",
      title: "2. Practices — Dimension 3: Advancing Learning",
      description:
        "Policies and operational procedures that make up Woodcreek's whole-school design for learning, teaching, and assessment — from Early Years through Sixth Form. CIS requires evidence that the school has a comprehensive, coherent approach to curriculum, pedagogy, assessment, inclusion, professional learning, and student transitions. Each policy is accompanied by the operational procedures that put it into practice.",
      links: [
        {
          label: "Academic integrity policy — including ethical use of technology and AI",
          href: "https://drive.google.com/file/d/1Y-eQRl6NE66-MG7w_hje8j31Sb1uq9i5/view",
        },
        {
          label: "Admissions and enrolment policy",
          href: "https://drive.google.com/file/d/1vNNdrIwy6h37r1XZasHwIv7J_KHGSi3-/view",
        },
        {
          label: "Assessment, recording, and reporting policy",
          href: "https://drive.google.com/file/d/13NNvvQrZthhTIyUBYSJCJXIII0ljHd5u/view",
        },
        {
          label: "Curriculum policy and documentation — all programmes and school divisions",
          href: "https://drive.google.com/file/d/1Mb94-NRURN0JLYBXbKDHFmjuvLDjEP4R/view",
        },
        {
          label: "Inclusion policy — access to learning",
          href: "https://drive.google.com/file/d/1MamiGwELZOCZKkaOJxjVgw7c-qYgtWVU/view",
        },
        {
          label: "Learning and teaching policy",
          href: "https://drive.google.com/file/d/1EBxlg_rJu7bLgwjcDObVxTGjCp-HuQBr/view",
        },
        {
          label: "Parent engagement and partnerships for learning policy",
          href: "https://drive.google.com/file/d/1eIkDFv64M_dzkmzfgNEbTyTguH1E3dYQ/view",
        },
        {
          label: "Professional learning and growth policy",
          href: "https://drive.google.com/file/d/1bbL16KXpBaKoX6s9NT7es_hA7Xne45Ae/view",
        },
        {
          label: "Student support services policy — learning support",
          href: P,
        },
        {
          label: "Time and space planning — timetables, instructional time, and learning schedules",
          href: "https://drive.google.com/file/d/1XgZsSu2sVp9xDmqfIlZLtxCOkwkoa3jw/view",
        },
        {
          label: "Transitions policy — between school sections and on exit",
          href: "https://drive.google.com/file/d/1nn5Dx6RH75xe46H8CyVNRuC_Hmv87zcc/view",
        },
        {
          label: "Homework policy",
          href: "https://drive.google.com/file/d/1rF93yxpJqqqKbYYMI7qxlxgqcy8jxAfO/view",
        },
        {
          label: "Examinations policy",
          href: "https://drive.google.com/file/d/1d-83vdMh7qSJNB0aqQNUNcrrU0pbcJVa/view",
        },
        {
          label: "Educational visits and off-site learning policy",
          href: "https://drive.google.com/file/d/1TIG8tt4c1cxPLg0WCJv79CCQ2OeqwKpN/view",
        },
        {
          label: "Planned resources and technologies — learning systems",
          href: P,
        },
        {
          label:
            "Learning and teaching operational procedures — e.g. teacher handbook or curriculum guidelines manual",
          href: "https://drive.google.com/file/d/1-K7fP58qjjAizCRVTl7jfEwGM1TQg1-N/view",
        },
      ],
    },

    // ── PRACTICES: SELF-ASSESSMENT ───────────────────────────────────────────
    // Responsible: Head of School Oliver Omotto (Folder 11)
    {
      id: "practices-self-assessment",
      updated: "July 2026",
      title: "2. Practices — Self-Assessment",
      description:
        "A single self-assessment covering all three Dimensions of Practices (Embedding Guiding Principles, Fostering Well-being, and Advancing Learning). Requires two current status statements chosen from the CIS fixed menu — one for Documentation and one for Implementation — followed by a reflective narrative of no more than 150 words. Documentation options: 'Robust, coherent, and regularly reviewed' / 'Clear and relevant with room for development' / 'Currently in active development' / 'Not yet sufficiently developed'. Implementation options: 'Deeply embedded for impact' / 'Widely implemented with room for improvement' / 'Inconsistently implemented' / 'Not yet sufficiently evidenced'.",
      links: [
        {
          label: "Practices self-assessment narrative — all three Dimensions (max 150 words)",
          href: P,
        },
      ],
    },

    // ── PLANNING ─────────────────────────────────────────────────────────────
    // Responsible: Caroline / Rommel / Joan (Folder 10)
    // Financial documents (F1–F6) are stored in a separate password-protected folder.
    // Share only with CIS IAA and IAC — not with volunteer evaluators.
    {
      id: "planning",
      updated: "July 2026",
      title: "3. Planning",
      description:
        "Evidence that Woodcreek School's leaders, governors, and owners proactively develop strategic and financial plans that support the school's long-term vision. Organised under two headings as specified by CIS: (E) Strategic planning documentation, and (F) Evidence of financial planning for sustainability. Financial documents (F1–F6) are held in a separate password-protected folder and shared only with the CIS IAA and IAC — not with volunteer evaluators.",
      links: [
        {
          label: "E1 Current strategic plan — or equivalent long-term planning document",
          href: "https://drive.google.com/file/d/1htCrdDDPBTIN5YCPtNXyzhO0YIhCPYxx/view",
        },
        {
          label: "E2 Medium-to-long-term planning for physical and digital premises",
          href: "https://drive.google.com/file/d/1X3LZP4N31lOinPV_f3q0UWWDReeR_I25/view",
        },
        {
          label: "E3 Implementation and action plans — accompanying the strategic plan",
          href: "https://drive.google.com/file/d/1Ep9jaQjEB5Ve843mDi8T-qzmAQwQ7WKo/view",
        },
        {
          label: "E4 Evidence of regular, holistic data collection and analysis informing planning",
          href: P,
        },
        {
          label: "E5 Evidence of systematic policy and procedural review",
          href: "https://drive.google.com/file/d/1dITyI0Wh6ffdERupEFpO9XnPWErnR6Ti/view",
        },
        {
          label: "E6 Strategic updates since current plan — board or community reports on progress",
          href: P,
        },
        {
          label: "F1 Board financial policy — RESTRICTED",
          href: P,
        },
        {
          label: "F2 Documented financial procedures — RESTRICTED",
          href: P,
        },
        {
          label:
            "F3 Medium-to-long-term financial projections aligned with strategic plan — RESTRICTED",
          href: P,
        },
        {
          label: "F4 Risk management policies and processes — RESTRICTED",
          href: P,
        },
        {
          label:
            "F5 SWOT analysis — or equivalent contextual analysis of school stability — RESTRICTED",
          href: P,
        },
        {
          label: "F6 CIS Financial Template or equivalent financial overview — RESTRICTED",
          href: P,
        },
      ],
    },

    // ── PLANNING: SELF-ASSESSMENT ────────────────────────────────────────────
    // Responsible: Head of School Oliver Omotto (Folder 11)
    {
      id: "planning-self-assessment",
      updated: "July 2026",
      title: "3. Planning — Self-Assessment",
      description:
        "The Head of School's self-assessment of Woodcreek's current alignment with the Planning Cornerstone. Requires two current status statements chosen from the CIS fixed menu — one for Documentation and one for Implementation — followed by a reflective narrative of no more than 150 words identifying significant strengths and areas for further development in the school's systems for strategic and sustainable future planning. Documentation options: 'Robust, coherent, and regularly reviewed' / 'Clear and relevant with room for development' / 'Currently in active development' / 'Not yet sufficiently developed'. Implementation options: 'Deeply embedded for impact' / 'Widely implemented with room for improvement' / 'Inconsistently implemented' / 'Not yet sufficiently evidenced'.",
      links: [
        {
          label:
            "Planning self-assessment narrative (max 150 words) — strengths and areas for development",
          href: P,
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PART 3: LEARNING STORIES
// Developed during the self-study phase — not required for the Preparatory Engagement Visit.
// Share with CIS 4 months before Team Evaluation; share with Evaluation Team 8 weeks before.
// One Learning Story per Development Initiative identified in the Accreditation Plan.
// ─────────────────────────────────────────────────────────────────────────────

export const part3: Section = {
  id: "part-3",
  number: "Part 3",
  title: "Learning Stories",
  intro:
    "Learning Stories are developed during the self-study phase of the accreditation cycle, with one story per Development Initiative identified in the Accreditation Plan. Each story follows the CIS Innovation Cycle: Intentions, Implementation, Impact, and Insights. This Part will be completed in preparation for the Team Evaluation Visit and is not required for the Preparatory Engagement Visit (14–17 September 2026).",
  subsections: [
    {
      id: "overview",
      updated: "July 2026",
      title: "Overview",
      description:
        "Learning Stories will be added here as Development Initiatives are identified and agreed during the Preparatory Engagement Visit. Each story documents the school's journey through the full CIS Innovation Cycle: Intentions (where the initiative began and why), Implementation (how it was planned and delivered), Impact (what difference it made to the community), and Insights (what the school learned and what comes next). Each of the four sections has a maximum of 200 words. The story should be supported by curated evidence — data, community voices, multimedia — linked throughout the text.",
      links: [],
    },
    // Template: copy and complete one block per Development Initiative after the PEV.
    // Each Learning Story must include the following four sections (max 200 words each):
    // {
    //   id: "learning-story-1",
    //   title: "Learning Story 1 — [Development Initiative Title]",
    //   description: "...",
    //   links: [
    //     {
    //       label: "A. Process — Intentions (max 200 words): what insights and data led to this initiative, which CIS standards were selected and why, how it aligns with strategic priorities, and which Cornerstone Expectations needed to evolve",
    //       href: P,
    //     },
    //     {
    //       label: "A. Process — Implementation (max 200 words): processes and structures used, roles of each community group (governors, leadership, teachers, parents, learners), successes, challenges overcome, and adjustments made to initial plans",
    //       href: P,
    //     },
    //     {
    //       label: "B. Outcomes — Impact (max 200 words): self-assessment of impact, how the status of selected CIS standards has changed, what has changed for the community, and learning for the future",
    //       href: P,
    //     },
    //     {
    //       label: "B. Outcomes — Insights (max 200 words): sources of knowledge accessed, community-based data used to measure impact, next steps, and insights missing from initial plans",
    //       href: P,
    //     },
    //     {
    //       label: "CIS Standards Alignment — one overview for all selected standards, max 100 words per standard, with hyperlinks to evidence of impact",
    //       href: P,
    //     },
    //   ],
    // },
  ],
};

export const sections: Section[] = [part1, part2, part3];