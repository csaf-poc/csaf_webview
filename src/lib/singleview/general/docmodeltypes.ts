// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
//

export const CSAFDocProps = {
  DOCUMENT: "document",
  CATEGORY: "category",
  TRACKING: "tracking",
  DISTRIBUTION: "distribution",
  TLP: "tlp",
  TITLE: "title",
  LANG: "lang",
  CSAFVERSION: "csaf_version",
  ID: "id",
  LABEL: "label",
  STATUS: "status",
  INITIALRELEASEDATE: "initial_release_date",
  CURRENTRELEASEDATE: "current_release_date",
  PUBLISHER: "publisher",
  PUBLISHER_CATEGORY: "category",
  PUBLISHER_NAME: "name",
  PUBLISHER_NAMESPACE: "namespace",
  TRACKINGVERSION: "version",
  REVISIONHISTORY: "revision_history",
  VULNERABILITIES: "vulnerabilities",
  PRODUCTTREE: "product_tree"
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
  title: string;
  lang: string;
  csafVersion: string;
  category: string;
  tlp: string;
  id: string;
  status: string;
  published: string;
  lastUpdate: string;
  publisher: Publisher;
  trackingVersion: string;
  revisionHistory: RevisionHistoryEntry[];
  vulnerabilities: any;
  productVulnerabilities: any;
  productTree: any;
  isDocPresent: boolean;
  isTrackingPresent: boolean;
  isDistributionPresent: boolean;
  isTLPPresent: boolean;
  isProductTreePresent: boolean;
  isPublisherPresent: boolean;
  isVulnerabilitiesPresent: boolean;
  isRevisionHistoryPresent: boolean;
};

export type DocModelKey = keyof DocModel;
