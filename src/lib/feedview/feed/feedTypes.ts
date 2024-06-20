// This file is Free Software under the Apache-2.0 License
// without warranty, see README.md and LICENSES/Apache-2.0.txt for details.
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

import type { EntryType } from "../entries/entrytypes";

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
  entry: EntryType[];
};
