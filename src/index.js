/**
 * es6 modules and imports
 */
// import sayHello from './hello';
// sayHello('World');


/**
 * require style imports
 */

'use strict';

const {getMovies} = require('./api.js');

const movieFetch = () => getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        $('#movies').append(movieDiv(title, rating, id));

        console.log(`id#${id} - ${title} - rating: ${rating}`);

    });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.')
        console.log(error);
    });


movieFetch();

const starRating = (rating) => {
    let star = '';
    for (let i = 0; i < rating; i++) {
        star += '<i class="fas fa-star"></i>'
    }
    return star;
};

const movieDiv = (title, rating, id) => {
    let star = starRating(rating);
    let html = `<div class="col-12 col-md-6">
        <h3>${title}</h3>
        <p>${star}</p>
        </div>`;

    return html;
};

const addMovie = () => {
    $('#submit').on('click', function() {
        console.log('you clicked the submit button');
        const newMovie = {
            title: $('#title').val(),
            rating: $('input[name = rating]:checked').val()
        }
    })
};



