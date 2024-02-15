let sidebar_width = "17%";
	if (window.innerWidth <= 1024 && window.innerWidth > 576) {
		sidebar_width = "25%";
	} else if (window.innerWidth <= 576) {
		sidebar_width = "70%";
	}

	function openNav() {
		document.getElementById("mySidenav").style.width = sidebar_width;
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0%";
	}

	document.addEventListener("DOMContentLoaded", function () {
		setTimeout(function () {
			document.querySelector("#flash_message .alert").remove();
			document.querySelector("#flash_message").style.display = "none";
		}, 4000);

		window.addEventListener("resize", function () {
			if (window.innerWidth < 768 && window.innerWidth >= 576) {
				sidebar_width = "25%";
			} else if (window.innerWidth <= 576) {
				sidebar_width = "70%";
			}
		});

		document.querySelector(".sidebar_menu_btn").addEventListener("click", function () {
			openNav();
		});

		document.querySelector(".closebtn").addEventListener("click", function () {
			closeNav();
		});

		let actives = window.location.pathname.split('/');
		let active = actives[actives.length - 1].split('.')[0];
		let sidenavLinks = document.querySelectorAll('.sidenav a');
		sidenavLinks.forEach(function (link) {
			link.classList.remove('active');
		});
		document.querySelector("#footer").style.display = "block";
		if (active == 'home' || active == '') {
			document.querySelector("a#home").classList.add("active");
		} else if (active == 'startups') {
			document.querySelector("a#startups").classList.add("active");
		} else if (active == 'enterprise') {
			document.querySelector("a#enterprise").classList.add("active");
		} else if (active == 'career') {
			document.querySelector("a#career").classList.add("active");
		} else if (active == 'blogs') {
			document.querySelector("a#blogs").classList.add("active");
		} else if (active == 'FAQ') {
			document.querySelector("a#FAQ").classList.add("active");
		} else if (active == 'about') {
			document.querySelector("a#about").classList.add("active");
		} else if (active == 'contact_us') {
			document.querySelector("a#contact_us").classList.add("active");
		}
	});