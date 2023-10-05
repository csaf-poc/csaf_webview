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

export type EntryType = {
  id: string;
  title: string;
  link: Link[];
  published: string;
  updated: string;
  content: Content;
  format: Format;
};

export type EntriesByYearRecord = Record<string, EntryType[]>;

export type EntryIDURLLookup = Record<string, string>;
