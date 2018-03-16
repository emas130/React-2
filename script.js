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

<<<<<<< HEAD

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.object.isRequired
	},

	render: function () {
		return (
			React.createElement("h2", {}, this.props.title)
		)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		img: React.PropTypes.object.isRequired
	},

	render: function () {
		return (
			React.createElement("p", {}, this.props.desc)
		)
	}
});

var MoviePoster = React.createClass({
	propTypes: {
		img: React.PropTypes.object.isRequired
	},

	render: function () {
		return (
			React.createElement("img", {
				src: this.props.img,
				alt: "img"
			})
		)
	}
});

var MovieElements = React.createClass({
	propTypes: {
		movies: React.PropTypes.object.isRequired
	},

	render: function () {
		return (
			React.createElement("div", {},
				React.createElement("h1", {}, "Movie list"),
				React.createElement("ul", {},
					this.props.movies.map(function (movie) {
						return React.createElement(Movie, {
							key: movie.id,
							movie: movie
						});
					})
				)
			)
		)
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},

	render: function () {
		return (
			React.createElement("li", {
					key: this.props.movie.id
				},
				React.createElement(MovieTitle, {
					title: this.props.movie.title
				}),
				React.createElement(MovieDesc, {
					desc: this.props.movie.desc
				}),
				React.createElement(MoviePoster, {
					img: this.props.movie.img
				})
			)
		)
	}
});

var movieElements = React.createElement(MovieElements, {
	movies: movies
});
ReactDOM.render(movieElements, document.getElementById("app"));
=======


var moviesElement = movies.map(function (movie) {
	return React.createElement('li', {
			key: movie.id
		},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {
			src: movie.src
		})
	);
});

var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElement)
)

ReactDOM.render(element, document.getElementById('app'));
>>>>>>> 9d161fa4b5bde47e2f93d022f118c0cf066f24e1
