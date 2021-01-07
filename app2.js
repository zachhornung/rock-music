if (favoriteInstrument == 'guitar', 'Guitar'){
    document.write('<h3>' + 'Check out the Guitars tab for more information!' + '</h3>')
} else if (favoriteInstrument == 'bass', 'Bass'){
    document.write('<h3>' + 'you should probably practice more! Check out the Bass tab for more information' + '</h3>')
} else if (favoriteInstrument == 'drums', 'Drums'){
    document.write('<h3>' + 'Youre going to need some power to play on this stage! Check out the Drums tab for more information')
} else if (favoriteInstrument != 'guitar','bass','drums'){
    document.write('<h3>' + 'Pick up one of the instruments listed above and get practicing!')
}