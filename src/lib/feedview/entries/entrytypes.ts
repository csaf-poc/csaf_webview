// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

// place files you want to import through the `$lib` alias in this folder.

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
