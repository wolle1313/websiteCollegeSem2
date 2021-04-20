const pics = document.querySelectorAll('.flyinPics');
const stars = document.querySelectorAll('.click');
const btnRandom = document.querySelector('.btnRandom');
const imgRandom = document.querySelector('.imgRandom');
const spanRandom = document.querySelector('.spanRandom');
window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 400) {
    pics.forEach(pic => {
        pic.style.animation = "fly .5s linear both";
    });
    }
})

stars.forEach(star =>  {
    star.addEventListener('click', function() {
        const id = this.id;

        if (id == 'maimaiS') {
            star.textContent = "4.2/5";
        }
        else if (id == 'maimaiN') {
            star.textContent = "421";
        }
        else if (id == 'sajgonekS')  {
            star.textContent = "4.2/5";
        }
        else if (id == 'sajgonekN')  {
            star.textContent = "546";
        }
        else if (id == 'phuongnamS')  {
            star.textContent = "3.2/5";
        }
        else if (id == 'phuongnamN')  {
            star.textContent = "225";
        }
        else if (id == 'vansonS')  {
            star.textContent = "3.8/5";
        }
        else if (id == 'vansonN')  {
            star.textContent = "269";
        }
        else {
            star.textContent = "-";
        }
    })
})

btnRandom.addEventListener('click', function() {
    const number = Math.random()*4;
    if(number < 1) {
        imgRandom.src = "pics/maimai.jpg";
        spanRandom.textContent = "Mai-Mai";
    }
   else if(number < 2) {
        imgRandom.src = "pics/sajgonek.jpg";
        spanRandom.textContent = "Sajgonek";
    }
   else if(number < 3) {
        imgRandom.src = "pics/phuongnam.jpg";
        spanRandom.textContent = "Phuong-Nam";
    }
   else if(number < 4) {
        imgRandom.src = "pics/vanson.jpg";
        spanRandom.textContent = "Van Son";
    }
})


