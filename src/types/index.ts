type Fact = {
	background: {
		color: string;
	};
	icon?: string | Element;
	intro: string;
	increment: {
		unit: string;
		value: number;
	};
	source?: {
		name?: string;
		url?: string;
	};
};
