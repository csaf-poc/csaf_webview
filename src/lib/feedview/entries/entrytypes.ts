export type Link = {
  rel: string;
  href: string;
};

export type Content = {
  type: string;
  src: string;
};

export type Format = {
  schema: string;
  version: string;
};

export type Entry = {
  id: string;
  title: string;
  link: Link[];
  published: string;
  updated: string;
  content: Content;
  format: Format;
};

export type EntriesByYearRecord = Record<string, Entry[]>;
