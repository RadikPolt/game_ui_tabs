let tab = function () {
	let tabNav = document.querySelectorAll('.ba-tab'),
		tabContent = document.querySelectorAll('.ba-content'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});
	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('active');
		});
		this.classList.add('active');
		tabName = this.getAttribute('data-tab');
		console.log(tabName);

		selectTabContent(tabName);
	}

	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.id == tabName ? item.classList.add('active') : item.classList.remove('active');
		})
	}

};


tab();