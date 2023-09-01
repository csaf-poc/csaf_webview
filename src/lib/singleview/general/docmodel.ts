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
  type Publisher
} from "$lib/singleview/general/docmodeltypes";

const checkDocumentPresent = (csafDoc: any): boolean => {
  return csafDoc.hasOwnProperty(CSAFDocProps.DOCUMENT);
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
  return csafDoc.hasOwnProperty(CSAFDocProps.VULNERABILITIES);
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

const getTlp = (csafDoc: any): string => {
  if (!checkTLPPresent(csafDoc)) return EMPTY;
  switch (csafDoc.document.distribution.tlp[CSAFDocProps.LABEL]) {
    case TLP.AMBER:
      return TLP.AMBER;
    case TLP.GREEN:
      return TLP.AMBER;
    case TLP.WHITE:
      return TLP.WHITE;
    case TLP.RED:
      return TLP.RED;
    default:
      return TLP.ERROR;
  }
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
    namespace: publisher[CSAFDocProps.PUBLISHER_NAMESPACE]
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

const convertToDocModel = (csafDoc: any): DocModel => {
  const docModel: DocModel = {
    title: getTitle(csafDoc),
    lang: getLanguage(csafDoc),
    csafVersion: getCSAFVersion(csafDoc),
    category: getCategory(csafDoc),
    tlp: getTlp(csafDoc),
    id: getId(csafDoc),
    status: getStatus(csafDoc),
    published: getPublished(csafDoc),
    publisher: getPublisher(csafDoc),
    trackingVersion: getTrackingVersion(csafDoc),
    revisionHistory: [],
    lastUpdate: getLastUpdate(csafDoc),
    vulnerabilities: getVulnerabilities(csafDoc),
    productVulnerabilities: [],
    isDocPresent: checkDocumentPresent(csafDoc),
    isTrackingPresent: checkTrackingPresent(csafDoc),
    isDistributionPresent: checkDistributionPresent(csafDoc),
    isTLPPresent: checkTLPPresent(csafDoc),
    isPublisherPresent: checkPublisher(csafDoc),
    isVulnerabilitiesPresent: checkVulnerabilities(csafDoc),
    isRevisionHistoryPresent: checkRevisionHistoryPresent(csafDoc)
  };
  return docModel;
};

export { convertToDocModel };
