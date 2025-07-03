export default defineAppConfig({
	ui: {
		colors: {
			primary: "amber",
			neutral: "slate",
		},
		toaster: {
			defaultVariants: {
				position: "top-center",
			},
		},
		formField: {
			defaultVariants: {
				size: "xl",
			},
		},
		input: {
			defaultVariants: {
				size: "xl",
			},
		},
		textarea: {
			defaultVariants: {
				size: "xl",
			},
		},
		button: {
			variants: {
				size: {
					xl: {
						base: "px-5 py-3",
					},
				},
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
