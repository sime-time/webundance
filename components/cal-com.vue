<script setup lang="js">
import { onMounted, ref } from "vue";

const props = defineProps({
	calLink: {
		type: String,
		required: true,
	},
	brandColor: {
		type: String,
		required: false,
	},
});

const calContainer = ref(null);

onMounted(() => {
	// This logic replicates Cal.com's official initialization snippet.
	// It must run first to define `window.Cal` and then load the main `embed.js`.
	(function (C, A, L) {
		const p = function (a, ar) {
			a.q.push(ar);
		};
		const d = C.document;
		C.Cal = C.Cal || function (...ar) {
			const cal = C.Cal;
			if (!cal.loaded) {
				cal.ns = {};
				cal.q = cal.q || [];
				// This is the key: it injects the main script tag.
				d.head.appendChild(d.createElement("script")).src = A;
				cal.loaded = true;
			}
			if (ar[0] === L) {
				const api = function (...args) {
					p(api, args);
				};
				const namespace = ar[1];
				api.q = api.q || [];
				if (typeof namespace === "string") {
					cal.ns[namespace] = cal.ns[namespace] || api;
					p(cal.ns[namespace], ar);
					p(cal, ["initNamespace", namespace]);
				}
				else {
					p(cal, ar);
				}
				return;
			}
			p(cal, ar);
		};
	})(window, "https://app.cal.com/embed/embed.js", "init");

	// Now that `window.Cal` is defined, we can safely call it.
	// The snippet ensures these calls are queued until the main script is ready.
	const Cal = window.Cal;

	Cal("init", "", {});

	Cal("ui", {
		theme: "light",
		cssVarsPerTheme: {
			light: {
				"cal-brand": props.brandColor,
			},
		},
	});

	Cal("inline", {
		elementOrSelector: calContainer.value,
		config: { theme: "light" },
		calLink: props.calLink,
	});
});
</script>

<template>
	<div
		ref="calContainer"
		style="width: 100%; min-height: 100vh"
	/>
</template>
