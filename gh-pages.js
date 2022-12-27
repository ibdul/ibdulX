import ghpages from 'gh-pages';

ghpages.publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/ibdul/ibdul.git',
		user: {
			name: 'Ibrahim Abdulhameed',
			emial: 'i.ibrahim.abdulhameed@gmail.com'
		},
		dotfiles: true
	},
	(err) => {
		if (err) {
			console.log('Something went wrong');
			console.log(err);
		} else {
			console.log('Deployed successfully');
		}
	}
);
