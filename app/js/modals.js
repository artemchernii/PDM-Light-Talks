var body = document.querySelector("body");
var modals = document.querySelectorAll(".modals");
var modal1 = document.querySelector("#modal1");
var modal2 = document.querySelector("#modal2");
var modal3 = document.querySelector("#modal3");
var modal4 = document.querySelector("#modal4");
var modal5 = document.querySelector("#modal5");
var modal1content = document.querySelector('#modal1_content');
var modal2content = document.querySelector('#modal2_content');
var modal3content = document.querySelector('#modal3_content');
var modal4content = document.querySelector('#modal4_content');
var modal5content = document.querySelector('#modal5_content');
var trigger1 = document.querySelector(".trigger1");
var trigger2 = document.querySelector(".trigger2");
var trigger3 = document.querySelector(".trigger3");
var trigger4 = document.querySelector(".trigger4");
var trigger5 = document.querySelector(".trigger5");
var closeButton = document.querySelectorAll(".close-button");
var modalimg = document.querySelectorAll('.modal_img');
var modalTitle = document.querySelectorAll('.modals_content__text-title');
var modalQuestion = document.querySelectorAll('.modals_content__text-quest');
var modalDescrImg = document.querySelectorAll('.modals_content__descr-img');
var hideImg = document.querySelectorAll('.modals_content__hideimg');
var triggerImg = document.querySelectorAll('.nexttalks_speaker__img');


var modalsSpan1 = document.querySelector('.modals_content__descr-span-1');
var modalsSpan2 = document.querySelector('.modals_content__descr-span-2');
var modalsSpan3 = document.querySelector('.modals_content__descr-span-3');
var modalsSpan4 = document.querySelector('.modals_content__descr-span-4');
var modalsSpan5 = document.querySelector('.modals_content__descr-span-5');

function toggleModal1(e) {
	e.preventDefault();

	this.children[0].classList.toggle('selected_popup');
	this.children[0].querySelector('img').classList.add('selected_img');
	modal1.classList.toggle("show-modal");
	setTimeout(() => {
		modal1content.classList.toggle("content-down");
	}, 300);

	var i = 0;
	var txt = `O Nuno está na PDMFC desde 2002, intervindo principalmente em programação. Lidou com um conjunto de linguagens de programação, fora do mundo MS. Gosta de mapping, navegação, fotografia e, essencialmente, estar ao ar livre, seja em dois pés, duas rodas ou quatro rodas AWD. Também gosta muito dos side tidbits que acompanham os seus principais interesses, portanto ficam precavidos sobre poderem achá-lo um tanto aborrecido se ele começar a falar de tortura medieval ou outro tema relevante...`;
	var speed = 5;

	function typeWriter() {
		if (i < txt.length) {
			modalsSpan1.innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	setTimeout(() => {
		modalimg.forEach(item => item.classList.toggle("img-modal-animation"));
	}, 1200);
	setTimeout(() => {
		modalTitle.forEach(item => item.classList.toggle("modal-opacity"));
		closeButton.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1400);
	setTimeout(() => {
		modalQuestion.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1600);
	setTimeout(() => {
		modalDescrImg.forEach(item => item.classList.toggle('whitecross-animation'))
	}, 1800);

	setTimeout(typeWriter, 2500);
	body.style.overflow = "hidden";
}

function toggleModal2(e) {
	e.preventDefault();

	this.children[0].classList.toggle('selected_popup');
	this.children[0].querySelector('img').classList.add('selected_img');
	modal2.classList.toggle("show-modal");
	setTimeout(() => {
		modal2content.classList.toggle("content-down");
	}, 300);

	var i = 0;
	var txt = `Licenciado, pós-graduado e mestre em Comunicação, em Multimédia e em Marketing. Aos 21 anos, iniciou o seu percurso profissional na área dos media e em paralelo no universo das artes. Participou em festivais de cinema nacionais e internacionais, com filmes da sua autoria. Além de músico, marketeer e realizador, é também fotógrafo, tendo formação em Fotografia Analógica.`;
	var speed = 5;

	function typeWriter() {
		if (i < txt.length) {
			modalsSpan2.innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	setTimeout(() => {
		modalimg.forEach(item => item.classList.toggle("img-modal-animation"));
	}, 1200);
	setTimeout(() => {
		modalTitle.forEach(item => item.classList.toggle("modal-opacity"));
		closeButton.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1400);
	setTimeout(() => {
		modalQuestion.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1600);
	setTimeout(() => {
		modalDescrImg.forEach(item => item.classList.toggle('whitecross-animation'))
	}, 1800);

	setTimeout(typeWriter, 2500);
	body.style.overflow = "hidden";
}

function toggleModal3(e) {
	e.preventDefault();

	this.children[0].classList.toggle('selected_popup');
	this.children[0].querySelector('img').classList.add('selected_img');
	modal3.classList.toggle("show-modal");
	setTimeout(() => {
		modal3content.classList.toggle("content-down");
	}, 300);

	var i = 0;
	var txt = `Marcelo está com 30 anos de idade, casado, desenvolvedor web e amante de desporto radical, sobretudo o skateboard! Desde os 13 anos que pratica e acompanha o skateboard.`;
	var speed = 5;

	function typeWriter() {
		if (i < txt.length) {
			modalsSpan3.innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	setTimeout(() => {
		modalimg.forEach(item => item.classList.toggle("img-modal-animation"));
	}, 1200);
	setTimeout(() => {
		modalTitle.forEach(item => item.classList.toggle("modal-opacity"));
		closeButton.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1400);
	setTimeout(() => {
		modalQuestion.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1600);
	setTimeout(() => {
		modalDescrImg.forEach(item => item.classList.toggle('whitecross-animation'))
	}, 1800);

	setTimeout(typeWriter, 2500);
	body.style.overflow = "hidden";
}

function toggleModal4(e) {
	e.preventDefault();

	this.children[0].classList.toggle('selected_popup');
	this.children[0].querySelector('img').classList.add('selected_img');
	modal4.classList.toggle("show-modal");
	setTimeout(() => {
		modal4content.classList.toggle("content-down");
	}, 300);

	var i = 0;
	var txt = `Rui Campos é um dos fundadores da PDMFC, conhecido pela frase "Sou o mais importante, pois sou eu quem te paga o salário!". Economista e livre-pensador, é um dos mais importantes filósofos mundiais da escola Neo Socrática -"E agora... algo completamente diferente!"`;
	var speed = 5;

	function typeWriter() {
		if (i < txt.length) {
			modalsSpan4.innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	setTimeout(() => {
		modalimg.forEach(item => item.classList.toggle("img-modal-animation"));
	}, 1200);
	setTimeout(() => {
		modalTitle.forEach(item => item.classList.toggle("modal-opacity"));
		closeButton.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1400);
	setTimeout(() => {
		modalQuestion.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1600);
	setTimeout(() => {
		modalDescrImg.forEach(item => item.classList.toggle('whitecross-animation'))
	}, 1800);

	setTimeout(typeWriter, 2500);
	body.style.overflow = "hidden";
}

function toggleModal5(e) {
	e.preventDefault();

	this.children[0].classList.toggle('selected_popup');
	this.children[0].querySelector('img').classList.add('selected_img');
	modal5.classList.toggle("show-modal");
	setTimeout(() => {
		modal5content.classList.toggle("content-down");
	}, 300);

	var i = 0;
	var txt = `O Diogo tem 27 anos e é fullstack developer na PDMFC e interessado na área de poupanças. Aos 18 anos de idade, o seu avô passou-lhe uma conta poupança que tinha criado quando ele nasceu. Após ver o rendimento quase nulo, iniciou esta demanda por perceber como poupar e investir eficazmente.`;
	var speed = 5;

	function typeWriter() {
		if (i < txt.length) {
			modalsSpan5.innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	setTimeout(() => {
		modalimg.forEach(item => item.classList.toggle("img-modal-animation"));
	}, 1200);
	setTimeout(() => {
		modalTitle.forEach(item => item.classList.toggle("modal-opacity"));
		closeButton.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1400);
	setTimeout(() => {
		modalQuestion.forEach(item => item.classList.toggle("modal-opacity"));
	}, 1600);
	setTimeout(() => {
		modalDescrImg.forEach(item => item.classList.toggle('whitecross-animation'))
	}, 1800);

	setTimeout(typeWriter, 2500);
	body.style.overflow = "hidden";
}

function windowOnClick(event) {
	if (event.target.classList.contains("modals")) {
		closePopup();
	}
}

function closePopup() {
	modal1content.classList.remove("show-modal-content");
	modal1content.classList.remove("content-down");
	setTimeout(() => {
		modals.forEach(item => item.classList.remove("show-modal"));
		modalimg.forEach(item => item.classList.remove("img-modal-animation"));
		modalTitle.forEach(item => item.classList.remove("modal-opacity"));
		closeButton.forEach(item => item.classList.remove("modal-opacity"));
		modalQuestion.forEach(item => item.classList.remove("modal-opacity"));
		modalDescrImg.forEach(item => item.classList.remove('whitecross-animation'));
		modalsSpan1.innerHTML = '';
		body.style.overflow = "auto";
	}, 150);
	setTimeout(() => {
		triggerImg.forEach(item => item.classList.remove('selected_popup'));
		triggerImg.forEach(item => item.querySelector('img').classList.remove('selected_img'));
	}, 500)
}

hideImg.forEach(item => item.addEventListener('click', closePopup));

document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		closePopup();
	}
};

trigger1.addEventListener("click", toggleModal1);
trigger2.addEventListener("click", toggleModal2);
trigger3.addEventListener("click", toggleModal3);
trigger4.addEventListener("click", toggleModal4);
trigger5.addEventListener("click", toggleModal5);

closeButton.forEach(elem => elem.addEventListener("click", closePopup));
window.addEventListener("click", windowOnClick);

// hero section


const switchBtn = document.querySelector('.intro_turnbtn'),
	switchImg = document.querySelector('.intro_turnbtn__btn'),
	bulbImg = document.querySelector('.intro-bulb'),
	introImg = document.querySelector('.intro-img'),
	bulbSrc = bulbImg.src,
	introSrc = introImg.src,
	switchOn = 'img/switch_on.svg',
	switchOff = 'img/switch_off.svg',
	switchOffplus = 'img/switch_off+.svg',
	nav = document.querySelectorAll('.main-nav a'),
	mainSection = document.getElementById('main'),
	arrowNext = document.querySelector('.link_next-img'),
	yellowBuble = document.querySelector('.yellow_bubble'),
	inHeader = document.querySelector('.index_header');

const intro = document.querySelector('#intro');
const introinfo = document.querySelector('.intro_turnbtn');
const intrologo = document.querySelector('#intro_logo');
const hint = document.querySelector('.intro_hint');

function colorPurple() {
	nav.forEach(el => {
		el.style.color = "#122155";
	})
	main.style.backgroundColor = "#FFCB04"
}

function colorWhite() {
	nav.forEach(el => {
		el.style.color = "#ffffff";
	})
	main.style.backgroundColor = "#122155";
}

function checkSwitcher() {
	let src = switchImg.src,
		arr = src.split('');
	arr.reverse();
	arr = arr.join('');
	let c = arr.slice(0, 17),
		res = c.split('');
	res.reverse();
	res = res.join('');
	return res;
}

function changeAll() {
	let res = checkSwitcher();
	let indexBody = document.querySelector('#indexbody');
	yellowBuble.classList.add('yellow_bubble_blow');
	if (res === switchOn) {
		switchImg.src = switchOff;
		switchImg.classList.add('intro_turnbtn_hide');
		bulbImg.src = 'img/bulb2.svg';
		arrowNext.classList.add('link_next-img-hover');
		intrologo.classList.add('hint_stop');
		hint.style.display = 'none';
		setTimeout(() => {
			switchImg.classList.remove('intro_turnbtn_hide');
			switchImg.classList.add('intro_turnbtn_show');
			switchImg.src = switchOffplus;
			introImg.src = 'img/intro2.svg';
			indexBody.style.overflowY = "auto";
			inHeader.style.display = 'block';
			colorPurple();
		}, 500)
		setTimeout(() => {
			yellowBuble.classList.remove('yellow_bubble_blow');
		}, 700)
	} else {
		switchImg.classList.remove('intro_turnbtn_hide');
		switchImg.classList.remove('intro_turnbtn_show');
		switchImg.src = switchOn;
		arrowNext.classList.remove('link_next-img-hover');
		yellowBuble.classList.remove('yellow_bubble_blow');
		bulbImg.src = bulbSrc;
		introImg.src = introSrc;
		inHeader.style.display = 'none';
		intrologo.classList.remove('hint_stop');
		indexBody.style.overflowY = "hidden";
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		colorWhite();
	}
}

function switcher(e) {
	e.preventDefault();
	changeAll();
}
switchBtn.addEventListener('dblclick', () => {
	return false;
});
switchBtn.addEventListener('click', switcher);




// HINT
hint.addEventListener('click', (e) => {
	e.preventDefault();
	changeAll();
})

intro.addEventListener('click', () => {
	if (hint.classList.contains('hint_show')) {
		hint.classList.add('hint_hide');
		hint.classList.remove('hint_show');
	}
})
// intro.addEventListener('mouseover', () => {
// 	if (!hint.classList.contains('hint_show')) {
// 		hint.classList.remove('hint_hide');
// 		hint.classList.add('hint_show');
// 		hint.style.display = 'block';
// 		hint.style.opacity = 0;
// 	}
// })
// setTimeout(() => {
// 	if (!hint.classList.contains('hint_show')) {
// 		hint.classList.remove('hint_hide');
// 		hint.classList.add('hint_show');
// 		hint.style.display = 'block';
// 		hint.style.opacity = 0;
// 	}
// }, 2000)
intrologo.addEventListener('mouseover', () => {
	if (!hint.classList.contains('hint_show')) {
		hint.classList.remove('hint_hide');
		hint.classList.add('hint_show');
		hint.style.display = 'block';
		hint.style.opacity = 0;
	}
})
introinfo.addEventListener('mouseover', () => {
	// setTimeout(() => {
	if (hint.classList.contains('hint_show')) {
		hint.classList.add('hint_hide');
		hint.classList.remove('hint_show');
	}
	// }, 1500)
})