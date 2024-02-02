// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { SessionUserType } from '$lib/types/types';

// and what to do when importing types
declare global {
	namespace App {
		interface Locals {
			user: SessionUserType | null;
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}
