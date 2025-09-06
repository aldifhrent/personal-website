export type Project = {
  id: string; // wajib buat dynamic route
  title: string;
  description: string;
  link?: string;
  techStack?: string[];
  details?: string; // optional: untuk page detail
};