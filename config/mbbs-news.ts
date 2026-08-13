export const MCC_NEWS_URL = "https://mcc.nic.in/news-events-ug-medical/";

export type MbbsNewsItem = {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  tag: string;
  type: "list" | "notice";
  isNew: boolean;
  summary: string;
};

export const mbbsNews: MbbsNewsItem[] = [
  {
    id: "cw-supplementary-list",
    title:
      "Supplementary List of eligible candidates under CW Category for admission to UG Medical Courses (MBBS/BDS/BAMS/BUMS/BHMS) 2026-2027 under 85% Delhi Quota",
    date: "2026-08-11",
    dateLabel: "11 Aug 2026",
    tag: "CW · Delhi Quota",
    type: "list",
    isNew: true,
    summary:
      "Updated CW eligibility list for 85% Delhi Quota. Search your name or NEET roll number and check the assigned priority.",
  },
  {
    id: "puducherry-merit",
    title: "Additional Merit list for Puducherry domicile dated 10.08.2026",
    date: "2026-08-10",
    dateLabel: "10 Aug 2026",
    tag: "Puducherry · JIPMER",
    type: "list",
    isNew: true,
    summary:
      "Additional names added to the Puducherry domicile merit list for JIPMER (Puducherry & Karaikal) internal quota seats.",
  },
  {
    id: "cw-portal-reopen",
    title: "Notice for Re-Opening CW Portal 2026 dated 10.08.2026",
    date: "2026-08-10",
    dateLabel: "10 Aug 2026",
    tag: "CW Portal",
    type: "notice",
    isNew: true,
    summary:
      "CW category portal reopened for Delhi 85% quota applications and document upload. Complete the process within the notified window.",
  },
  {
    id: "nmc-pwbd",
    title:
      "Notice regarding NMC Addendum and Appellate Boards (PwBD) dated 07.08.2026",
    date: "2026-08-07",
    dateLabel: "07 Aug 2026",
    tag: "NMC · PwBD",
    type: "notice",
    isNew: false,
    summary:
      "NMC addendum on PwBD candidates, Medical Assessment Boards, and the appellate process for UG medical counselling.",
  },
  {
    id: "reset-registration",
    title: "Notice for Reset Registration option dated 07.08.2026",
    date: "2026-08-07",
    dateLabel: "07 Aug 2026",
    tag: "Registration",
    type: "notice",
    isNew: false,
    summary:
      "MCC has enabled a reset registration option so candidates can correct details as per the official notice.",
  },
];
