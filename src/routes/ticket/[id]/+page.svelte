<script lang="ts">
	import { page } from '$app/stores';
	import { goto, invalidate } from '$app/navigation';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils/formatDate';

	export let data: PageData;
	$: ({ ticket, user } = data);

	const modalStore = getModalStore();
	let loading = false;

	const closeTicketModal: ModalSettings = {
		type: 'confirm',
		// Data
		title: 'Please Confirm',
		body: 'Are you sure you wish to close the ticket?',
		buttonTextConfirm: 'Close Ticket',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (r: boolean) => r && closeTicket()
	};

	async function closeTicket() {
		loading = true;
		await fetch(`/api/ticket/${$page.params?.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		goto('/tickets');
	}
	const addNoteModal: ModalSettings = {
		type: 'prompt',
		// Data
		title: 'Add Note',
		body: 'Provide a message with any additional information.',
		// Populates the input value and attributes
		value: '',
		valueAttr: { type: 'text', minlength: 3, required: true },
		buttonTextSubmit: 'Add Note',
		// Returns the updated response value
		response: async (r: string) => {
			if (!r) return;
			await fetch('/api/notes', {
				method: 'POST',
				body: JSON.stringify({ ticketId: ticket?._id, message: r }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			invalidate('app:notes');
		}
	};
</script>

<div class="p-10">
	<div class="max-w-[56rem] mx-auto space-y-4">
		<h2 class="h2">Ticket ID: {$page.params?.id}</h2>
		<p>
			<span
				class="text-base badge variant-filled{ticket?.status === 'new'
					? '-success'
					: ticket?.status === 'closed'
						? '-error'
						: ''}">{ticket?.status}</span
			>
		</p>
		{#if ticket?.createdAt}
			<p>Date Submitted: {formatDate(ticket?.createdAt)}</p>
		{/if}
		<p>Product: {ticket?.product}</p>
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
				<p>{ticket?.description}</p>
			</div>
		</div>
		<hr />
		<div class:hidden={ticket?.status === 'closed' || !user}>
			<div class="space-y-4">
				<p>Actions</p>
				<div class="flex items-center justify-between">
					<button
						type="button"
						class="btn variant-filled-primary"
						class:hidden={ticket?.status === 'closed'}
						on:click={() => modalStore.trigger(addNoteModal)}
					>
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
					<button
						type="button"
						class="btn variant-filled-error"
						on:click={() => modalStore.trigger(closeTicketModal)}
					>
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
			<hr class="mt-4" />
		</div>
		<p>Notes</p>

		{#if ticket?.notes && ticket?.notes?.length > 0}
			<div class="space-y-4">
				{#each ticket.notes as note (note._id)}
					<div class="card p-4 variant-ghost">
						<div class="flex justify-between">
							<p>Note from Customer</p>
							{#if note.createdAt}
								<p>{formatDate(new Date(note.createdAt))}</p>
							{/if}
						</div>
						<p>{note.message}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
