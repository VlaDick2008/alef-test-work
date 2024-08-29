import FormView from "@/views/FormView.vue";
import PreviewView from "@/views/PreviewView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/form",
		},
		{
			path: "/form",
			name: "form",
			component: FormView,
		},
		{
			path: "/preview",
			name: "preview",
			component: PreviewView,
		},
	],
});

export default router;
