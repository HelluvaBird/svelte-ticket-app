<script lang="ts">
	import { page } from '$app/stores';
	const data = { id: 1, product: 'Macbook', date: 1.0079, status: 'new', description: 'hey there' };
</script>

<div class="p-10">
	<div class="max-w-[56rem] mx-auto space-y-4">
		<h2 class="h2">Ticket ID: {$page.params?.id}</h2>
		<p><span class="text-base badge variant-filled-success">{data.status}</span></p>
		<p>Date Submitted: {data.date}</p>
		<p>Product: {data.product}</p>
		<hr />
		<div class="alert variant-filled">
			<div class="hidden sm:block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
					/>
				</svg>
			</div>
			<!-- Message -->
			<div class="alert-message">
				<h3 class="h3">Description of the issue</h3>
				<p>{data.description}</p>
			</div>
		</div>
		<p>Notes</p>
		<button type="button" class="btn variant-filled-primary">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>

			Add Note
		</button>
		<div class="space-y-4">
			<div class="card p-4 variant-ghost">
				<div class="flex justify-between">
					<p>Note from Customer</p>
					<p>01/25/24</p>
				</div>
				<p>Hello</p>
			</div>
			<div class="card p-4 variant-ghost">
				<div class="flex justify-between">
					<p>Note from Support</p>
					<p>01/25/24</p>
				</div>
				<p>We are on the problem like Donkey Kong!</p>
			</div>
		</div>
		<div class="grid">
			<button type="button" class="btn variant-filled-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>

				Close Ticket
			</button>
		</div>
	</div>
</div>
