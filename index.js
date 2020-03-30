;(function() {
  const themeMap = {
    dark: {
      cls: 'light',
      url: './sun.png'
    },
    light: {
      cls: 'dark',
      url: './moon.png'
    }
  }
  const el = document.getElementById('theme-toggle')
  el.addEventListener('click', function(e) {
    const theme = themeMap[e.currentTarget.getAttribute('data-theme')]
    document.getElementsByTagName('body')[0].setAttribute('class', theme.cls)
    el.setAttribute('data-theme', theme.cls === 'light' ? 'light' : 'dark')
    el.children[0].setAttribute('src', theme.url)
  })
})()
