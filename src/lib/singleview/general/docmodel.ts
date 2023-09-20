// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
//

import {
  TLP,
  type DocModel,
  Status,
  EMPTY,
  CSAFDocProps,
  type Publisher,
  type RevisionHistoryEntry
} from "$lib/singleview/general/docmodeltypes";

const checkDocumentPresent = (csafDoc: any): boolean => {
  return csafDoc[CSAFDocProps.DOCUMENT];
};

const checkTrackingPresent = (csafDoc: any): boolean => {
  return checkDocumentPresent(csafDoc) && csafDoc.document[CSAFDocProps.TRACKING];
};

const checkDistributionPresent = (csafDoc: any): boolean => {
  return checkDocumentPresent(csafDoc) && csafDoc.document[CSAFDocProps.DISTRIBUTION];
};

const checkTLPPresent = (csafDoc: any): boolean => {
  return (
    checkDistributionPresent(csafDoc) &&
    csafDoc.document.distribution[CSAFDocProps.TLP] &&
    csafDoc.document.distribution[CSAFDocProps.TLP][CSAFDocProps.LABEL]
  );
};

const checkPublisher = (csafDoc: any): boolean => {
  return checkDocumentPresent(csafDoc) && csafDoc.document[CSAFDocProps.PUBLISHER];
};

const checkVulnerabilities = (csafDoc: any): boolean => {
  return csafDoc[CSAFDocProps.VULNERABILITIES];
};

const checkproducTree = (csafDoc: any): boolean => {
  return csafDoc[CSAFDocProps.PRODUCTTREE];
};

const checkRevisionHistoryPresent = (csafDoc: any): boolean => {
  return checkTrackingPresent(csafDoc) && csafDoc.document.tracking[CSAFDocProps.REVISIONHISTORY];
};

const getTitle = (csafDoc: any): string => {
  if (!checkDocumentPresent(csafDoc)) return EMPTY;
  return csafDoc.document[CSAFDocProps.TITLE] || EMPTY;
};

const getLanguage = (csafDoc: any): string => {
  if (!checkDocumentPresent(csafDoc)) return EMPTY;
  return csafDoc.document[CSAFDocProps.LANG] || EMPTY;
};

const getCSAFVersion = (csafDoc: any): string => {
  if (!checkDocumentPresent(csafDoc)) return EMPTY;
  return csafDoc.document[CSAFDocProps.CSAFVERSION] || EMPTY;
};

const getId = (csafDoc: any): string => {
  if (!checkTrackingPresent(csafDoc)) return EMPTY;
  return csafDoc.document.tracking[CSAFDocProps.ID] || EMPTY;
};

const getTlp = (csafDoc: any): TLP => {
  if (!checkTLPPresent(csafDoc)) return { label: "" };
  let label = "TLP.ERROR;";
  switch (csafDoc.document.distribution.tlp[CSAFDocProps.LABEL]) {
    case TLP.AMBER:
      label = TLP.AMBER;
      break;
    case TLP.GREEN:
      label = TLP.AMBER;
      break;
    case TLP.WHITE:
      label = TLP.WHITE;
      break;
    case TLP.RED:
      label = TLP.RED;
      break;
    default:
      label = TLP.ERROR;
      break;
  }
  return { label: label, url: csafDoc.document.distribution.tlp.url };
};

const getStatus = (csafDoc: any): string => {
  if (!checkTrackingPresent(csafDoc)) return EMPTY;
  switch (csafDoc.document.tracking[CSAFDocProps.STATUS]) {
    case Status.draft:
      return Status.draft;
    case Status.final:
      return Status.final;
    case Status.interim:
      return Status.interim;
    default:
      return Status.ERROR;
  }
};

const getPublished = (csafDoc: any): string => {
  if (!checkTrackingPresent(csafDoc)) return EMPTY;
  return csafDoc.document.tracking[CSAFDocProps.INITIALRELEASEDATE] || EMPTY;
};

const getLastUpdate = (csafDoc: any): string => {
  if (!checkTrackingPresent(csafDoc)) return EMPTY;
  return csafDoc.document.tracking[CSAFDocProps.CURRENTRELEASEDATE] || EMPTY;
};

const getCategory = (csafDoc: any): string => {
  if (!checkDocumentPresent(csafDoc)) return EMPTY;
  return csafDoc.document[CSAFDocProps.CATEGORY] || EMPTY;
};

const getPublisher = (csafDoc: any): Publisher => {
  if (!checkPublisher(csafDoc)) {
    return {
      category: "",
      name: "",
      namespace: ""
    };
  }
  const publisher = csafDoc.document[CSAFDocProps.PUBLISHER];
  return {
    category: publisher[CSAFDocProps.PUBLISHER_CATEGORY],
    name: publisher[CSAFDocProps.PUBLISHER_NAME],
    namespace: publisher[CSAFDocProps.PUBLISHER_NAMESPACE],
    contact_details: publisher[CSAFDocProps.CONTACT_DETAILS],
    issuing_authority: publisher[CSAFDocProps.ISSUING_AUTHORITY]
  };
};

const getTrackingVersion = (csafDoc: any): string => {
  if (!checkTrackingPresent(csafDoc)) return EMPTY;
  return csafDoc.document.tracking[CSAFDocProps.TRACKINGVERSION] || EMPTY;
};

const getVulnerabilities = (csafDoc: any) => {
  if (!checkVulnerabilities(csafDoc)) return [];
  return csafDoc.vulnerabilities;
};

const getRevisionHistory = (csafDoc: any): RevisionHistoryEntry[] => {
  if (!checkRevisionHistoryPresent(csafDoc)) return [];
  const result: RevisionHistoryEntry[] = csafDoc.document.tracking[CSAFDocProps.REVISIONHISTORY];
  result.sort((entry1: RevisionHistoryEntry, entry2: RevisionHistoryEntry) => {
    if (entry1.date < entry2.date) return 1;
    if (entry1.date > entry2.date) return -1;
    return 0;
  });
  return result;
};

const getProductTree = (csafDoc: any) => {
  if (!checkproducTree(csafDoc)) return [];
  return csafDoc[CSAFDocProps.PRODUCTTREE];
};

const convertToDocModel = (csafDoc: any): DocModel => {
  const docModel: DocModel = {
    category: getCategory(csafDoc),
    csafVersion: getCSAFVersion(csafDoc),
    id: getId(csafDoc),
    isDistributionPresent: checkDistributionPresent(csafDoc),
    isDocPresent: checkDocumentPresent(csafDoc),
    isProductTreePresent: checkproducTree(csafDoc),
    isPublisherPresent: checkPublisher(csafDoc),
    isRevisionHistoryPresent: checkRevisionHistoryPresent(csafDoc),
    isTLPPresent: checkTLPPresent(csafDoc),
    isTrackingPresent: checkTrackingPresent(csafDoc),
    isVulnerabilitiesPresent: checkVulnerabilities(csafDoc),
    lang: getLanguage(csafDoc),
    lastUpdate: getLastUpdate(csafDoc),
    productTree: getProductTree(csafDoc),
    productVulnerabilities: [],
    published: getPublished(csafDoc),
    publisher: getPublisher(csafDoc),
    revisionHistory: getRevisionHistory(csafDoc),
    status: getStatus(csafDoc),
    title: getTitle(csafDoc),
    tlp: getTlp(csafDoc),
    trackingVersion: getTrackingVersion(csafDoc),
    vulnerabilities: getVulnerabilities(csafDoc)
  };
  return docModel;
};

export { convertToDocModel };
