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
      title: "A. School Context",
      description:
        "Key contextual information about Woodcreek School to orient CIS visitors. Covers the school's identity, programmes, governance, regulatory environment, and accreditation history.",
      links: [
        {
          label: "School overview — name, location, campus(es), current enrolment by division",
          href: "https://docs.google.com/document/d/11mImRI-a33JwuEXV4y8rPRNoREJ-1M4o/edit?usp=sharing_eil&rtpof=true&sd=true&ts=69abe7d6&urp=gmail_link",
        },
        {
          label: "Learning programmes — curricular, language, and extracurricular",
          href: P,
        },
        {
          label: "Glossary of school-specific language and terminology",
          href: P,
        },
        {
          // FIX 3: broadened from "previous accreditation summary" to cover all agencies
          label: "School history — founding, significant milestones, and authorisation history with any agency",
          href: P,
        },
        {
          label: "Summary of actions taken from previous accreditation recommendations (if applicable)",
          href: P,
        },
        {
          label: "Governance and ownership structure — organisational chart",
          href: P,
        },
        {
          label: "School divisions overview — age ranges, programmes, and current enrolment per division",
          href: P,
        },
        {
          // FIX 4: added licence specifics (when granted, by which authority, any restrictions)
          label: "Regulatory environment — Kenyan regulatory context, licence to operate (when granted, by which authority, any restrictions on operations)",
          href: P,
        },
        {
          label: "External compliance requirements — inspections, health and safety, safeguarding, data security",
          href: P,
        },
        {
          label: "Embassy and diplomatic relationships — formal relationships with missions operating in Kenya (if applicable)",
          href: P,
        },
      ],
    },

    // ── 1B: Community Voices Showcase ───────────────────────────────────────
    // Responsible: Richard / Alex (Folder 2)
    // One artefact per community group. Max 3 minutes video/audio or 1 page text.
    // Parental consent required before recording EY and KS1 children.
    {
      id: "community-voices",
      title: "B. Community Voices Showcase",
      description:
        "Short artefacts — video, audio, images, or text — that showcase Woodcreek's guiding principles through the authentic voices of each community group. One artefact per group, maximum three minutes or one page.",
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
      title: "C. Community Data",
      description:
        "Data samples describing the Woodcreek learning community across four categories: approach to data collection, learner data, human resources data, and community perception data. All data is anonymised in line with CIS data protection expectations.",
      links: [
        {
          label: "C.1 Approach to collecting community data — written statement (max 200 words)",
          href: P,
        },
        {
          label: "C.2a Admissions and attrition data — last three years by Key Stage",
          href: P,
        },
        {
          label: "C.2b Holistic learner data — academic achievement, holistic achievement, well-being",
          href: P,
        },
        {
          label: "C.3a Educator data — anonymised staff profile, qualifications, and retention (last three years)",
          href: P,
        },
        {
          label: "C.3b Support staff and contractors data — anonymised, last three years",
          href: P,
        },
        {
          label: "C.4a Community perception data — approach and recent examples",
          href: P,
        },
        {
          label: "C.4b CIS Community Survey — administration overview, gap analysis, strengths, opportunities, and action plan",
          href: P,
        },
      ],
    },

    // ── 1D: Leadership Insights ──────────────────────────────────────────────
    // Responsible: Richard and Alex (Folder 7) — Head of School Oliver Omotto + Director
    // Max 300 words or equivalent multimedia format with transcript
    {
      id: "leadership-insights",
      title: "D. Leadership Insights",
      description:
        "A reflection from Woodcreek School's leadership on the goals, challenges, and aspirations for the CIS accreditation journey. Responds to the five CIS reflection questions. Maximum 300 words or an equivalent multimedia format with transcript.",
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
    "Evidence of Woodcreek School's alignment with the three CIS Cornerstone Expectations — Purpose, Practices, and Planning. Each Cornerstone is accompanied by a current status statement and a 150-word self-assessment narrative as required by the CIS Portfolio Guide (pages 17–21).",
  subsections: [

    // ── PURPOSE ─────────────────────────────────────────────────────────────
    // Responsible: Jairo Obege and Oliver Omotto (Folder 8)
    {
      id: "purpose",
      title: "1. Purpose",
      description:
        "Evidence that Woodcreek School has clearly stated its purpose and guiding principles, that these are embedded across programmes and operations, and that they reflect the CIS Code of Ethics commitments. Includes the school's mission, values, and a profile of the Woodcreek learner.",
      links: [
        // A1
        {
          label: "Mission and/or vision statement(s)",
          href: P,
        },
        // A2
        {
          label: "Guiding principles — values, beliefs, and related graphic representations",
          href: P,
        },
        {
          label: "Evidence of guiding principles embedded across school programmes and operations",
          href: P,
        },
        {
          label: "Process and schedule for regular review of guiding statements",
          href: P,
        },
        // B1
        {
          label: "Woodcreek learner profile — description of the school's ideal graduate",
          href: P,
        },
      ],
    },

    // ── PURPOSE: SELF-ASSESSMENT ─────────────────────────────────────────────
    // Responsible: Head of School Oliver Omotto (Folder 11)
    {
      id: "purpose-self-assessment",
      title: "1. Purpose — Self-Assessment",
      description:
        "The Head of School's self-assessment of Woodcreek's current alignment with the Purpose Cornerstone. Includes chosen current status statements for Documentation and Implementation, and a 150-word reflection on strengths and areas for development.",
      links: [
        {
          label: "Purpose self-assessment narrative (max 150 words) — strengths and areas for development",
          href: P,
        },
      ],
    },

    // ── PRACTICES: ORGANISATION OF PEOPLE / STAFFING ────────────────────────
    // Responsible: Amoshe / Charleston (Folder 9) | HR Manager (C1–C6)
    {
      id: "practices-organisation",
      title: "2. Practices — Organisation of People and Staffing",
      description:
        "Evidence of Woodcreek's structured and ethical approach to managing its people: governance, leadership, staffing, HR documentation, performance evaluation, and communication agreements.",
      links: [
        {
          label: "C1 Organisational chart — governance, leadership, and school structure",
          href: P,
        },
        {
          label: "C2 Role profiles / job descriptions — key governance, leadership, pastoral, and educational roles",
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
          label: "D1 Governance by-laws and statutes — board composition, succession planning, governance self-evaluation, and Head of School evaluation",
          href: P,
        },
      ],
    },

    // ── PRACTICES: DIMENSION 1 — EMBEDDING GUIDING PRINCIPLES ───────────────
    {
      id: "practices-d1",
      title: "2. Practices — Dimension 1: Embedding Guiding Principles",
      description:
        "Governance-approved policies and operational procedures that embed Woodcreek's guiding principles across whole-school systems. Covers 15 required policy areas as specified in the CIS Portfolio Guide (pp. 20–21).",
      links: [
        { label: "Academic calendars", href: P },
        { label: "Anti-discrimination and equity policy", href: P },
        { label: "Code of conduct / ethics — adults and students", href: P },
        { label: "Communication policy", href: P },
        {
          label: "Evidence of systematic and regular review of policy, procedure, and programmes",
          href: P,
        },
        { label: "Facilities planning policy", href: P },
        { label: "Financial management and procurement policy", href: P },
        { label: "Grievances and whistleblowing policy", href: P },
        { label: "Language / mother tongue policy", href: P },
        { label: "Performance evaluation policy", href: P },
        {
          label: "Policy manual — full set of governance-approved policies",
          href: P,
        },
        { label: "Safer recruitment policy and procedures", href: P },
        { label: "Safeguarding and child protection policy", href: P },
        { label: "Planned resources and technologies — whole-school operational systems", href: P },
        // FIX 1: operational procedures layer for Dimension 1
        {
          label: "Staff handbook — operational procedures for whole-school guiding principle systems",
          href: P,
        },
        // FIX 2: cross-reference so evaluators ticking off D1 can find governance by-laws
        {
          label: "Governance by-laws and statutes — see Practices: Organisation of People and Staffing (D1)",
          href: P,
          note: "Cross-reference only. Primary evidence filed under Practices — Organisation of People and Staffing.",
        },
      ],
    },

    // ── PRACTICES: DIMENSION 2 — FOSTERING WELL-BEING ───────────────────────
    {
      id: "practices-d2",
      title: "2. Practices — Dimension 2: Fostering Well-being",
      description:
        "Policies and operational procedures that comprise Woodcreek's whole-school design for well-being. Covers safeguarding, health and safety, behaviour, digital citizenship, data security, and staff well-being.",
      links: [
        { label: "Behaviour and student conduct policy", href: P },
        { label: "Crisis, risk, and critical incident management policy", href: P },
        { label: "Data security policy — including ethical use of data", href: P },
        { label: "Digital citizenship and online safety policy", href: P },
        {
          label: "Facilities management policy — including lab safety, document storage, and examination storage",
          href: P,
        },
        { label: "Health, safety, and security policy", href: P },
        { label: "Human resource management policy", href: P },
        { label: "Recruitment and retention policy", href: P },
        { label: "Student support services policy — well-being, social-emotional, and pastoral", href: P },
        { label: "Sustainability policy", href: P },
        {
          label: "Appropriate and ethical use of technology policy — including artificial intelligence",
          href: P,
        },
        {
          label: "Boarding / residential programme policy",
          href: P,
        },
        { label: "Planned resources and technologies — well-being systems", href: P },
        // FIX 1: operational procedures layer for Dimension 2
        {
          label: "Well-being operational procedures — e.g. pastoral care handbook or student support manual",
          href: P,
        },
      ],
    },

    // ── PRACTICES: DIMENSION 3 — ADVANCING LEARNING ─────────────────────────
    {
      id: "practices-d3",
      title: "2. Practices — Dimension 3: Advancing Learning",
      description:
        "Policies and operational procedures that comprise Woodcreek's whole-school design for learning, teaching, and assessment across all sections from Early Years through Sixth Form.",
      links: [
        {
          label: "Academic integrity policy — including ethical use of technology and AI",
          href: P,
        },
        {
          label: "Admissions and enrolment policy",
          href: P,
        },
        { label: "Assessment, recording, and reporting policy", href: P },
        {
          label: "Curriculum policy and documentation — all programmes and school divisions",
          href: P,
        },
        { label: "Inclusion policy — access to learning", href: P },
        { label: "Learning and teaching policy", href: P },
        { label: "Parent engagement and partnerships for learning policy", href: P },
        {
          label: "Professional learning and growth policy",
          href: P,
        },
        {
          label: "Student support services policy — learning support",
          href: P,
        },
        {
          label: "Time and space planning — timetables, instructional time, and learning schedules",
          href: P,
        },
        {
          label: "Transitions policy — between school sections and on exit",
          href: P,
        },
        { label: "Homework policy", href: P },
        { label: "Examinations policy", href: P },
        { label: "Educational visits and off-site learning policy", href: P },
        {
          label: "Planned resources and technologies — learning systems",
          href: P,
        },
        // FIX 1: operational procedures layer for Dimension 3
        {
          label: "Learning and teaching operational procedures — e.g. teacher handbook or curriculum guidelines manual",
          href: P,
        },
      ],
    },

    // ── PRACTICES: SELF-ASSESSMENT ───────────────────────────────────────────
    // Responsible: Head of School Oliver Omotto (Folder 11)
    {
      id: "practices-self-assessment",
      title: "2. Practices — Self-Assessment",
      description:
        "A single 150-word self-assessment narrative covering all three Dimensions of Practices. Includes chosen current status statements for Documentation and Implementation as required by the CIS Portfolio Guide.",
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
      title: "3. Planning",
      description:
        "Evidence that Woodcreek School's leaders, governors, and owners proactively develop strategic and financial plans that support the school's long-term vision. Includes strategic planning documentation (E1–E6) and financial planning evidence (F1–F6). Financial documents are held in a restricted folder shared only with the CIS IAA and IAC.",
      links: [
        {
          label: "E1 Current strategic plan — or equivalent long-term planning document",
          href: P,
        },
        {
          label: "E2 Medium-to-long-term planning for physical and digital premises",
          href: P,
        },
        {
          label: "E3 Implementation and action plans — accompanying the strategic plan",
          href: P,
        },
        {
          label: "E4 Evidence of regular, holistic data collection and analysis informing planning",
          href: P,
        },
        {
          label: "E5 Evidence of systematic policy and procedural review",
          href: P,
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
          label: "F3 Medium-to-long-term financial projections aligned with strategic plan — RESTRICTED",
          href: P,
        },
        {
          label: "F4 Risk management policies and processes — RESTRICTED",
          href: P,
        },
        {
          label: "F5 SWOT analysis — or equivalent contextual analysis of school stability — RESTRICTED",
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
      title: "3. Planning — Self-Assessment",
      description:
        "The Head of School's self-assessment of Woodcreek's current alignment with the Planning Cornerstone. Includes chosen current status statements for Documentation and Implementation, and a 150-word reflection on strengths and areas for development.",
      links: [
        {
          label: "Planning self-assessment narrative (max 150 words) — strengths and areas for development",
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
      title: "Overview",
      description:
        "Learning Stories will be added here as Development Initiatives are identified and agreed during the Preparatory Engagement Visit. Each story will document the full innovation cycle: where the initiative began, how it was implemented, what impact it had, and what the school learned along the way.",
      links: [],
    },
    // Template: copy and complete one block per Development Initiative after the PEV
    // {
    //   id: "learning-story-1",
    //   title: "Learning Story 1 — [Development Initiative Title]",
    //   description: "...",
    //   links: [
    //     { label: "A. Process — Intentions and Implementation (max 200 words each)", href: P },
    //     { label: "B. Outcomes — Impact and Insights (max 200 words each)", href: P },
    //     { label: "CIS Standards Alignment — max 100 words per standard", href: P },
    //   ],
    // },
  ],
};

export const sections: Section[] = [part1, part2, part3];