export type Category = {
  scheme: string;
  term: string;
};

export type Link = {
  rel: string;
  href: string;
};

export type Feed = {
  id: string;
  title: string;
  link: Link[];
  category: Category[];
  updated: string;
  entry: any;
};
