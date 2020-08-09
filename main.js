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
        let imageDiv = document.querySelector('.screen');
        if (imageDiv.offsetHeight === 0){
            let image = document.getElementById('image_doom_id');
            imageDiv.style.height = `${image.offsetHeight}px`;
            button.innerText = 'Schowaj obrazek';
        } else {
            imageDiv.style.height = '0px';
            button.innerText = 'Pokaż obrazek';
        }
    });
}());




const dlcWrapper = document.querySelector('.content-quiz .dlc-wrapper');
const dlcExpand = document.querySelector('.content-quiz .expand ');
const dlcBtn = document.querySelector('.container-quiz button.dlc');

dlcBtn.addEventListener('click', function() {
    document.querySelector('button.dlc').disabled = 'true'
    let heightDiv = dlcWrapper.offsetHeight + dlcExpand.offsetHeight;
    document.querySelector('.content-quiz .dlc-full').style.height = `${heightDiv}px`;
    document.querySelector('.answer .correct').checked = 'true';
    document.querySelector('.quiz .answer i').style.display = 'inline-block';
    dlcBtn.style.opacity = '0';
    angryDevil();
    setTimeout(function() {document.querySelector('.content-quiz .dlc-full').style.height = 'auto'}, 300);
});

function angryDevil() {
    let devilImg = document.querySelector('.devil .devil-img');
    setTimeout(function() {
        document.querySelector('.devil span.devil-talk').style.display = 'none';
        devilImg.src = 'img/devil/devil2.png';
        devilImg.classList.add('active');
        document.querySelector('.mo-fire').classList.add('active');
        dlcBtn.style.display = 'none';
    }, 2000);





}



