export interface TVShowDTO {
	id: string;
	name: string;
	language?: string;
	genres?: string[];
	summary?: string;
	status?: string;
	premiered?: string;
	ended?: string;
	image?: {
		medium: string;
		original: string;
	};
}
