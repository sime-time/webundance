export default defineAppConfig({
	ui: {
		colors: {
			primary: "emerald",
			neutral: "slate",
		},
		toaster: {
			defaultVariants: {
				position: "top-center",
			},
		},
		formField: {
			defaultVariants: {
				size: "lg",
			},
		},
		input: {
			defaultVariants: {
				size: "lg",
			},
		},
		textarea: {
			defaultVariants: {
				size: "lg",
			},
		},
		accordion: {
			slots: {
				root: "space-y-3",
				label: "font-bold text-xl",
				content: "text-start",
				body: "text-xl",
				trailingIcon: "text-primary size-8",
				item: "bg-white rounded-xl shadow-xs px-3 border border-neutral-200",
			},
		},
	},
});
