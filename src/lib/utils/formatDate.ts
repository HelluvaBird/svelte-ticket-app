export const formatDate = (date: Date) => {
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	}).format(new Date(date));
};
