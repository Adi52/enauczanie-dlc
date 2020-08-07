const burgerBtn = document.querySelector('.burger');
const navLinks = document.querySelectorAll('nav ul li');

burgerBtn.addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');

    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade .5s ease forwards ${.5 + index / 7}s`;
        }
    })

    // Burger animation
    burgerBtn.classList.toggle('toggle');
});


(function() {
    let button = document.getElementById('button_doom_id');
    button.addEventListener('click', function () {
        let image = document.getElementById('image_doom_id');
        if (image.style.display === 'block') {
            image.style.display = 'none';
            button.innerText = 'Pokaż obrazek';
        } else {
            image.style.display = 'block';
            button.innerText = 'Schowaj obrazek';
        }
    });
}());

const dlcWrapper = document.querySelector('.content-quiz .dlc-wrapper');
const dlcExpand = document.querySelector('.content-quiz .expand ');

document.querySelector('button.dlc').addEventListener('click', function() {
    document.querySelector('button.dlc').disabled = 'true'
   dlcWrapper.style.display = 'flex';
   dlcExpand.style.display = 'block';
   document.querySelector('.answer .correct').checked = 'true';
   document.querySelector('.quiz .answer i').style.display = 'inline-block';
   document.querySelector('.container-quiz button.dlc').style.backgroundColor = '#d07501';
   document.querySelector('.container-quiz button.dlc').classList.remove('shake');
   angryDevil();
});

function angryDevil() {
    let devilImg = document.querySelector('.devil .devil-img');
    setTimeout(function() {
        document.querySelector('.devil span.devil-talk').style.display = 'none';
        devilImg.src = 'img/devil/devil2.png';
        document.querySelector('.mo-fire').classList.add('active');
    }, 2000);
    setTimeout(function() {devilImg.src = 'img/devil/devil3.png'}, 2050);




}



