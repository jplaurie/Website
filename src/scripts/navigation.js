import { normalizePath } from '../utils/paths';

document.querySelectorAll('.nav-toggle').forEach((button) => {
  const navigation = document.getElementById(button.getAttribute('aria-controls'));

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!expanded));
    navigation?.classList.toggle('is-open', !expanded);
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });
});

const updateProjectNavigation = () => {
  const currentPath = normalizePath(window.location.pathname);
  const currentHash = window.location.hash;

  document.querySelectorAll('.project-links').forEach((navigation) => {
    navigation.querySelectorAll('[data-nav-link]').forEach((link) => {
      const target = new URL(link.href, window.location.href);
      const isCurrent = normalizePath(target.pathname) === currentPath
        && (!target.hash || target.hash === currentHash);

      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    navigation.querySelectorAll('[data-nav-group]').forEach((group) => {
      group.classList.toggle('is-current', Boolean(group.querySelector('[aria-current="page"]')));
    });
  });
};

updateProjectNavigation();
window.addEventListener('hashchange', updateProjectNavigation);
