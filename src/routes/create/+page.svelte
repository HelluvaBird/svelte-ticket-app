<div class="p-10">
	<form class="max-w-[56rem] mx-auto space-y-4">
		<h1 class="h1 text-center">Create Ticket</h1>
		<label class="label">
			<span>Customer Name</span>
			<input class="input" type="text" placeholder="Customer Name" />
		</label>
		<label class="label">
			<span>Customer Email</span>
			<input class="input" type="email" placeholder="Customer Email" />
		</label>

		<label class="label">
			<span>Product</span>
			<select class="select">
				<option value="1">iPhone/iPad</option>
				<option value="2">Macbook</option>
				<option value="3">Apple Watch</option>
			</select>
		</label>
		<label class="label">
			<span>Description of the issue</span>
			<textarea
				class="textarea"
				rows="4"
				placeholder="Please add a detailed description of the issue"
			/>
		</label>
		<div class="grid"><button type="button" class="btn variant-filled-primary">Submit</button></div>
	</form>
</div>
