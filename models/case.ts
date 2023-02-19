export enum CaseContentType {
  image,
  text,
  header,
}

export type CaseMeta = {
  id: string;
  name: string;
  year: number;
  tag: string[];
  imageUrl: string;
};

export type CaseDetail = {
  id: string;
  coverUrl: string;
  name: string;
  year: number;
  overview: CaseOverview;
  paragraph: CaseBlock[];
  credit?: CaseCredit;
};

export type CaseBlock = {
  // caseId: string;
  title: string;
  content: CaseContent[];
};

export type CaseContent = {
  type: CaseContentType;
  data: string | string[]; // Multiple images
};

export type CaseOverview = {
  // caseId: string;
  client: string;
  awards: string[];
  description: string;
  tags: string[];
  website?: string;
};

export type CaseCredit = {
  members: Member[];
};

type Member = {
  title: string;
  name: string;
};
