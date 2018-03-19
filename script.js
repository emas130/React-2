var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'http://1.fwcdn.pl/po/05/71/30571/7529392.3.jpg'
    },
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowiadający historię króla sawanny',
		img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.6.jpg'
    },
	{
		id: 3,
		title: 'Shrek',
		desc: 'Komedia animowana',
		img: 'http://1.fwcdn.pl/po/95/09/9509/7640796.3.jpg'
    },
	{
		id: 4,
		title: 'Incepcja',
		desc: 'Film sc-fi',
		img: 'http://1.fwcdn.pl/po/08/91/500891/7354571.6.jpg'
    },
	{
		id: 5,
		title: 'Wszyscy ludzie prezydenta',
		desc: 'Film o aferze Watergate',
		img: 'http://1.fwcdn.pl/po/17/94/11794/7443427.6.jpg'
    }
];


var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function () {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {
					title: this.props.movie.title
				}),
				React.createElement(MovieDesc, {
					desc: this.props.movie.desc
				}),
				React.createElement(MovieImage, {
					img: this.props.movie.img
				})
			)
		)
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function () {
		return React.createElement('h2', {}, this.props.title)
	}
})

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},
	render: function () {
		return React.createElement('p', {}, this.props.desc)
	}
})


var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired
	},
	render: function () {
		return React.createElement('img', {
			src: this.props.img
		})
	}
})

var moviesElements = movies.map(function (movie) {
	return (
		React.createElement(Movie, {
			key: movie.id,
			movie: movie
		})

	)
});

var MovieList = React.createClass({

	render: function () {
		return (
			React.createElement('ul', {}, moviesElements)
		)
	}
});

var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));

