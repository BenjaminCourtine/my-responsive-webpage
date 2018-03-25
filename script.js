window.onload = function () {

    var btnAll = document.querySelector('.btn-all');
    var btnPanoramas = document.querySelector('.btn-panoramas');
    var btnPortraits = document.querySelector('.btn-portraits');
    var btnMacro = document.querySelector('.btn-macro');
    var btnJournal = document.querySelector('.btn-journal');

    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var img3 = document.querySelector('.img3');
    var img4 = document.querySelector('.img4');
    var img5 = document.querySelector('.img5');
    var img6 = document.querySelector('.img6');
    var img7 = document.querySelector('.img7');
    var img8 = document.querySelector('.img8');

    btnAll.addEventListener("click", function () {
        img3.classList.remove('hidden');
        img4.classList.remove('hidden');
        img5.classList.remove('hidden');
        img1.classList.remove('hidden');
        img2.classList.remove('hidden');
        img6.classList.remove('hidden');
        img7.classList.remove('hidden');
        img8.classList.remove('hidden');
    });

    btnPanoramas.addEventListener("click", function () {
        img3.classList.add('hidden');
        img4.classList.add('hidden');
        img5.classList.add('hidden');
        img1.classList.remove('hidden');
        img2.classList.remove('hidden');
        img6.classList.remove('hidden');
        img7.classList.remove('hidden');
        img8.classList.remove('hidden');
    });

    btnPortraits.addEventListener("click", function () {
        img3.classList.remove('hidden');
        img4.classList.remove('hidden');
        img5.classList.remove('hidden');
        img1.classList.remove('hidden');
        img2.classList.add('hidden');
        img6.classList.remove('hidden');
        img7.classList.add('hidden');
        img8.classList.remove('hidden');
    });

    btnMacro.addEventListener("click", function () {
        img3.classList.add('hidden');
        img4.classList.remove('hidden');
        img5.classList.remove('hidden');
        img1.classList.remove('hidden');
        img2.classList.remove('hidden');
        img6.classList.remove('hidden');
        img7.classList.remove('hidden');
        img8.classList.remove('hidden');
    });

    btnJournal.addEventListener("click", function () {
        img3.classList.add('hidden');
        img4.classList.remove('hidden');
        img5.classList.remove('hidden');
        img1.classList.remove('hidden');
        img2.classList.add('hidden');
        img6.classList.add('hidden');
        img7.classList.remove('hidden');
        img8.classList.remove('hidden');
    });
};