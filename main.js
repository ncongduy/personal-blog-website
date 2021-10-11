const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
let isOpen = false;

mobileMenu.addEventListener('click', () => {
	if (!mobileMenu) return;

	if (!navList) return;

	isOpen = !isOpen;

	if (isOpen) {
		navList.classList.add('open');
	} else {
		navList.classList.remove('open');
	}
});

navList.addEventListener('click', () => {
	navList.classList.remove('open');
	isOpen = false;
});
