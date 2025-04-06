const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const spans = menuBtn.querySelectorAll('span');
    const logo = document.getElementById('nav-logo');

    function toggleMenu() {
      mobileMenu.classList.toggle('hidden');
      setTimeout(() => {
        mobileMenu.classList.toggle('-translate-y-full');
        mobileMenu.classList.toggle('opacity-0');
      }, 10);

      // Animate hamburger icon
      spans[0].classList.toggle('rotate-45');
      spans[0].classList.toggle('translate-y-2');
      spans[1].classList.toggle('opacity-0');
      spans[2].classList.toggle('-rotate-45');
      spans[2].classList.toggle('-translate-y-2');

      // Animate logo scale
      logo.classList.toggle('scale-110');
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a menu link
    document.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', toggleMenu);
    });

    // Reset on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden', '-translate-y-full', 'opacity-0');

        spans[0].classList.remove('rotate-45', 'translate-y-2');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45', '-translate-y-2');

        logo.classList.remove('scale-110');
      }
    });



    document.getElementById("videoContainer").addEventListener("click", function () {
      document.getElementById("videoContainer").classList.add("hidden");
      document.getElementById("videoIframeContainer").classList.remove("hidden");
    });