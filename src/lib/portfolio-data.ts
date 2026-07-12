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
          href: "https://docs.google.com/document/d/11mImRI-a33JwuEXV4y8rPRNoREJ-1M4o/edit?usp=sharing_eil&rtpof=true&sd=true&ts=69abe7d6&urp=gmail_link",
          note: "Includes group name (if applicable), all campus locations, and current student numbers broken down by school division (e.g. Early Years, Primary, Secondary, Sixth Form).",
        },
        {
          label: "Learning programmes — curricular, language, and extracurricular",
          href: P,
          note: "A complete list of all programmes offered at Woodcreek, including the curriculum framework followed (e.g. British National Curriculum, IGCSE, A Level), language of instruction and any additional language programmes, and co-curricular or extracurricular offerings.",
        },
        {
          label: "Glossary of school-specific language and terminology",
          href: P,
          note: "Defines school name and any nicknames or abbreviations, English style used (British), governance and leadership group titles (e.g. Senior Leadership Team = SLT; Board of Governors = BoG), grade level or year group naming conventions, and the names of each school section or division.",
        },
        {
          label: "School history — founding, significant milestones, and authorisation history with any agency",
          href: P,
          note: "A brief narrative history of the school covering its founding, key milestones, and any significant changes. Includes a summary of the school's authorisation or accreditation history with all relevant agencies, not limited to CIS.",
        },
        {
          label: "Summary of actions taken from previous accreditation recommendations (if applicable)",
          href: P,
          note: "If Woodcreek has previously been accredited by CIS or another agency, this document summarises the recommendations received and the specific actions the school has taken in response. If this is a first accreditation, this item may be marked not applicable with a brief explanation.",
        },
        {
          label: "Governance and ownership structure — organisational chart",
          href: P,
          note: "A visual organisational chart showing the ownership structure (individual, company, or trust), the governance body (Board of Governors or equivalent), and how these relate to the senior leadership of the school. Includes names and roles of key governance and leadership figures.",
        },
        {
          label: "School divisions overview — age ranges, programmes, and current enrolment per division",
          href: P,
          note: "A structured overview of each horizontal division of the school (e.g. Early Years, Lower Primary, Upper Primary, Secondary, Sixth Form), including the age range of students in each, the programmes delivered, and current enrolment figures.",
        },
        {
          label: "Regulatory environment — Kenyan regulatory context, licence to operate (when granted, by which authority, any restrictions on operations)",
          href: P,
          note: "An overview of the governmental and regulatory environment in Kenya that governs the school's operations. Specifies when the school was granted its licence to operate, which authority issued it (e.g. Ministry of Education), and any restrictions or conditions attached to that licence. Also covers any special features of the school's locality or county that affect operations.",
        },
        {
          label: "External compliance requirements — inspections, health and safety, safeguarding, data security",
          href: P,
          note: "A summary of all external compliance obligations the school is subject to, including scheduled government inspections, health and safety certifications, safeguarding and child protection requirements under Kenyan law, data security obligations, outsourced service agreements, and any security certifications required.",
        },
        {
          label: "Embassy and diplomatic relationships — formal relationships with missions operating in Kenya (if applicable)",
          href: P,
          note: "Documents any formal relationships between Woodcreek School and embassies or diplomatic missions based in Kenya that result in enrolment agreements, fee arrangements, or operational obligations. If no such formal relationships exist, a brief written statement to that effect satisfies this requirement.",
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
          note: "One artefact showcasing the voices of students from across the school. Should reflect how the school's guiding principles are understood and experienced by learners. May be a short video, audio recording, piece of artwork, written reflection, or curated combination. Maximum three minutes or one page.",
        },
        {
          label: "Educators and staff — teaching and support staff voices",
          href: P,
          note: "One artefact representing the perspectives of teaching and support staff. Should give CIS evaluators insight into how staff experience and embody the school's guiding principles in their daily work. Maximum three minutes or one page.",
        },
        {
          label: "Leaders — Head of School and senior leadership voices",
          href: P,
          note: "One artefact from the school's leadership team. Should reflect the leadership's understanding of the school's guiding principles and how they shape decision-making and school culture. Maximum three minutes or one page.",
        },
        {
          label: "Governors / owners — board and ownership voices",
          href: P,
          note: "One artefact from the governing body and/or owners of the school. Should demonstrate how those responsible for governance understand and uphold the school's guiding principles. Maximum three minutes or one page.",
        },
        {
          label: "Parents — parent community voices",
          href: P,
          note: "One artefact representing the parent community's experience of Woodcreek School. Should reflect how parents understand and are affected by the school's guiding principles. Maximum three minutes or one page.",
        },
        {
          label: "Alumni — voices of former students (if available)",
          href: P,
          note: "One artefact from former students of Woodcreek School, if available. Should show how the school's guiding principles have had a lasting impact on graduates. If no alumni artefact is available, a brief written note explaining this is sufficient. Maximum three minutes or one page.",
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
          href: P,
          note: "A concise written statement (maximum 200 words) addressing four questions: (1) How does Woodcreek regularly collect data across learning and achievement, community perception, critical incidents, and well-being? (2) How does the school ensure data collection and analysis is ethical, including any use of AI tools? (3) How and when is gathered data shared with the community? (4) How do leadership, governors, and owners use this data to make decisions about the school's future?",
        },
        {
          label: "C.2a Admissions and attrition data — last three years by Key Stage",
          href: P,
          note: "Student admissions and attrition data covering the last three academic years. Enrolment data should show number of applications, acceptances, and students who enrolled, broken down by school division. Inclusion data should show any admissions related to students with specific learning needs. Attrition data should show total students who left, with reasons (relocation, financial, illness, not invited to re-enrol, other). Trends should be highlighted with brief contextual notes.",
        },
        {
          label: "C.2b Holistic learner data — academic achievement, holistic achievement, well-being",
          href: P,
          note: "Learner data for the last three years across three categories. Academic achievement: results from external assessments such as IGCSE, A Level, Cambridge Checkpoint, MAP, ISA, or equivalent standardised tests. Holistic achievement: participation and recognition in sport, the arts, technology, debate, service learning, environmental initiatives, or similar. Well-being: trends in data related to student conduct, pastoral referrals, personal or mental health support, and social-emotional development.",
        },
        {
          label: "C.3a Educator data — anonymised staff profile, qualifications, and retention (last three years)",
          href: P,
          note: "Anonymised data for all teaching and administration staff over the last three years. Includes role, relevant qualifications, and length of service for each staff member. Also includes the number of staff who left, with reasons for departure categorised as: relocation, personal or family reasons, not retained by the school, or other. All identifying information must be removed.",
        },
        {
          label: "C.3b Support staff and contractors data — anonymised, last three years",
          href: P,
          note: "Anonymised data for all non-teaching staff and contractors over the last three years. Includes role, relevant qualifications, and length of service. Covers staff who left (with reasons) and contractors or vendors not on employment contracts, with their role types and numbers. All identifying information must be removed.",
        },
        {
          label: "C.4a Community perception data — approach and recent examples",
          href: P,
          note: "An explanation of how Woodcreek systematically collects community perception data, including the tools used, frequency, and how results are analysed and fed back to the community. Includes one or two recent examples of community perception data collected to understand school climate, community satisfaction, or other relevant indicators.",
        },
        {
          label: "C.4b CIS Community Survey — administration overview, gap analysis, strengths, opportunities, and action plan",
          href: P,
          note: "Required for schools with a Preparatory Engagement Visit in July 2026 or later (Woodcreek's PEV is September 2026, so this is required). Provides a full analysis of the CIS Community Survey results covering five areas: (1) overview of how the survey was administered (tools, response rates, timeframes, any language adaptations); (2) gap analysis identifying differences in perceptions between community groups; (3) significant strengths identified, referenced to relevant CIS standards or Cornerstone Expectations; (4) opportunities for improvement, referenced to standards; (5) actions already taken or planned, and insights relevant to potential Development Initiatives for the self-study.",
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
          note: "A succinct written reflection (maximum 300 words) addressing the five CIS questions: (1) What are our primary goals for this accreditation journey and how do they align with our school's purpose and guiding principles? (2) How do we envision the accreditation process impacting our community's well-being and learning environment? (3) What challenges do we foresee? (4) What benefits do we hope to gain and what will a successful process look like for our community? (5) What do we hope to learn from this accreditation journey?",
        },
        {
          label: "Leadership insights video — Head of School and Director (optional)",
          href: P,
          note: "An optional multimedia alternative or supplement to the written reflection. May be a brief recorded video, a recorded conversation between the Head of School and Director, or a narrated slide deck. If a video is provided, a written transcript must accompany it. Maximum three minutes.",
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
          href: P,
          note: "The school's formal mission statement and/or vision statement. These are the foundational guiding statements that articulate why Woodcreek School exists and what it aspires to achieve. Should be the current, governance-approved version.",
        },
        {
          label: "Guiding principles — values, beliefs, and related graphic representations",
          href: P,
          note: "The school's articulated values and beliefs in any form — written statements, definitions, posters, or graphic representations. These should collectively address the seven areas CIS expects: global citizenship; leadership and governance; high-quality learning and teaching; safeguarding; well-being and inclusion; ethical and safer human resources; and any values unique to Woodcreek. May include the school's published values document, a visual values framework, or equivalent materials.",
        },
        {
          label: "Evidence of guiding principles embedded across school programmes and operations",
          href: P,
          note: "Concrete evidence showing that the school's guiding principles are actively embedded — not just documented — across Woodcreek's programmes and day-to-day operations. Examples include curriculum plans that reference the principles, staff induction materials, student handbooks, assembly themes, or communications that demonstrate the principles in action.",
        },
        {
          label: "Process and schedule for regular review of guiding statements",
          href: P,
          note: "Documentation showing that Woodcreek has a defined process and schedule for reviewing its mission, vision, and guiding principles on a regular basis. Should show when reviews occur, who is involved (governors, leadership, staff, community), and how the results of reviews are acted upon and communicated.",
        },
        {
          label: "Woodcreek learner profile — description of the school's ideal graduate",
          href: P,
          note: "A statement, description, or profile articulating the kind of learner Woodcreek aims to develop. This should describe the intellectual, emotional, and social attributes a student will have developed as a result of the school's programmes, and define aspirations for learners during and after their time at the school. Should address: who the learner is, how they will conduct themselves, and how they will make an impact on others and the wider world.",
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
          label: "Purpose self-assessment narrative (max 150 words) — strengths and areas for development",
          href: P,
          note: "A concise written reflection (maximum 150 words) that: (1) states the chosen Documentation status and Implementation status from the CIS fixed menus; (2) identifies significant strengths in the school's documentation and implementation of the Purpose Cornerstone; and (3) identifies significant areas for further development. Plain language, written for evaluators who may not be native English speakers.",
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
          note: "A clear visual chart describing the full governance and leadership structure of Woodcreek School. Shows the relationship between the ownership, governing body, Head of School, senior leadership, middle leadership, and other key roles. Should be current and governance-approved.",
        },
        {
          label: "C2 Role profiles / job descriptions — key governance, leadership, pastoral, and educational roles",
          href: P,
          note: "Defined and documented role profiles or job descriptions for all key roles at Woodcreek, including governance roles (e.g. Chair of Governors), leadership roles (e.g. Head of School, Deputy Head, Heads of Department), pastoral roles (e.g. Head of Year, Form Tutor), and core educational roles (e.g. class teacher, learning support coordinator). Each profile should clearly describe responsibilities, reporting lines, and required qualifications.",
        },
        {
          label: "C3 Anonymised staff list — all staff with roles and qualifications",
          href: P,
          note: "A complete anonymised list of all staff currently employed at Woodcreek School, showing each person's role, relevant qualifications, and length of service. All personally identifying information (names, ID numbers) must be removed before sharing with CIS evaluators.",
        },
        {
          label: "C4 Human resources documentation — safer recruitment policy and sample staff contract",
          href: P,
          note: "HR documentation covering two areas: (1) the school's safer recruitment policy and associated procedures, demonstrating that Woodcreek follows safe hiring practices including background checks and reference verification; and (2) a sample staff employment contract (anonymised or redacted) showing the standard terms and conditions under which staff are employed.",
        },
        {
          label: "C5 Performance evaluation system — appraisal policy and procedures",
          href: P,
          note: "Documentation of Woodcreek's system for evaluating staff performance. Should include the appraisal policy, the frequency and format of appraisals, who conducts them, how outcomes are used for professional development, and how the system applies to all staff categories including senior leadership.",
        },
        {
          label: "C6 Communication agreements — staff, parents, and students",
          href: P,
          note: "The school's established communication agreements for all three groups: staff (e.g. staff communication protocols, meeting structures, response time expectations), parents (e.g. home-school communication policy, parent portal guidelines, response expectations), and students (e.g. student communication norms, acceptable use of digital tools). These agreements ensure communication across the school is guided, consistent, and ethical.",
        },
        {
          label: "D1 Governance by-laws and statutes — board composition, succession planning, governance self-evaluation, and Head of School evaluation",
          href: P,
          note: "All governance-level by-laws, statutes, or policy documents covering: the composition of the governing body (how members are appointed, terms of service, quorum requirements); succession planning for governance and leadership roles; the process by which the governing body evaluates its own effectiveness; and the process by which the governing body evaluates the performance of the Head of School.",
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
          note: "The current academic calendar(s) for all school divisions, showing term dates, holiday periods, key assessment windows, and whole-school events. Demonstrates structured planning of the school year aligned with the school's guiding principles and operational requirements.",
        },
        {
          label: "Anti-discrimination and equity policy",
          href: P,
          note: "The governance-approved policy setting out Woodcreek's commitment to non-discrimination and equity across all aspects of school life — admissions, employment, curriculum delivery, pastoral care, and community engagement. Should reference applicable Kenyan law and CIS Code of Ethics commitments.",
        },
        {
          label: "Code of conduct / ethics — adults and students",
          href: P,
          note: "Separate or combined codes of conduct setting out expected behaviours and ethical standards for adults (staff, governors, contractors, volunteers) and students. Should be aligned with the school's guiding principles and reference consequences for non-compliance.",
        },
        {
          label: "Communication policy",
          href: P,
          note: "The governance-approved policy governing how the school communicates internally and externally — covering staff-to-staff, staff-to-parents, staff-to-students, and school-to-community communications. Includes expectations around digital communication, social media, and response timeframes.",
        },
        {
          label: "Evidence of systematic and regular review of policy, procedure, and programmes",
          href: P,
          note: "Documentation demonstrating that Woodcreek has a structured, school-wide system for reviewing its policies, procedures, and programmes on a regular cycle. May include a policy review schedule, minutes from governance meetings where policies were reviewed and approved, or a policy log showing review dates and responsible owners.",
        },
        {
          label: "Facilities planning policy",
          href: P,
          note: "The governance-approved policy for planning, maintaining, and developing the school's physical facilities — buildings, grounds, and infrastructure. Should address medium-to-long-term facilities planning, health and safety considerations, and how facilities decisions support the school's guiding principles and educational programmes.",
        },
        {
          label: "Financial management and procurement policy",
          href: P,
          note: "The governance-approved policy covering how Woodcreek manages its finances and procurement processes. Should address budgeting, financial controls, authorisation levels, procurement procedures, anti-fraud measures, and how financial decisions align with the school's strategic priorities.",
        },
        {
          label: "Grievances and whistleblowing policy",
          href: P,
          note: "The governance-approved policy setting out processes for staff, students, parents, and other community members to raise grievances or report concerns — including concerns about wrongdoing or unethical behaviour. Should cover how complaints are received, investigated, escalated, and resolved, and how the school protects those who raise concerns in good faith.",
        },
        {
          label: "Language / mother tongue policy",
          href: P,
          note: "The school's policy on the language(s) of instruction and its approach to supporting students' home languages and mother tongue development. Should address how Woodcreek values linguistic diversity, supports multilingual learners, and provides access to mother tongue language instruction or support where applicable.",
        },
        {
          label: "Performance evaluation policy",
          href: P,
          note: "The governance-approved policy outlining the school's approach to evaluating the performance of all staff, including teaching staff, support staff, and senior leaders. Should cover the purpose of performance evaluation, the cycle and format of appraisals, how professional development goals are set and reviewed, and how the policy applies equitably across all staff groups.",
        },
        {
          label: "Policy manual — full set of governance-approved policies",
          href: P,
          note: "The complete, current policy manual containing all governance-approved policies for Woodcreek School. Should be clearly indexed with policy names, version numbers, approval dates, and scheduled review dates. CIS evaluators use this to verify that the school has a comprehensive, up-to-date policy framework. Include a direct link or page reference for any specific policy cited elsewhere in the portfolio.",
        },
        {
          label: "Safer recruitment policy and procedures",
          href: P,
          note: "The policy and associated procedures governing safe hiring practices at Woodcreek. Should cover criminal background checks (DBS or equivalent), reference verification, identity checks, prohibition checks, and how the school manages staff who work with children and young people. Should be aligned with Kenyan legal requirements and international best practice.",
        },
        {
          label: "Safeguarding and child protection policy",
          href: P,
          note: "The governance-approved safeguarding and child protection policy, setting out the school's commitment to the safety and welfare of all students. Should name the Designated Safeguarding Lead(s), define reporting procedures, reference relevant Kenyan legislation, and describe how the policy is communicated to all staff, students, and parents.",
        },
        {
          label: "Planned resources and technologies — whole-school operational systems",
          href: P,
          note: "An overview of the digital platforms, management information systems, and technologies used to support whole-school operations — such as the student information system, finance system, communication platform, and HR system. Should indicate which systems are in use, their purpose, and any planned changes or upgrades.",
        },
        {
          label: "Staff handbook — operational procedures for whole-school guiding principle systems",
          href: P,
          note: "The operational procedures layer that supports Dimension 1 policies in practice. The staff handbook (or equivalent operational guide) translates governance-approved policies into day-to-day procedures for staff — covering how policies are implemented, who is responsible, and what staff are expected to do in specific situations. This is the 'how we do things here' document that sits alongside the 'what we expect' policy documents.",
        },
        {
          label: "Governance by-laws and statutes — see Practices: Organisation of People and Staffing (D1)",
          href: P,
          note: "Cross-reference only. The primary evidence for governance by-laws and statutes is filed under Practices — Organisation of People and Staffing (D1). This entry ensures evaluators reviewing Dimension 1 can locate that evidence without it needing to be duplicated.",
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
          href: P,
          note: "The governance-approved policy setting out expectations for student behaviour and the school's approach to managing conduct. Should cover the positive behaviour framework, consequences for misconduct, procedures for serious incidents (including suspension and exclusion), restorative practices, and how the policy is communicated to students, parents, and staff.",
        },
        {
          label: "Crisis, risk, and critical incident management policy",
          href: P,
          note: "The governance-approved policy and associated procedures for managing crises, risks, and critical incidents at Woodcreek. Should cover the risk assessment process, categories of critical incident, roles and responsibilities in an emergency, communication protocols during a crisis, and business continuity planning.",
        },
        {
          label: "Data security policy — including ethical use of data",
          href: P,
          note: "The governance-approved policy covering how Woodcreek collects, stores, uses, shares, and protects personal and sensitive data about students, staff, and the wider community. Should address compliance with applicable data protection law in Kenya, the ethical use of data (including any use of AI or third-party analytics tools), data breach procedures, and staff training obligations.",
        },
        {
          label: "Digital citizenship and online safety policy",
          href: P,
          note: "The governance-approved policy setting out the school's approach to digital citizenship education and online safety for students and staff. Should cover acceptable use of devices and the internet, social media guidelines, cyberbullying, age-appropriate content filters, and how the school educates the community about responsible digital behaviour.",
        },
        {
          label: "Facilities management policy — including lab safety, document storage, and examination storage",
          href: P,
          note: "The policy governing the day-to-day management and maintenance of school facilities. For schools with science laboratories, this includes laboratory safety procedures. Also covers secure document storage (student records, HR files) and secure examination storage and invigilation procedures, as required by CIS for schools running external examinations such as IGCSE or A Level.",
        },
        {
          label: "Health, safety, and security policy",
          href: P,
          note: "The governance-approved policy covering the physical health, safety, and security of all members of the school community. Should address risk assessments, first aid provision, fire safety and evacuation procedures, visitor management and site security, and how the school meets applicable health and safety regulations in Kenya.",
        },
        {
          label: "Human resource management policy",
          href: P,
          note: "The governance-approved policy covering the full employment lifecycle for Woodcreek staff — from recruitment through induction, professional development, performance management, leave, disciplinary processes, and exit. Should be consistent with Kenyan employment law and reflect the school's commitment to the ethical treatment of its people.",
        },
        {
          label: "Recruitment and retention policy",
          href: P,
          note: "The governance-approved policy covering how Woodcreek attracts, recruits, and retains staff. Should address the school's approach to equitable recruitment, compensation and benefits, staff well-being, professional development as a retention tool, and succession planning for key roles.",
        },
        {
          label: "Student support services policy — well-being, social-emotional, and pastoral",
          href: P,
          note: "The governance-approved policy covering the provision of pastoral care, social-emotional support, and mental health and well-being services for students. Should describe the school's pastoral structure, how students access support, the role of the school counsellor or equivalent, referral pathways, and how the school works with external agencies when additional support is needed.",
        },
        {
          label: "Sustainability policy",
          href: P,
          note: "The governance-approved policy setting out Woodcreek's commitment to environmental sustainability and responsible stewardship of resources. Should cover energy and water use, waste reduction, procurement decisions, curriculum links to sustainability, and any whole-school sustainability initiatives or targets.",
        },
        {
          label: "Appropriate and ethical use of technology policy — including artificial intelligence",
          href: P,
          note: "The governance-approved policy covering the appropriate and ethical use of technology across the school community — including students, staff, and governors. Specifically addresses the use of artificial intelligence tools (generative AI, AI-assisted assessment, data analytics) in line with the school's academic integrity commitments and data protection obligations.",
        },
        {
          label: "Boarding / residential programme policy",
          href: P,
          note: "The governance-approved policy for any boarding or residential programme operated by Woodcreek School. Covers the unique safeguarding, well-being, and operational requirements of residential learners. If Woodcreek does not operate a boarding or residential programme, this item should be marked not applicable with a brief written explanation.",
        },
        {
          label: "Planned resources and technologies — well-being systems",
          href: P,
          note: "An overview of the platforms, tools, and technologies used to support well-being across the school — such as student well-being tracking tools, mental health referral systems, counselling management platforms, or anonymous reporting tools. Should indicate current systems in use and any planned developments.",
        },
        {
          label: "Well-being operational procedures — e.g. pastoral care handbook or student support manual",
          href: P,
          note: "The operational procedures document that translates Dimension 2 policies into day-to-day practice for staff. This may be a pastoral care handbook, student support manual, or equivalent. Describes how staff implement well-being policies — covering specific procedures for common situations such as a student disclosing a concern, a mental health referral, a behavioural incident, or an emergency.",
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
          href: P,
          note: "The governance-approved policy setting out Woodcreek's expectations for academic honesty across all year groups and programmes. Explicitly addresses the ethical use of technology and artificial intelligence in academic work — including what constitutes academic misconduct involving AI tools, how the school detects and responds to violations, and how academic integrity is taught as part of the curriculum.",
        },
        {
          label: "Admissions and enrolment policy",
          href: P,
          note: "The governance-approved policy covering how Woodcreek admits and enrols students. Should address entry criteria for each division, the application and assessment process, waiting list management, how the school meets its inclusion obligations, and any conditions attached to enrolment or re-enrolment.",
        },
        {
          label: "Assessment, recording, and reporting policy",
          href: P,
          note: "The governance-approved policy covering how Woodcreek assesses student learning, records assessment data, and reports progress to students and parents. Should address the balance of formative and summative assessment, marking and feedback practices, the use of assessment data to inform teaching, and the format and frequency of reports to parents.",
        },
        {
          label: "Curriculum policy and documentation — all programmes and school divisions",
          href: P,
          note: "Curriculum policy and supporting documentation for all programmes delivered across all school divisions — Early Years through Sixth Form. Should include the overarching curriculum policy (rationale, principles, scope, and structure) and supporting documentation such as curriculum maps, schemes of work, or programme guides that demonstrate coherent, documented provision across all year groups and subjects.",
        },
        {
          label: "Inclusion policy — access to learning",
          href: P,
          note: "The governance-approved policy setting out Woodcreek's commitment to inclusive education and ensuring all students have equitable access to learning. Should address identification and assessment of additional learning needs, the provision of learning support, differentiation and adaptive teaching, English as an Additional Language (EAL) support, and the school's approach to gifted and talented learners.",
        },
        {
          label: "Learning and teaching policy",
          href: P,
          note: "The governance-approved policy articulating Woodcreek's shared vision and expectations for high-quality learning and teaching. Should describe the pedagogical principles that underpin teaching across the school, expectations for lesson planning and delivery, approaches to student engagement and agency, and how the policy is embedded in CPD and appraisal.",
        },
        {
          label: "Parent engagement and partnerships for learning policy",
          href: P,
          note: "The governance-approved policy covering how Woodcreek engages parents as partners in their children's learning. Should address how the school communicates student progress, involves parents in school life, responds to parent input, and supports parents in supporting learning at home.",
        },
        {
          label: "Professional learning and growth policy",
          href: P,
          note: "The governance-approved policy covering how Woodcreek supports the ongoing professional learning and development of all staff. Should address the school's CPD framework, entitlement for all staff, how professional learning is linked to school improvement priorities and individual appraisal goals, and how the school measures the impact of professional learning on student outcomes.",
        },
        {
          label: "Student support services policy — learning support",
          href: P,
          note: "The governance-approved policy covering the provision of learning support for students who require additional assistance to access the curriculum. Distinct from the well-being student support policy (Dimension 2), this focuses specifically on academic learning support — including assessment, intervention, specialist provision, and coordination with classroom teachers and parents.",
        },
        {
          label: "Time and space planning — timetables, instructional time, and learning schedules",
          href: P,
          note: "Documentation of how Woodcreek plans and organises the school day and week to maximise learning time. Includes current timetables or timetable frameworks for each division, instructional time allocations per subject or learning area, and how the physical learning environment (classrooms, specialist spaces) is planned and allocated.",
        },
        {
          label: "Transitions policy — between school sections and on exit",
          href: P,
          note: "The governance-approved policy covering how Woodcreek supports students through transitions — between year groups, between school divisions (e.g. Primary to Secondary), and on exit from the school (e.g. progression to university, international relocation). Should address how student data and records are transferred, induction processes, and pastoral support during transition periods.",
        },
        {
          label: "Homework policy",
          href: P,
          note: "The governance-approved policy setting out the school's approach to homework across all year groups. Should address the purpose of homework, expected time allocations by year group, how homework is set and monitored, and how the policy balances academic challenge with student well-being.",
        },
        {
          label: "Examinations policy",
          href: P,
          note: "The governance-approved policy covering all aspects of examination administration at Woodcreek, including internal and external examinations (e.g. IGCSE, A Level). Should address examination preparation, invigilation standards, access arrangements for students with additional needs, examination security, results handling, and appeals procedures.",
        },
        {
          label: "Educational visits and off-site learning policy",
          href: P,
          note: "The governance-approved policy covering all off-site educational activities — day trips, residential visits, overseas expeditions, and work experience placements. Should address the approval process, risk assessment requirements, supervision ratios, parental consent, emergency procedures, and how educational visits are linked to curriculum outcomes.",
        },
        {
          label: "Planned resources and technologies — learning systems",
          href: P,
          note: "An overview of the digital platforms, learning management systems, and educational technologies used to support learning and teaching at Woodcreek — such as the LMS, assessment platforms, student portfolios, or adaptive learning tools. Should indicate current systems in use, how they are integrated into teaching and learning, and any planned developments.",
        },
        {
          label: "Learning and teaching operational procedures — e.g. teacher handbook or curriculum guidelines manual",
          href: P,
          note: "The operational procedures document that translates Dimension 3 policies into day-to-day practice for teaching staff. This may be a teacher handbook, curriculum guidelines manual, or equivalent. Describes specific procedures for lesson planning, assessment and feedback, reporting to parents, managing learning support in the classroom, and other routine teaching and learning processes.",
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
          note: "A single concise written reflection (maximum 150 words) covering all three Dimensions of Practices. States the chosen Documentation status and Implementation status from the CIS fixed menus. Identifies significant strengths in the school's documentation and implementation of its Practices — covering how guiding principles are embedded, how well-being is fostered, and how learning is advanced. Also identifies significant areas for further development across the three Dimensions.",
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
          href: P,
          note: "The school's current governance-approved strategic plan, or equivalent long-term planning document. Should articulate the school's strategic priorities, goals, and intended outcomes over a defined planning horizon (typically three to five years). Should show alignment with the school's purpose and guiding principles.",
        },
        {
          label: "E2 Medium-to-long-term planning for physical and digital premises",
          href: P,
          note: "Documentation of the school's plans for maintaining and improving its physical buildings, grounds, and digital infrastructure over the medium to long term. Should be linked to the strategic plan and show how planned investments in premises support the school's educational goals.",
        },
        {
          label: "E3 Implementation and action plans — accompanying the strategic plan",
          href: P,
          note: "The operational action plans or implementation plans that accompany the strategic plan, showing how strategic priorities are translated into specific actions, timelines, responsible parties, and measurable milestones. Demonstrates that the school moves from planning to action in a structured and accountable way.",
        },
        {
          label: "E4 Evidence of regular, holistic data collection and analysis informing planning",
          href: P,
          note: "Evidence demonstrating that Woodcreek's strategic planning is informed by regular, holistic data collection and analysis across multiple areas — including student outcomes, community perception, HR data, and financial performance. May include data dashboards, board reports, strategic review summaries, or similar documents that show data being used to drive planning decisions.",
        },
        {
          label: "E5 Evidence of systematic policy and procedural review",
          href: P,
          note: "Documentation showing that the school's policies and procedures are reviewed on a systematic, scheduled basis. May include a policy review log, governance meeting minutes confirming policy approvals, or a whole-school review schedule. Cross-references the evidence provided under Dimension 1 (systematic review of policy, procedure, and programmes).",
        },
        {
          label: "E6 Strategic updates since current plan — board or community reports on progress",
          href: P,
          note: "Reports or updates produced since the current strategic plan was adopted that show how the school is tracking against its strategic goals. May include board reports, community newsletters, annual reports, or strategic review summaries. Demonstrates that the strategic plan is a living document that is monitored and updated regularly.",
        },
        {
          label: "F1 Board financial policy — RESTRICTED",
          href: P,
          note: "RESTRICTED — shared with CIS IAA and IAC only. The governance-approved policy governing the school's overall approach to financial management — covering financial oversight responsibilities of the board, financial controls, delegation of authority, and how financial decisions are made and approved at governance level.",
        },
        {
          label: "F2 Documented financial procedures — RESTRICTED",
          href: P,
          note: "RESTRICTED — shared with CIS IAA and IAC only. The documented operational procedures for financial management at Woodcreek, showing how the board's financial policy is implemented in practice. Covers day-to-day financial processes such as budgeting, purchasing, payroll, banking, and financial reporting.",
        },
        {
          label: "F3 Medium-to-long-term financial projections aligned with strategic plan — RESTRICTED",
          href: P,
          note: "RESTRICTED — shared with CIS IAA and IAC only. Financial projections or forecasts covering the medium to long term (typically three to five years), showing how Woodcreek's financial position is expected to develop in line with its strategic plan. Should demonstrate that the school is financially sustainable and that strategic investments are affordable.",
        },
        {
          label: "F4 Risk management policies and processes — RESTRICTED",
          href: P,
          note: "RESTRICTED — shared with CIS IAA and IAC only. The school's risk management policy and associated processes, covering how Woodcreek identifies, assesses, and mitigates financial and operational risks. May include a risk register, contingency funding arrangements, insurance coverage summary, and the school's approach to crisis and business continuity planning.",
        },
        {
          label: "F5 SWOT analysis — or equivalent contextual analysis of school stability — RESTRICTED",
          href: P,
          note: "RESTRICTED — shared with CIS IAA and IAC only. A current SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) or equivalent contextual analysis of the school's overall stability and outlook. Should be recent and honest, reflecting the school's actual position. Used by CIS to assess the long-term viability and sustainability of the school.",
        },
        {
          label: "F6 CIS Financial Template or equivalent financial overview — RESTRICTED",
          href: P,
          note: "RESTRICTED — shared with CIS IAA and IAC only. The completed CIS Financial Template (available on the CIS Community Portal), or an equivalent financial overview such as budget versus actuals or profit and loss statements for the last two to three years. Provides CIS with a standardised snapshot of the school's financial position.",
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
          label: "Planning self-assessment narrative (max 150 words) — strengths and areas for development",
          href: P,
          note: "A concise written reflection (maximum 150 words) that: (1) states the chosen Documentation status and Implementation status from the CIS fixed menus; (2) identifies significant strengths in the school's documentation and implementation of the Planning Cornerstone — covering strategic planning, financial sustainability, and data-driven review processes; and (3) identifies significant areas for further development.",
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