export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  techStack: string[];
  details: string;
  status: "progress" | "finished";
  planning?: boolean;
  date?: string;
}
