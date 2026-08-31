export const MCC_PG_NEWS_URL = "https://mcc.nic.in/pg-medical-counselling/";

export const PG_NRI_NOTICE_URL =
  "https://cdnbbsr.s3waas.gov.in/s3e0f7a4d0ef9b84b83b693bbf3feb8e6e/uploads/2026/05/2026052710250622.pdf";

export const PG_STRAY_RESULT_NOTICE_URL =
  "https://cdnbbsr.s3waas.gov.in/s3e0f7a4d0ef9b84b83b693bbf3feb8e6e/uploads/2026/02/20260223674929464.pdf";

export const PG_STRAY_ALLOTMENT_URL =
  "https://cdnbbsr.s3waas.gov.in/s3e0f7a4d0ef9b84b83b693bbf3feb8e6e/uploads/2026/02/20260223177387794.pdf";

export type PgNewsItem = {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  tag: string;
  type: "list" | "notice";
  isNew: boolean;
  summary: string;
  href: string;
  headline?: string;
  fileLabel?: string;
};

export const pgNews: PgNewsItem[] = [
  {
    id: "nri-eligibility-27-may",
    title:
      "Public Notice for eligibility of NRI candidature / nationality conversion for UG & PG counselling 2026-27",
    date: "2026-05-27",
    dateLabel: "27 May 2026",
    tag: "NRI · OCI",
    type: "notice",
    isNew: true,
    href: PG_NRI_NOTICE_URL,
    fileLabel: "Official PDF · Notice",
    headline:
      "Kind Attention: Candidates who claim to be NRI/OCI or want nationality converted from Indian to NRI for UG/PG counselling 2026-27.",
    summary:
      "MCC clarifies Supreme Court eligibility criteria for NRI quota seats. Candidates must produce guardian evidence and affidavit as per Guardians and Wards Act, 1890 during counselling.",
  },
  {
    id: "stray-final-result-23-feb",
    title:
      "Final Result of Stray Vacancy Round for PG Counselling 2025 — provisional allotment letter available",
    date: "2026-02-23",
    dateLabel: "23 Feb 2026",
    tag: "Stray Round · Result",
    type: "notice",
    isNew: true,
    href: PG_STRAY_RESULT_NOTICE_URL,
    fileLabel: "Official PDF · Result Notice",
    headline:
      "Urgent Attention: Final Result of Stray Vacancy Round for PG Counselling 2025 has been declared. Download Provisional Allotment Letter from MCC portal.",
    summary:
      "Final result of Stray Vacancy Round for NEET-PG Counselling 2025 is live. Download your provisional allotment letter, report to the allotted institute with originals, and complete admission only via INTRAMCC.",
  },
  {
    id: "stray-allotment-list-23-feb",
    title:
      "NEET-PG Counselling Seats Allotment — 2025 Stray Vacancy Round (full allotment list)",
    date: "2026-02-23",
    dateLabel: "23 Feb 2026",
    tag: "Allotment List",
    type: "list",
    isNew: true,
    href: PG_STRAY_ALLOTMENT_URL,
    fileLabel: "Official PDF · Seat Allotment",
    headline:
      "NEET-PG Counselling Seats Allotment – 2025 Stray Vacancy Round published with quota and category abbreviations.",
    summary:
      "Complete seat allotment list for Stray Vacancy Round with institute, course, quota and category. Candidates with category/quota change must obtain a fresh online admission letter.",
  },
];
