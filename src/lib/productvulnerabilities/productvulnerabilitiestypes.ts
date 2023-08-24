export const ProductStatus = {
	FIXED: "FIXED",
	UNDER_INVESTIGATION: "UNDER_INVESTIGATION",
	KNOWN_AFFECTED: "KNOWN_AFFECTED",
	NOT_AFFECTED: "NOT_AFFECTED",
	RECOMMENDED: "RECOMMENDED"
} as const;

type StringObject = {
	[key: string]: string;
};

export type Vulnerability = {
	cve: string;
} & {
	known_affected?: StringObject;
	fixed?: StringObject;
	under_investigation?: StringObject;
	known_not_affected?: StringObject;
	recommended?: StringObject;
};
