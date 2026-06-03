// Single source of truth for the portfolio structure.
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

const P = "#"; // placeholder link

export const part1: Section = {
  id: "part-1",
  number: "Part 1",
  title: "Learning Community Profile",
  intro:
    "An introduction to Woodcreek School: who we are, the community we serve, the data that describes us, and the perspectives of those who lead our learning community. Prepared in accordance with the CIS Portfolio Guide (Part 1, pages 8–15).",
  subsections: [
    {
      id: "school-context",
      title: "A. School Context",
      description:
        "An overview of Woodcreek School's history, mission and guiding statements, governance and ownership, and the full programme offering from Early Years through Sixth Form, set within the Kenyan and international context in which we operate.",
      links: [
        { label: "School context narrative", href: P },
        { label: "Mission, vision and guiding statements", href: P },
        { label: "Governance and ownership structure", href: P },
        { label: "Programmes and curriculum overview — EY, KS1, KS2, JHS, SHS, Sixth Form", href: P },
        { label: "Accreditation and external affiliations", href: P },
      ],
    },
    {
      id: "community-voices",
      title: "B. Community Voices Showcase",
      description:
        "Short artefacts in the words of our community. One artefact per group (maximum three minutes of video or one page of text), drawn from the six community groups identified by CIS.",
      links: [
        { label: "Student voices", href: P },
        { label: "Parent voices", href: P },
        { label: "Teaching staff voices", href: P },
        { label: "Support staff voices", href: P },
        { label: "Leadership voices", href: P },
        { label: "Governance / owners voices", href: P },
      ],
    },
    {
      id: "community-data",
      title: "C. Community Data",
      description:
        "Contextual, learner, human resources and community perception data that together describe the Woodcreek learning community. All data is presented in anonymised form in line with the CIS data protection expectations.",
      links: [
        { label: "C.1 Contextual data — enrolment, nationalities, languages, location", href: P },
        { label: "C.2 Learner data — attainment, progress, destinations, attendance", href: P },
        { label: "C.3 Human resources data — anonymised staff profile, qualifications, retention", href: P },
        { label: "C.4 Community perception data — student, parent and staff survey results", href: P },
      ],
    },
    {
      id: "leadership-insights",
      title: "D. Leadership Insights",
      description:
        "Reflections from school leadership on Woodcreek's current strengths and areas for development, what we expect from the accreditation process, and what we hope to learn through the cycle. Presented in both written and short video form.",
      links: [
        { label: "Leadership reflection — written response to the five CIS questions", href: P },
        { label: "Leadership insights video", href: P },
      ],
    },
  ],
};

export const part2: Section = {
  id: "part-2",
  number: "Part 2",
  title: "Cornerstone Expectations",
  intro:
    "Woodcreek School's reflection against the three CIS Cornerstones — Purpose, Practices and Planning — with hyperlinked evidence drawn from across the school. Each Cornerstone is accompanied by a 150-word self-assessment narrative as required by the CIS Portfolio Guide (pages 17–21).",
  subsections: [
    {
      id: "purpose",
      title: "1. Purpose",
      description:
        "Evidence that Woodcreek's guiding statements are clearly defined, widely understood, regularly reviewed, and consistently lived out across the community.",
      links: [
        { label: "Guiding statements — mission, vision, values", href: P },
        { label: "Process and schedule for review of guiding statements", href: P },
        { label: "Evidence of community awareness and engagement with guiding statements", href: P },
        { label: "Examples of guiding statements in practice across the school", href: P },
        { label: "Self-assessment narrative — Purpose (150 words)", href: P },
      ],
    },
    {
      id: "practices-d1",
      title: "2. Practices — Dimension 1: Building Community",
      description:
        "Policies and day-to-day practices through which Woodcreek builds an inclusive, respectful and culturally responsive community. Evidence covers admissions, community engagement, partnership with parents, communications, and diversity, equity, inclusion and belonging.",
      links: [
        { label: "Admissions policy", href: P },
        { label: "Parent partnership and community engagement policy", href: P },
        { label: "Diversity, equity, inclusion and belonging (DEIB) policy", href: P },
        { label: "Communications policy", href: P },
        { label: "Code of conduct — students, staff, parents", href: P },
        { label: "Calendar of community events", href: P },
        { label: "Information systems supporting community (MIS, LMS)", href: P },
      ],
    },
    {
      id: "practices-d2",
      title: "2. Practices — Dimension 2: Fostering Well-being",
      description:
        "Policies and practices that protect, support and promote the well-being of every member of the Woodcreek community. Includes the full safeguarding suite together with health, behaviour, digital and pastoral provision.",
      links: [
        { label: "Child protection and safeguarding policy", href: P },
        { label: "Anti-bullying policy", href: P },
        { label: "Behaviour and discipline policy", href: P },
        { label: "Attendance policy", href: P },
        { label: "Exclusions policy", href: P },
        { label: "Counselling and well-being policy", href: P },
        { label: "Health and safety policy", href: P },
        { label: "Medical and first aid policy", href: P },
        { label: "Crisis management and emergency response plan", href: P },
        { label: "Digital citizenship policy", href: P },
        { label: "Appropriate use of technology — including artificial intelligence", href: P },
        { label: "Data protection and privacy policy", href: P },
        { label: "Boarding policy (where applicable)", href: P },
      ],
    },
    {
      id: "practices-d3",
      title: "2. Practices — Dimension 3: Advancing Learning",
      description:
        "Policies and practices that define teaching, learning and assessment at Woodcreek across all sections, together with the systems and structures that support continuous improvement of learning.",
      links: [
        { label: "Curriculum policy", href: P },
        { label: "Teaching and learning policy", href: P },
        { label: "Assessment, recording and reporting policy", href: P },
        { label: "Homework policy", href: P },
        { label: "Language policy", href: P },
        { label: "Inclusion policy", href: P },
        { label: "Student support and learning support policy", href: P },
        { label: "Gifted and talented / high-ability policy", href: P },
        { label: "Academic integrity policy", href: P },
        { label: "Examinations policy", href: P },
        { label: "Educational visits and off-site learning policy", href: P },
        { label: "Professional growth and appraisal policy", href: P },
        { label: "Transitions — between sections and on exit", href: P },
      ],
      // Note: 12 policies + transitions per the CIS Portfolio Guide (Dimension 3).
    },
    {
      id: "practices-self-assessment",
      title: "2. Practices — Self-Assessment",
      description:
        "A single 150-word self-assessment narrative covering the three Dimensions of Practices.",
      links: [
        { label: "Self-assessment narrative — Practices (150 words)", href: P },
      ],
    },
    {
      id: "planning",
      title: "3. Planning",
      description:
        "Evidence of how Woodcreek plans, resources, monitors and reviews its work, and how that planning is connected to our guiding statements. Covers strategic, operational, time and space, financial, and systematic policy review.",
      links: [
        { label: "Strategic plan and review cycle", href: P },
        { label: "Operational plans — by section and department", href: P },
        { label: "Time and space planning — timetables, calendars, facilities use", href: P },
        { label: "Financial and resource planning summary", href: P },
        { label: "Monitoring and evaluation framework", href: P },
        { label: "Sample data report informing planning", href: P },
        { label: "Evidence of systematic policy review (E5)", href: P },
        { label: "Self-assessment narrative — Planning (150 words)", href: P },
      ],
    },
  ],
};

export const part3: Section = {
  id: "part-3",
  number: "Part 3",
  title: "Learning Stories",
  intro:
    "Learning Stories are developed during the self-study phase of accreditation, with one story per Development Initiative. This Part will be completed in preparation for the Team Evaluation Visit and is not required for the Preparatory Engagement Visit.",
  subsections: [
    {
      id: "overview",
      title: "Overview",
      description:
        "Learning Stories will be added here as Development Initiatives are identified and progressed through the innovation cycle following the Preparatory Engagement Visit.",
      links: [],
    },
  ],
};

export const sections: Section[] = [part1, part2, part3];
