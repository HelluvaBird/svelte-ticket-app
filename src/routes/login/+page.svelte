<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="max-w-[56rem] h-full mx-auto flex justify-center items-center p-10">
	<div class="card p-4 space-y-4 flex-auto">
		<h2 class="h2 text-center">Login</h2>
		<form class="space-y-4" method="POST">
			<label class="label">
				<span>Email</span>
				<input
					class="input"
					class:input-error={form?.email?.missing}
					type="email"
					name="email"
					value={form?.email?.value ?? ''}
					placeholder="Email Address"
				/>
				{#if form?.email?.missing}<p class=" text-error-500 text-sm">
						The email field is required
					</p>{/if}
			</label>
			<label class="label">
				<span>Password</span>
				<input
					class="input"
					class:input-error={form?.password?.missing}
					type="password"
					name="password"
					placeholder="Password"
				/>
				{#if form?.password?.missing}<p class=" text-error-500 text-sm">
						The password field is required
					</p>{/if}
			</label>
			<div class="grid">
				<button type="submit" class="btn variant-filled-primary">Login</button>
			</div>
		</form>
	</div>
</div>
