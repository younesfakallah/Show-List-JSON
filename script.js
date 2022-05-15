import data from "./movies.json" assert { type: "json" };
const container = $('#container');

for(let i=0; i < data.results.length; i++) {
    container.append(`<img class='poster' src="${data.results[i].poster_path}" alt="adimg">`);
    container.append(`<div class='title'>${data.results[i].original_title}</div>`);
};
let titleArr = $('.title');
let counter = 0;

for(let i=0; i < titleArr.length; i++) {
    counter++
    titleArr[i].innerHTML += `<div class='legend'>${data.results[i].overview}</div>`;
    titleArr[i].innerHTML += `<div id='dstars${counter}'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>`;
    if(Math.round(data.results[i].vote_average) <= 2) {
        $(`#dstars${counter}`).children().slice(0,1).css('color','yellow');
    } else if(Math.round(data.results[i].vote_average) <= 4) {
        $(`#dstars${counter}`).children().slice(0,2).css('color','yellow');
    } else if(Math.round(data.results[i].vote_average) <= 6) {
        $(`#dstars${counter}`).children().slice(0,3).css('color','yellow');
    } else if(Math.round(data.results[i].vote_average) <= 8) {
        $(`#dstars${counter}`).children().slice(0,4).css('color','yellow');
    } else {
        $(`#dstars${counter}`).children().slice(0,5).css('color','yellow');
    }
};
/*
import data from "./movies.json" assert { type: "json" };
const container = $('#container');

for(let i=0; i < data.results.length; i++) {
    const posterDiv = document.createElement('div').addClass('poster').text();
    posterElem = div.addClass('poster');
    titleElem = div.addClass('title');
    container.append(`<img class='poster' src="${data.results[i].poster_path}" alt="adimg">`);
    container.append(`<div class='title'>${data.results[i].original_title}</div>`);
};
let titleArr = $('.title');

for(let i=0; i < titleArr.length; i++) {
    titleArr[i].append(`<div class='legend'>${data.results[i].overview}</div>`);
};

//append(`<img src="${elem.poster_path}" alt="adimg" class="poster">`);
/*<div id="container">
        <div class="card">
            
            <div class="title">
                
                <div class="legend">
                    
                </div>
            </div>
        </div>
    </div>
    
        data.results.forEach(function(elem) { if(elem.poster_path) {
    $('.container').append(`<img src="${elem.poster_path}" alt="adimg" class="poster">`);
    } else if(elem.original_title) {
        $('.card').append(`<div class="title">${elem.original_title}</div>`);
    } else if(elem.overview) {
        $('.title').append(`<div class="legend">${elem.overview}</div>`);
    } else {
        return console.log('echec')
    }

    if(Math.round(data.results[i].vote_average) <= 2) {
        $(`#dstars${counter}`).children().slice(0,1).css('color','yellow');
    } else if(Math.round(data.results[i].vote_average) <= 4) {
        $(`#dstars${counter}`).children().slice(0,2).css('color','yellow');
    } else if(Math.round(data.results[i].vote_average) <= 6) {
        $(`#dstars${counter}`).children().slice(0,3).css('color','yellow');
    } else if(Math.round(data.results[i].vote_average) <= 8) {
        $(`#dstars${counter}`).children().slice(0,4).css('color','yellow');
    } else {
        $(`#dstars${counter}`).children().slice(0,5).css('color','yellow');
    }
});*/