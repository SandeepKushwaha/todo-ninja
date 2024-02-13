/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', 'dark')

  const getPreferredTheme = () => {

    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' === 'dark') {
      if (document.getElementById("app-css") !== null) {
        const linkElement = document.getElementById("app-css");
        linkElement.href =
          storedTheme === 'dark' ? "./assets/css/index.css"
            : storedTheme === 'light' ? "./assets/css/index-light.css" : "./assets/css/index.css";
      } else {
        // Step 1: Create a new <link> element.
        const linkElement = document.createElement('link');

        // Step 2: Set attributes and properties.
        linkElement.rel = 'stylesheet';
        linkElement.type = 'text/css';
        linkElement.href = './assets/css/index.css';

        // Step 3: Append the element to the <head> element.
        const headElement = document.head;
        headElement.appendChild(linkElement);
      }

      // console.log('href', linkElement.href)
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    // Custum Style Switcher
    // Step 1: Get a reference to the <link> element by its id ("app-css").
    const linkElement = document.getElementById("app-css");

    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      // // Step 2.1: Change the href attribute to the new stylesheet URL.
      // if (theme === 'dark' && linkElement) {
      //   linkElement.href = "/assets/css/index.css";
      // }
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);

      // // Step 2.2: Change the href attribute to the new stylesheet URL.
      // if (theme === 'light' && linkElement) {
      //     linkElement.href = "/assets/css/index-light.css";
      // }
    }

    if (linkElement) {
      linkElement.href =
        theme === 'dark' ? "./assets/css/index.css"
          : theme === 'light' ? "./assets/css/index-light.css" : "./assets/css/index.css";
    }
  }

  // setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })

  setTheme(getPreferredTheme())
})()
