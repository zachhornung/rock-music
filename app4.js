// app1
function WhatIsYourFavoriteInstrument(){
    let favoriteInstrument = prompt('What is your favorite instrument, guitar, bass, or drums? Please, no caps.');
    

    document.write(favoriteInstrument);

    return favoriteInstrument;
}
// app2

function FavoriteInstrumentMessage(){
    if (favoriteInstrument == 'guitar'){
        document.write('<h3>' + 'Check out the Guitars tab for more information!' + '</h3>');
    } else if (favoriteInstrument == 'bass'){
        document.write('<h3>' + 'you should probably practice more! Check out the Bass tab for more information' + '</h3>');
    } else if (favoriteInstrument == 'drums'){
        document.write('<h3>' + 'Youre going to need some power to play on this stage! Check out the Drums tab for more information');
    } else 
        document.write('<h3>' + 'Pick up one of the instruments listed above and get practicing!');
}
// app3

function ImageChange(){
    if (favoriteInstrument == 'guitar'){
        document.write('<img src="https://www.two-notes.com/wp-content/uploads/2017/12/MG_0535-750x500.jpg">');
    } else if (favoriteInstrument == 'bass'){
        document.write('<img src="https://images.assetsdelivery.com/compings_v2/eugenesergeev/eugenesergeev1801/eugenesergeev180100342.jpg">');
    } else if (favoriteInstrument == 'drums'){
        document.write('<img src="https://static01.nyt.com/images/2020/01/14/arts/14audio/merlin_166945563_82896f65-e535-4e20-bf61-9a2bb4c7e688-superJumbo.jpg">');
    } else 
        document.write('<img src="http://www.jimbus.org/wp-content/uploads/2017/09/GFGHHJKJKJKKKJK-400x300.jpg">');
    
}
function MakeImage(){
    let PicNumber = prompt('on a scale of 1 to 5, how much do you like that instrument');
    while (PicNumber <1 || PicNumber > 5){
        PicNumber = prompt('Error. On a scale of 1 to 5, how much do you like that instrument?')
    }
    for (let i = 0; i < PicNumber - 1; i++){
        ImageChange()}
}