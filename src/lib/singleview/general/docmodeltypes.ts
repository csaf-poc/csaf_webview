// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
//

export const CSAFDocProps = {
  CATEGORY: "category",
  CSAFVERSION: "csaf_version",
  CURRENTRELEASEDATE: "current_release_date",
  DISTRIBUTION: "distribution",
  DOCUMENT: "document",
  ID: "id",
  INITIALRELEASEDATE: "initial_release_date",
  LABEL: "label",
  LANG: "lang",
  PRODUCTTREE: "product_tree",
  PUBLISHER_CATEGORY: "category",
  PUBLISHER_NAME: "name",
  PUBLISHER_NAMESPACE: "namespace",
  PUBLISHER: "publisher",
  REVISIONHISTORY: "revision_history",
  STATUS: "status",
  TITLE: "title",
  TLP: "tlp",
  TRACKING: "tracking",
  TRACKINGVERSION: "version",
  VULNERABILITIES: "vulnerabilities"
} as const;

export const TLP = {
  AMBER: "AMBER",
  GREEN: "GREEN",
  RED: "RED",
  WHITE: "WHITE",
  ERROR: "Invalid TLP"
} as const;

export const EMPTY = "";

export type TLPKeys = (typeof TLP)[keyof typeof TLP];

export const Status = {
  draft: "draft",
  final: "final",
  interim: "interim",
  ERROR: "Invalid Status"
} as const;
export type StatusKeys = (typeof Status)[keyof typeof Status];

export const DocumentCategory = {
  CSAF_SECURITY_ADVISORY: "csaf_security_advisory",
  CSAF_BASE: "csaf_base",
  CSAF_VEX: "csaf_vex"
} as const;

export type Publisher = {
  category: string;
  name: string;
  namespace: string;
};

export type RevisionHistoryEntry = {
  date: string;
  legacyVersion?: string;
  number: number;
  summary: string;
};

export type DocModel = {
  category: string;
  csafVersion: string;
  id: string;
  isDistributionPresent: boolean;
  isDocPresent: boolean;
  isProductTreePresent: boolean;
  isPublisherPresent: boolean;
  isRevisionHistoryPresent: boolean;
  isTLPPresent: boolean;
  isTrackingPresent: boolean;
  isVulnerabilitiesPresent: boolean;
  lang: string;
  lastUpdate: string;
  productTree: any;
  productVulnerabilities: any;
  published: string;
  publisher: Publisher;
  revisionHistory: RevisionHistoryEntry[];
  status: string;
  title: string;
  tlp: TLP;
  trackingVersion: string;
  vulnerabilities: any;
};

export type DocModelKey = keyof DocModel;

export type TLP = {
  label: string;
  url?: string;
};
