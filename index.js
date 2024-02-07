const yesBtn = document .querySelector('#yesBtn');
yesBtn.addEventListener('click',function () {
alert('Sabia que mi amor bella diría que si :3 Te amo Laura amor de mi vida')
});

const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

})