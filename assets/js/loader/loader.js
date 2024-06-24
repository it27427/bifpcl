const hidePreloader = () => {
  const preloader = document.querySelector('#preloader');
  preloader.classList.add('d-none');
};

window.addEventListener('load', hidePreloader);
