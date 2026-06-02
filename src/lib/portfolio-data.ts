// Single source of truth for the portfolio structure.
// Each `href` should be replaced with the corresponding Google Drive link.

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

const PLACEHOLDER = "#";

export const part1: Section = {
  id: "part-1",
  number: "Part 1",
  title: "Learning Community Profile",
  intro:
    "An introduction to Woodcreek School: who we are, the community we serve, the data that describes us, and the perspectives of those who lead our learning community.",
  subsections: [
    {
      id: "school-context",
      title: "A. School Context",
      description:
        "An overview of Woodcreek School's history, mission, governance, programmes from Early Years through Sixth Form, and the wider Kenyan and international context in which we operate.",
      links: [
        { label: "School context narrative", href: PLACEHOLDER },
        { label: "Mission, vision and guiding statements", href: PLACEHOLDER },
        { label: "Governance and ownership structure", href: PLACEHOLDER },
        { label: "Programmes and curriculum overview", href: PLACEHOLDER },
      ],
    },
    {
      id: "community-voices",
      title: "B. Community Voices Showcase",
      description:
        "Short artefacts in the words of our community — students, parents, teaching staff, support staff, leadership and governors — sharing what Woodcreek means to them.",
      links: [
        { label: "Student voices", href: PLACEHOLDER },
        { label: "Parent voices", href: PLACEHOLDER },
        { label: "Teaching staff voices", href: PLACEHOLDER },
        { label: "Support staff voices", href: PLACEHOLDER },
        { label: "Leadership voices", href: PLACEHOLDER },
        { label: "Governance voices", href: PLACEHOLDER },
      ],
    },
    {
      id: "community-data",
      title: "C. Community Data",
      description:
        "Contextual, learner, human resources and community perception data that describes our learning community.",
      links: [
        { label: "C.1 Contextual data", href: PLACEHOLDER },
        { label: "C.2 Learner data", href: PLACEHOLDER },
        { label: "C.3 Human resources data (anonymised)", href: PLACEHOLDER },
        { label: "C.4 Community perception data", href: PLACEHOLDER },
      ],
    },
    {
      id: "leadership-insights",
      title: "D. Leadership Insights",
      description:
        "Reflections from school leadership on Woodcreek's current strengths, areas for development, and what we hope to learn through the accreditation cycle.",
      links: [
        { label: "Leadership reflection (written)", href: PLACEHOLDER },
        { label: "Leadership insights video", href: PLACEHOLDER },
      ],
    },
  ],
};

export const part2: Section = {
  id: "part-2",
  number: "Part 2",
  title: "Cornerstone Expectations",
  intro:
    "Our reflection against the three CIS Cornerstones — Purpose, Practices and Planning — with evidence drawn from across the school.",
  subsections: [
    {
      id: "purpose",
      title: "1. Purpose",
      description:
        "Evidence that Woodcreek's guiding statements are clearly defined, widely understood, and consistently lived out across the community.",
      links: [
        { label: "Guiding statements and review process", href: PLACEHOLDER },
        { label: "Self-assessment narrative (150 words)", href: PLACEHOLDER },
        { label: "Supporting evidence files", href: PLACEHOLDER },
      ],
    },
    {
      id: "practices",
      title: "2. Practices",
      description:
        "Evidence of the policies, procedures and day-to-day practices that uphold our commitments across three Dimensions.",
      links: [
        { label: "Dimension 1 — Building Community", href: PLACEHOLDER },
        { label: "Dimension 2 — Fostering Well-being", href: PLACEHOLDER },
        { label: "Dimension 3 — Advancing Learning", href: PLACEHOLDER },
        { label: "Self-assessment narrative (150 words)", href: PLACEHOLDER },
      ],
    },
    {
      id: "planning",
      title: "3. Planning",
      description:
        "Evidence of how Woodcreek plans, resources, monitors and reviews its work — and how that planning connects back to our purpose.",
      links: [
        { label: "Strategic plan and review cycle", href: PLACEHOLDER },
        { label: "Operational and resource planning", href: PLACEHOLDER },
        { label: "Monitoring and evaluation evidence", href: PLACEHOLDER },
        { label: "Self-assessment narrative (150 words)", href: PLACEHOLDER },
      ],
    },
  ],
};

export const part3: Section = {
  id: "part-3",
  number: "Part 3",
  title: "Learning Stories",
  intro:
    "Learning Stories are developed during the self-study, with one story per Development Initiative. This section will be completed in preparation for the Team Evaluation Visit.",
  subsections: [
    {
      id: "overview",
      title: "Overview",
      description:
        "Learning Stories will be added here as Development Initiatives are identified and progressed through the innovation cycle.",
      links: [],
    },
  ],
};

export const sections: Section[] = [part1, part2, part3];
