export type BorderColor =
	| "border-black"
	| "border-x-gray-200"
	| "border-x-gray-400"
	| "border-x-gray-600"
	| "border-x-gray-800";

export type Border = "border";
export type Gap = "0" | "1" | "2" | "3" | "4" | "5";
export type GridTemplates = Gap | "6" | "7" | "8" | "9";
export type Concats =
	| Gap
	| "x1"
	| "x2"
	| "x3"
	| "x4"
	| "x5"
	| "y1"
	| "y2"
	| "y3"
	| "y4"
	| "y5";
export type Padding = Concats;
export type Margin = Concats;
export type JustifyContent =
	| "justify-start"
	| "justify-end"
	| "justify-center"
	| "justify-between"
	| "justify-around"
	| "justify-evenly"
	| "justify-stretch"
	| "justify-baseline"
	| "justify-normal";

export type AlignItems =
	| "items-start"
	| "items-end"
	| "items-center"
	| "items-baseline"
	| "items-stretch";

export type FlexType =
	| "flex-row"
	| "flex-row-reverse"
	| "flex-col"
	| "flex-col-reverse";

export type BoxShadow =
	| "shadow-sm"
	| "shadow-xs"
	| "shadow-md"
	| "shadow-none"
	| "shadow-lg";
