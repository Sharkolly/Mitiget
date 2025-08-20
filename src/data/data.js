// export const docs = [
//   { code: "HR-PAY-001", title: "Payroll Processing Policy", dept: "HR", status: "Published" },
//   { code: "HR-PAY-002", title: "Leave Application Policy", dept: "HR", status: "Published" },
//   { code: "HR-PAY-003", title: "Leave Application Policy", dept: "HR", status: "Published" },
//   { code: "HR-PAY-004", title: "Leave Application Policy", dept: "HR", status: "Published" },
// ];
// src/data/docs.js
export const docs = [
  {
    code: "HR-PAY-001",
    title: "Payroll Processing Policy",
    dept: "HR",
    version: "v2.5",
    status: "Published",
    tags: [{ name: "Attestation", value: true }, { name: "Audit Trail" }],
  },
  {
    code: "HR-PAY-002",
    title: "Leave Application Policy",
    dept: "HR",
    version: "v2.5",
    status: "Published",

    tags: [{ name: "Attestation", value: true }, { name: "Audit Trail" }],
  },
  {
    code: "HR-PAY-003",
    title: "Appraisal Policy",
    dept: "HR",
    version: "v2.5",
    status: "Published",
    tags: [{ name: "Attestation", value: false }, { name: "Audit Trail" }],
  },
  {
    code: "HR-PAY-004",
    title: "Appraisal Policy",
    dept: "HR",
    version: "v2.5",
    status: "Published",
    tags: [{ name: "Attestation", value: true }, { name: "Audit Trail" }],
  },
];

export const document_type = [
  "Policy",
  "Standard",
  "Procedure SOP",
  "Audit Report",
  "Incident Report",
];
export const departments = ["Finance", "IT", "HR", "Legal", "Operations"];
export const tags = ["#Finance", "#IT", "#HR", "#Legal", "#Operations"];

export const options_menu = ['View History', 'Archive Policy', 'Duplicate Policy']