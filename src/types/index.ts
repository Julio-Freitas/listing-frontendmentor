export type Tools = Array<string>;
export type Languages = Array<string>;

export interface Item {
  id: number;
  company: string;
  logo: string;
  new: true | false;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Languages;
  tools: Tools;
}

export interface ResponseData {
  data: Item[];
}

export interface ResponseError {
  error: string;
}
