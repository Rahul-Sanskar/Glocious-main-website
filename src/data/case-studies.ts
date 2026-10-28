/**
 * Case study content.
 *
 * Intentionally empty. A case study is a set of commercial claims — client
 * name, project scope, measured outcomes — so nothing here may be invented,
 * estimated, or illustrated with plausible-looking placeholder figures.
 * The interface below defines the shape to fill in once a real engagement has
 * been written up and approved by the client involved.
 */
export interface CaseStudyContent {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  challenge: string;
  executiveSummary: string;
  techStack: { name: string; desc: string }[];
  architecture: {
    title: string;
    description: string;
    codeSnippet?: { language: string; code: string };
  }[];
  security: { title: string; desc: string }[];
  metrics: { label: string; preValue: string; postValue: string }[];
  conclusion: string;
}

export const caseStudiesData: Record<string, CaseStudyContent> = {};
