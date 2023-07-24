// This file is Free Software under the MIT License
// without warranty, see README.md and LICENSES/MIT.txt for details.
//
// SPDX-License-Identifier: MIT
//
// SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
//

export const CSAFDocProps = {
	DOCUMENT: "document",
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
	CURRENTRELEASEDATE: "current_release_date"
} as const;

export const TLP = {
	AMBER: "AMBER",
	GREEN: "GREEN",
	RED: "RED",
	WHITE: "WHITE",
	ERROR: "Invalid TLP"
} as const;

export const EMPTY: string = "";

export type TLPKeys = (typeof TLP)[keyof typeof TLP];

export const Status = {
	draft: "draft",
	final: "final",
	interim: "interim",
	ERROR: "Invalid Status"
} as const;
export type StatusKeys = (typeof Status)[keyof typeof Status];

export type DocModel = {
	title: string;
	lang: string;
	csafVersion: string;
	tlp: string;
	id: string;
	status: string;
	published: string;
	lastUpdate: string;
	isDocPresent: boolean;
	isTrackingPresent: boolean;
	isDistributionPresent: boolean;
	isTLPPresent: boolean;
};

export type DocModelKey = keyof DocModel;
