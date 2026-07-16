// Single source of truth for the Woodcreek School CIS Accreditation Portfolio.
// Each `href` points to the document in the school's Google Drive.

export type EvidenceLink = {
  label: string;
  href: string;
  note?: string;
  /** When set, the link opens a gallery that lets you choose and preview each item. */
  items?: { label: string; href: string }[];
};

export type Subsection = {
  id: string;
  title: string;
  description: string;
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

const P = "#"; // document still to be added

// PART 1: LEARNING COMMUNITY PROFILE

export const part1: Section = {
  id: "part-1",
  number: "Part 1",
  title: "Learning Community Profile",
  intro:
    "An introduction to Woodcreek School as a learning community: who we are, the community we serve, the data that describes us, and the perspectives of those who lead the school.",
  subsections: [
    {
      id: "school-context",
      updated: "July 2026",
      title: "A. School Context",
      description:
        "Background that introduces Woodcreek School: our profile, learning programmes, the terms we use, our history, our ownership and leadership structure, and the regulatory environment we work within in Kenya.",
      links: [
        {
          label: "School Overview",
          href: "https://drive.google.com/file/d/1VlGHySOv1u9iasRNdEH2VVf4PRL-1A7J/view",
        },
        {
          label: "Learning Programmes",
          href: "https://drive.google.com/file/d/1c0L9WYx-G3ZOIjEQH8jPRbKK_UTCRxET/view",
        },
        {
          label: "School Glossary",
          href: "https://drive.google.com/file/d/1pdL_Mr4PGW9LUG1LPbteUjtU4lZ0L3_X/view",
        },
        {
          label: "School History",
          href: "https://drive.google.com/file/d/1dRwflchRAv6p-kUV1_wQSXLFboQqZy1d/view",
        },
        {
          label: "Summary of Actions from Previous Accreditation",
          href: "https://drive.google.com/file/d/19MvUCM4BJ88hp4Ul0_YAOrVFn4Sf39ZQ/view",
        },
        {
          label: "Governance and Ownership Structure",
          href: "https://drive.google.com/file/d/1JUrsYG8JefM1B4aR_4Yd838SoRSKy5is/view",
        },
        {
          label: "School Divisions Overview",
          href: "https://drive.google.com/file/d/1sAxo1v-lAiTHlCn0hWDuyd4ybQ_MFTiz/view",
        },
        {
          label: "Regulatory Environment",
          href: "https://drive.google.com/file/d/1VSbedpnuO_jEM8sQa4SPqzJlL08Pqjlc/view",
        },
        {
          label: "External Compliance Requirements",
          href: "https://drive.google.com/file/d/17lIZLacnVJ6nkmoWSTlW5kevGOurQ_tL/view",
        },
        {
          label: "Regulatory and Compliance Evidence",
          href: "https://drive.google.com/drive/folders/1Mhulfm9hIKnfKdRPerr0PDy4TCYUyNTm",
        },
        {
          label: "Embassy and Diplomatic Relationships",
          href: "https://drive.google.com/file/d/1ZH1kyR-bTVq2IeTRmMpexMAqAjR1jxfr/view",
        },
      ],
    },

    {
      id: "community-voices",
      updated: "July 2026",
      title: "B. Community Voices Showcase",
      description:
        "The authentic voices of our community, showing how Woodcreek's guiding principles are understood and lived by our learners, staff, leaders, parents, and alumni.",
      links: [
        {
          label: "Learners",
          href: "https://www.youtube.com/playlist?list=PLBRilMq0M96w https://www.youtube.com/playlist?list=PLYKdvgE62zQk",
        },
        {
          label: "Educators and Staff",
          href: "/media/Security%201.mp4",
          items: [
            { label: "Security", href: "/media/Security%201.mp4" },
            { label: "Support Staff", href: "/media/Support%20Staff.mp4" },
            { label: "Facilities (audio)", href: "/media/Facilities.aac" },
          ],
        },
        {
          label: "Leaders (Videos)",
          href: "https://www.youtube.com/playlist?list=PLX3fLfzHdidI",
        },
        {
          label: "Leaders (Documents)",
          href: "https://drive.google.com/file/d/14W8nveekfCeAsU1UJB4h-xEujhLowPbh/view",
          items: [
            {
              label: "Document 1",
              href: "https://drive.google.com/file/d/14W8nveekfCeAsU1UJB4h-xEujhLowPbh/view",
            },
            {
              label: "Document 2",
              href: "https://drive.google.com/file/d/1F8bSPHl41AYBbf9mv7nqY7534rBFo_t6/view",
            },
          ],
        },
        {
          label: "Owners and Directors",
          href: P,
        },
        {
          label: "Parents",
          href: "https://www.youtube.com/playlist?list=PLQFon3yxjM9E",
        },
        {
          label: "Alumni",
          href: "https://www.youtube.com/playlist?list=PLdVbZuSMirsU",
        },
      ],
    },

    {
      id: "community-data",
      updated: "July 2026",
      title: "C. Community Data",
      description:
        "Data that describes the Woodcreek community: how we collect it, what our learner data shows, our staffing profile, and how our community sees the school. All personal data is anonymised.",
      links: [
        {
          label: "C.1 Approach to Collecting Community Data",
          href: "https://drive.google.com/file/d/1SzaWyVOxhLL__K0I7s45qx8GVZjVs79_/view",
        },
        {
          label: "C.2a Admissions and Attrition Data",
          href: "https://drive.google.com/file/d/1Pjs3l2Zm4-7P1EJnSCtC5HMCLFtivJUz/view",
        },
        {
          label: "C.2b Holistic Learner Data",
          href: "https://drive.google.com/file/d/1PH7SCGTJKqEVxOjj-NRugquqSjxY9hLX/view",
        },
        {
          label: "C.3a Educator Data",
          href: "https://drive.google.com/file/d/1rme2uDZkpAHxOSWY1TAGDQIOE1DgxP7l/view",
        },
        {
          label: "C.3b Support Staff and Contractor Data",
          href: "https://drive.google.com/file/d/1rme2uDZkpAHxOSWY1TAGDQIOE1DgxP7l/view",
        },
        {
          label: "C.4a Community Perception Data",
          href: P,
        },
        {
          label: "C.4b CIS Community Survey",
          href: "https://drive.google.com/file/d/1d6EHYfDHgB6MoxDTR-Lncpc69N4QRpSR/view",
        },
      ],
    },

    {
      id: "leadership-insights",
      updated: "July 2026",
      title: "D. Leadership Insights",
      description:
        "A reflection from Woodcreek's leadership on our hopes and priorities for the accreditation journey, the difference it is expected to make for our community, and what we hope to learn.",
      links: [
        {
          label: "Leadership Reflection",
          href: P,
        },
        {
          label: "Leadership Insights Video",
          href: P,
        },
      ],
    },
  ],
};

// PART 2: CORNERSTONE EXPECTATIONS

export const part2: Section = {
  id: "part-2",
  number: "Part 2",
  title: "Cornerstone Expectations",
  intro:
    "Evidence of how Woodcreek School lives out the three areas at the heart of its work: Purpose, Practices, and Planning. Each area brings together the school's supporting documents and a short self-assessment.",
  subsections: [
    {
      id: "purpose",
      updated: "July 2026",
      title: "1. Purpose",
      description:
        "How Woodcreek states its purpose and guiding principles, and how these are lived out across the school's programmes and daily operations, including our description of the Woodcreek learner.",
      links: [
        {
          label: "Mission and Vision Statements",
          href: "https://drive.google.com/file/d/1EoA93rlqGdxlI4UUrbLJTNVUkDIY6KJ3/view",
        },
        {
          label: "Guiding Principles",
          href: "https://drive.google.com/file/d/1LUWB6uqFPTdvArAwW_08Hm1Bt40gVWLU/view",
        },
        {
          label: "Guiding Principles in Practice",
          href: "https://drive.google.com/file/d/1GS_hDjSVfXkV9vu-p_CItL0jagaKaAxU/view",
        },
        {
          label: "Review of Guiding Statements",
          href: "https://drive.google.com/file/d/10wAXQ5auoej4MGzRNi1SdZSeidDZ5JM7/view",
        },
        {
          label: "Woodcreek Learner Profile",
          href: "https://drive.google.com/file/d/17NoPa12VdQT-W4ucoqBTPIe3bbYPWnfS/view",
        },
      ],
    },

    {
      id: "purpose-self-assessment",
      updated: "July 2026",
      title: "1. Purpose Self-Assessment",
      description:
        "The school's own reflection on the strengths and areas for development in how our purpose and guiding principles are documented and put into practice.",
      links: [
        {
          label: "Purpose Self-Assessment",
          href: P,
        },
      ],
    },

    {
      id: "practices-organisation",
      updated: "July 2026",
      title: "2. Practices: Organisation of People and Staffing",
      description:
        "How Woodcreek is organised and how it supports its people. This section covers the school's structure, roles, human resources documents, staff appraisal, and communication agreements.",
      links: [
        {
          label: "C1 Organisational Chart",
          href: "https://drive.google.com/file/d/1D_U2mcjq-2JCQdv_RA8oZpWeJ0Yh_yuL/view",
        },
        {
          label: "C2 Role Profiles and Job Descriptions",
          href: "https://drive.google.com/file/d/1h-NoB9a3b86j35AV5Ah1dt_HJIJQ-BaJ/view",
        },
        {
          label: "C3 Staff List",
          href: "https://drive.google.com/file/d/1rme2uDZkpAHxOSWY1TAGDQIOE1DgxP7l/view",
        },
        {
          label: "C4 Human Resources Documentation: Safer Recruitment Policy",
          href: "https://drive.google.com/file/d/1nRZHQRLXadtBkNxteAtvU-uzh98en6qu/view",
        },
        {
          label: "C4 Human Resources Documentation: Sample Contract",
          href: "https://drive.google.com/file/d/1Q21uRFiBmW3awZXCeJ0lxdBt69nHTr3T/view",
        },
        {
          label: "C5 Performance Evaluation System",
          href: "https://drive.google.com/file/d/1XhXsh5ZvmCOXgO3pCui6ySr-rhjq50Js/view",
        },
        {
          label: "C6 Communication Agreements",
          href: "https://drive.google.com/file/d/1A80qQYs6WNOB0qydVKwu8cpS-qiL9ed8/view",
        },
        {
          label: "D1 Governance By-laws and Statutes",
          href: "https://drive.google.com/file/d/13Cqa9QORu8hKrqBb8WYw6N1clQ-KpgEo/view",
        },
      ],
    },

    {
      id: "practices-d1",
      updated: "July 2026",
      title: "2. Practices: Dimension 1, Embedding Guiding Principles",
      description:
        "The governance-approved policies and everyday procedures through which Woodcreek's guiding principles are embedded across the whole school.",
      links: [
        {
          label: "Academic Calendars",
          href: "https://drive.google.com/file/d/1vXGTb6wCMW8LJPIfqVqOPeCSXuUsq9X9/view",
        },
        {
          label: "Anti-Discrimination and Equity Policy",
          href: "https://drive.google.com/file/d/1Z2vQ-DYSDbfyzjm_25MugiEWagofMG0r/view",
        },
        {
          label: "Code of Conduct",
          href: "https://drive.google.com/file/d/1W4_DRvhlNZyq09FCyLboFqq6N-0kl8co/view",
        },
        {
          label: "Communication Policy",
          href: "https://drive.google.com/file/d/15pgyvFP0jB7ntxOwJc4b_xWaCwjAe_Pa/view",
        },
        {
          label: "Policy, Procedure and Programme Review",
          href: "https://drive.google.com/file/d/1PKYfEdPtaThcvFl_89ezpg5kL9KagbCa/view",
        },
        {
          label: "Facilities Planning Policy",
          href: "https://drive.google.com/file/d/11BjheC3XhwnMA34UEMnqBsWgmlV8GX12/view",
        },
        {
          label: "Financial Management and Procurement Policy",
          href: "https://drive.google.com/file/d/19rAeYFxuD4IBmCzSgbjks-ya0dg6-3mr/view",
        },
        {
          label: "Grievances and Whistleblowing Policy",
          href: "https://drive.google.com/file/d/1d0O4ZVeQWjiyjbWOdqd59WQ-lx4PPcQo/view",
        },
        {
          label: "Language Policy",
          href: "https://drive.google.com/file/d/1kCbD7fGxtMcscKqSJtgCFtkChduxHegp/view",
        },
        {
          label: "Performance Evaluation Policy",
          href: "https://drive.google.com/file/d/1DSBRLVrw-NgnvcQH1PkIk_rG6jEzUGhM/view",
        },
        {
          label: "Policy Manual",
          href: "https://drive.google.com/file/d/1jTanBMc0EosiBixzQs3LiYXgQ9tKptq3/view",
        },
        {
          label: "Safer Recruitment Policy",
          href: "https://drive.google.com/file/d/18X4cwZfnKe1GrLzYAMS3WaV8qTl3EWrg/view",
        },
        {
          label: "Safeguarding and Child Protection Policy",
          href: "https://drive.google.com/file/d/1pCYyQXT_A_ah68dQVZnz-qxxeCUr2mxm/view",
        },
        {
          label: "Planned Resources and Technologies (Whole-School)",
          href: "https://drive.google.com/file/d/1A5E5Nzh3643N_Ga_cJZrt2DYsCkD-R1p/view",
        },
        {
          label: "Staff Handbook",
          href: "https://drive.google.com/file/d/134hzDInaLjjjrIbYK7NpXzzdnWSNhk7v/view",
        },
        {
          label: "Governance By-laws and Statutes",
          href: "https://drive.google.com/file/d/13Cqa9QORu8hKrqBb8WYw6N1clQ-KpgEo/view",
        },
      ],
    },

    {
      id: "practices-d2",
      updated: "July 2026",
      title: "2. Practices: Dimension 2, Fostering Well-being",
      description:
        "The policies and procedures that make up Woodcreek's approach to the well-being of students and staff, covering safeguarding, health and safety, behaviour, digital safety, data, and sustainability.",
      links: [
        {
          label: "Behaviour and Student Conduct Policy",
          href: "https://drive.google.com/file/d/1ro-uFENHt1areFASO0IFcyryiRZrE0Z2/view",
        },
        {
          label: "Crisis, Risk and Critical Incident Management Policy",
          href: "https://drive.google.com/file/d/1L50m9IeU7bHL8cIRTMTOCLhGQkdvK1Ar/view",
        },
        {
          label: "Data Security Policy",
          href: "https://drive.google.com/file/d/1HzPfEkf-EovShm1jZ2bL0P_MHYmoaXhz/view",
        },
        {
          label: "Digital Citizenship and Online Safety Policy",
          href: "https://drive.google.com/file/d/1k_DqfOxM9sReoZaL8waKbuaQ2QbFE-QD/view",
        },
        {
          label: "Facilities Management Policy",
          href: "https://drive.google.com/file/d/1pNe3ge05bxOJR4QtP2Pkw655OFxzhQ3c/view",
        },
        {
          label: "Health, Safety and Security Policy",
          href: "https://drive.google.com/file/d/1nxolyi4ATaglHYvf7QADl5UqKFrYvmin/view",
        },
        {
          label: "Human Resource Management Policy",
          href: "https://drive.google.com/drive/folders/1XztgLWdW4LNadoaUpueJNa2B6jGKTpJQ",
        },
        {
          label: "Recruitment and Retention Policy",
          href: "https://drive.google.com/file/d/1NwCm_HzggQvBwll0jgRDJN5WA2w9vc0D/view",
        },
        {
          label: "Student Support Services Policy (Well-being and Pastoral)",
          href: "https://drive.google.com/file/d/1he7kJRw5KG3PG1bRH5l1SIUp45S50rPZ/view",
        },
        {
          label: "Sustainability Policy",
          href: "https://drive.google.com/file/d/1BD8DHy97kpJvA4aziRtSaqvswEkhdzha/view",
        },
        {
          label: "Ethical Use of Technology and AI Policy",
          href: "https://drive.google.com/file/d/1nWuSNpbOA8ZuTJ6x9bf35PYHkOWUc8-2/view",
        },
        {
          label: "Boarding Policy",
          href: "https://drive.google.com/file/d/1GdDU2Uh64xui2fV7zmydiU0ntuF_uvxi/view",
        },
        {
          label: "Boarding Handbook",
          href: "https://drive.google.com/file/d/1GdDU2Uh64xui2fV7zmydiU0ntuF_uvxi/view",
        },
        {
          label: "Medical Handbook",
          href: "https://drive.google.com/file/d/1d5wmumXKZ3aIYa9nB6pT58ytaAwrV22f/view",
        },


        
        
      ],
    },

    {
      id: "practices-d3",
      updated: "July 2026",
      title: "2. Practices: Dimension 3, Advancing Learning",
      description:
        "The policies and procedures that shape learning, teaching, and assessment at Woodcreek, from Early Years through Sixth Form.",
      links: [
        {
          label: "Academic Integrity Policy",
          href: "https://drive.google.com/file/d/1Y-eQRl6NE66-MG7w_hje8j31Sb1uq9i5/view",
        },
        {
          label: "Admissions and Enrolment Policy",
          href: "https://drive.google.com/file/d/1vNNdrIwy6h37r1XZasHwIv7J_KHGSi3-/view",
        },
        {
          label: "Assessment, Recording and Reporting Policy",
          href: "https://drive.google.com/file/d/13NNvvQrZthhTIyUBYSJCJXIII0ljHd5u/view",
        },
        {
          label: "Curriculum Policy and Documentation",
          href: "https://drive.google.com/file/d/1Mb94-NRURN0JLYBXbKDHFmjuvLDjEP4R/view",
        },
        {
          label: "Inclusion Policy",
          href: "https://drive.google.com/file/d/1MamiGwELZOCZKkaOJxjVgw7c-qYgtWVU/view",
        },
        {
          label: "Learning and Teaching Policy",
          href: "https://drive.google.com/file/d/1EBxlg_rJu7bLgwjcDObVxTGjCp-HuQBr/view",
        },
        {
          label: "Parent Engagement Policy",
          href: "https://drive.google.com/file/d/1eIkDFv64M_dzkmzfgNEbTyTguH1E3dYQ/view",
        },
        {
          label: "Professional Learning and Growth Policy",
          href: "https://drive.google.com/file/d/1bbL16KXpBaKoX6s9NT7es_hA7Xne45Ae/view",
        },
        {
          label: "Student Support Services Policy (Learning Support)",
          href: "https://drive.google.com/file/d/1P_75WkPt4wiWRhjj23ehRlB7PmfZqP2j/view",
        },
        {
          label: "Time and Space Planning",
          href: "https://drive.google.com/file/d/1XgZsSu2sVp9xDmqfIlZLtxCOkwkoa3jw/view",
        },
        {
          label: "Transitions Policy",
          href: "https://drive.google.com/file/d/1nn5Dx6RH75xe46H8CyVNRuC_Hmv87zcc/view",
        },
        {
          label: "Homework Policy",
          href: "https://drive.google.com/file/d/1VRR-9XZ0tdlxzDS70ZYfrN6MS7Sqsirp/view?usp=drive_link",
        },
        {
          label: "Examinations Policy",
          href: "https://drive.google.com/file/d/1d-83vdMh7qSJNB0aqQNUNcrrU0pbcJVa/view",
        },
        {
          label: "Educational Visits and Off-Site Learning Policy",
          href: "https://drive.google.com/file/d/1TIG8tt4c1cxPLg0WCJv79CCQ2OeqwKpN/view",
        },
        {
          label: "Learning and Teaching Procedures",
          href: "https://drive.google.com/file/d/1-K7fP58qjjAizCRVTl7jfEwGM1TQg1-N/view",
        },
      ],
    },

    {
      id: "practices-self-assessment",
      updated: "July 2026",
      title: "2. Practices Self-Assessment",
      description:
        "The school's own reflection on the strengths and areas for development across all three dimensions of its practices.",
      links: [
        {
          label: "Practices Self-Assessment",
          href: P,
        },
      ],
    },

    {
      id: "planning",
      updated: "July 2026",
      title: "3. Planning",
      description:
        "How Woodcreek's leaders and owners plan for the school's future, covering strategic planning and financial sustainability. The financial documents are shared with the CIS review team only.",
      links: [
        {
          label: "E1 Strategic Plan",
          href: "https://drive.google.com/file/d/1htCrdDDPBTIN5YCPtNXyzhO0YIhCPYxx/view",
        },
        {
          label: "E2 Premises and Digital Infrastructure Plan",
          href: "https://drive.google.com/file/d/1X3LZP4N31lOinPV_f3q0UWWDReeR_I25/view",
        },
        {
          label: "E3 Implementation and Action Plans",
          href: "https://drive.google.com/file/d/1Ep9jaQjEB5Ve843mDi8T-qzmAQwQ7WKo/view",
        },
        {
          label: "E4 Data Collection and Analysis for Planning",
          href: "https://drive.google.com/file/d/1ME3jVux7ms5JNAn4ZXSQ6aYR8o9MzUwo/view",
        },
        {
          label: "E4 Supporting Evidence",
          href: "https://drive.google.com/drive/folders/1FIWPNhX_JE9l0UPwXT214QqKGpqTIfeF",
        },
        {
          label: "E5 Policy and Procedural Review",
          href: "https://drive.google.com/file/d/1dITyI0Wh6ffdERupEFpO9XnPWErnR6Ti/view",
        },
        {
          label: "E6 Strategic Updates",
          href: "https://drive.google.com/file/d/1YnZ5QdrFX3l8btY008ynse39_Y5b6Ruj/view",
        },
        {
          label: "F1 Financial Governance Policy (Restricted)",
          href: "https://drive.google.com/file/d/1Z_7FF8YfEOynAZwmaHwb28RE1KSrgdmB/view",
        },
        {
          label: "F2 Documented Financial Procedures (Restricted)",
          href: "https://drive.google.com/file/d/1TRpxzO7EUxaPBV_CK39K7gOF4MJqtwcF/view",
        },
        {
          label: "F3 Financial Projections (Restricted)",
          href: "https://drive.google.com/file/d/1XN0Js8HYOUYvoKhMSWIDaKi6WSGElbC2/view",
        },
        {
          label: "F4 Risk Management (Restricted)",
          href: P,
        },
        {
          label: "F5 SWOT Analysis (Restricted)",
          href: "https://drive.google.com/file/d/1nsrkL2xTJ5KPixy7EAr5sEmajd3S-YYe/view?usp=drive_link",
        },
        {
          label: "F6 Financial Overview (Restricted)",
          href: "https://drive.google.com/file/d/19175PXyJ3JvteZPPuoxzdCSucHV-vk4b/view",
        },
      ],
    },

    {
      id: "planning-self-assessment",
      updated: "July 2026",
      title: "3. Planning Self-Assessment",
      description:
        "The school's own reflection on the strengths and areas for development in how it plans for a strategic and sustainable future.",
      links: [
        {
          label: "Planning Self-Assessment",
          href: P,
        },
      ],
    },
  ],
};

// PART 3: LEARNING STORIES

export const part3: Section = {
  id: "part-3",
  number: "Part 3",
  title: "Learning Stories",
  intro:
    "Learning Stories are developed during the self-study stage of accreditation, with one story for each development initiative. Each follows the cycle of Intentions, Implementation, Impact, and Insights. This part will be completed ahead of the Team Evaluation Visit.",
  subsections: [
    {
      id: "overview",
      updated: "July 2026",
      title: "Overview",
      description:
        "Learning Stories will be added here as development initiatives are agreed. Each documents the school's journey through its intentions, how it was carried out, the impact on the community, and the insights gained.",
      links: [],
    },
  ],
};

export const sections: Section[] = [part1, part2, part3];
