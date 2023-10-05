// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
// Software-Engineering: 2023 Intevation GmbH <https://intevation.de>

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
