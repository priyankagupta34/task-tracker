declare module "showdown" {
	export interface ConverterOptions {
		omitExtraWLInCodeBlocks?: boolean;
		noHeaderId?: boolean;
		prefixHeaderId?: string;
		parseImgDimensions?: boolean;
		simplifiedAutoLink?: boolean;
		literalMidWordUnderscores?: boolean;
		strikethrough?: boolean;
		tables?: boolean;
		tablesHeaderId?: boolean;
		ghCodeBlocks?: boolean;
		tasklists?: boolean;
		smoothLivePreview?: boolean;
		smartIndentationFix?: boolean;
	}

	export class Converter {
		constructor(options?: ConverterOptions);
		makeHtml(markdown: string): string;
	}
}
