export interface JobsResponse {
  "0-legal-notice": string;
  "total-job-count": string;
  jobs: JobPropsType[];
}

export interface JobPropsType {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  tags: string[];
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
  company_logo_url?: string;
}
