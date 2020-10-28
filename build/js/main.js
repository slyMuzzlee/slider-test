var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [45, 250],
    connect: true,
    tooltips: [wNumb({decimals: 0, prefix: '$'}), wNumb({decimals: 0, prefix: '$'})],
    range: {
        'min': 0,
        'max': 350
    }
});
