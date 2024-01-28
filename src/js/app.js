const parallax_el = document.querySelectorAll('.parallax-item')
const parallax = document.querySelector('.parallax')
let xValue = 0,
	yValue = 0

let rotateDegree = 0

function update(cursorPosition) {
	parallax_el.forEach(el => {
		let speedx = el.dataset.speedx
		let speedy = el.dataset.speedy
		let speedz = el.dataset.speedz
		let rotateSpeed = el.dataset.rotation
		let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1
		let zValue = cursorPosition - parseFloat(getComputedStyle(el).left) * isInLeft * 0.1
		el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${
			yValue * speedy
		}px)) perspective(4400px) translateZ(${zValue * speedz}px) rotate(${rotateDegree * rotateSpeed}deg)`
	})
}
update(0)
window.addEventListener('mousemove', e => {
	if (timeline.isActive()) return
	xValue = e.clientX - window.innerWidth / 2
	yValue = e.clientY - window.innerHeight / 2
	rotateDegree = (xValue / (window.innerWidth / 2)) * 20
	update(e.clientX)
})

// if (window.innerWidth >= 725) {
// 	parallax.style.maxHeight = `${window.innerWidth * 0.6}px`
// } else {
// 	parallax.style.maxHeight = `${window.innerWidth * 1.6}px`
// }

// gsap animation

let timeline = gsap.timeline()

Array.from(parallax_el)
	.filter(el => !el.classList.contains('text'))
	.forEach(el => {
		timeline.from(
			el,
			{
				top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
				duration: 3.5,
				ease: 'power3.out',
			},
			'1'
		)
	})
timeline
	.from(
		'.text h1',
		{
			y: window.innerHeight - document.querySelector('.text h1').getBoundingClientRect().top,
			duration: 2,
		},
		'2.5'
	)
	.from(
		'.text h2',
		{
			y: -200,
			opacity: 0,
			duration: 1.5,
		},
		'3'
	)
	.from(
		'.hide',
		{
			opacity: 0,
			duration: 1.5,
		},
		'3'
	)

//====================================================================================================
const msgStatus = document.querySelector('.msg-status')

console.log(document.location.search)

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success')
	msgStatus.textContent = 'wiadomość wysłana'

	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
}
if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error')
	msgStatus.textContent = 'wystąpił błąd, spróbuj ponownie.'

	setTimeout(() => {
		msgStatus.classList.remove('error')
	}, 3000)
}
//========================================================================================================================================
const navMobile = document.querySelector('.mobile-nav-box')
const navBox = document.querySelector('.nav-box')
// const navMobile = document.querySelector('.wrap')
const barsBtn = document.querySelector('.hamburger')
const navLinks = document.querySelectorAll('.link')
const circleMenu = document.querySelector('.circle-menu')

const handleNav = () => {
	barsBtn.classList.toggle('is-active')

	navMobile.classList.toggle('none')
	navMobile.classList.toggle('nav-mobile-style-two')
	navBox.classList.toggle('nav-mobile-style')

	// navMobile.classList.toggle('wrap-block')

	// document.body.classList.toggle('sticky-body')
}
// const closeNav = () => {
// 	navMobile.classList.add('none')
// }
navLinks.forEach(item =>
	item.addEventListener('click', () => {
		navMobile.classList.add('none')
		barsBtn.classList.remove('is-active')
		navMobile.classList.remove('nav-mobile-style-two')
		navBox.classList.remove('nav-mobile-style')
		// circleMenu.classList.remove('circle-back')
	})
)
// const circleGoBack = () => {
// 	circleMenu.classList.add('circle-back')
// }
// const removeStickyBody = () => {
// 	document.body.classList.remove('sticky-body')
// 	navMobile.classList.remove('wrap-block')
// 	navMobile.classList.add('none')
// 	navBtn.classList.remove('is-active')
// }
barsBtn.addEventListener('click', handleNav)
// navMobile.addEventListener('click', removeStickyBody)
// navLinks.addEventListener('click', closeNav)
// circleMenu.addEventListener('click', circleGoBack)
// const removeZindex = () => {
// 	circleMenu.classList.remove('circle-back')
// }
// window.addEventListener('click',removeZindex)
// if (circleMenu.classList(contains('circle-back'))) {
// 	window.addEventListener(
// 		'click',
// 		(removeZindex = () => {
// 			circleMenu.classList.remove('circle-back')
// 		})
// 	)
// }
// const removeZindex = () => {
// 	circleMenu.classList.remove('circle-back')
// }
// window.addEventListener('click', removeZindex)
