function toggleTheme() {
    const themeLink = document.getElementById('theme-stylesheet');
    if (themeLink.getAttribute('href') === 'themes/theme-light.css') {
        themeLink.setAttribute('href', 'themes/theme-dark.css');
    } else {
        themeLink.setAttribute('href', 'themes/theme-light.css');
    }
}
