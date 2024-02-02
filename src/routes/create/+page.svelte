<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.user}
	<div class="p-10">
		<form class="max-w-[56rem] mx-auto space-y-4" method="POST">
			<h1 class="h1 text-center">Create Ticket</h1>
			<label class="label">
				<span>Customer Name</span>
				<input
					class="input"
					type="text"
					value={data.user?.name}
					disabled
					placeholder="Customer Name"
				/>
			</label>
			<label class="label">
				<span>Customer Email</span>
				<input
					class="input"
					type="email"
					value={data.user?.email}
					disabled
					placeholder="Customer Email"
				/>
			</label>

			<label class="label">
				<span>Product</span>
				<select class="select" name="product">
					<option value="iPhone/iPad">iPhone/iPad</option>
					<option value="Macbook">Macbook</option>
					<option value="Apple Watch">Apple Watch</option>
				</select>
			</label>
			<label class="label">
				<span>Description of the issue</span>
				<textarea
					name="description"
					class="textarea"
					rows="4"
					placeholder="Please add a detailed description of the issue"
				/>
			</label>
			<div class="grid">
				<button type="submit" class="btn variant-filled-primary">Submit</button>
			</div>
		</form>
	</div>
{:else}
	<div class="p-10">
		<div class="max-w-[56rem] mx-auto">
			<aside class="alert variant-ghost">
				<!-- Icon -->
				<div>
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
					<h3 class="h3">Not logged in</h3>
					<p>To create a ticket you must be logged in. Please login</p>
				</div>
				<!-- Actions -->
				<div class="alert-actions">
					<a href="/login" class="btn variant-filled-primary">Login</a>
				</div>
			</aside>
		</div>
	</div>
{/if}
