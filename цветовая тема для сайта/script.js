const btn = document.querySelector('.favorite'); 

function initialState(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName; //documentElement = html
}

function toggleTheme() {
   if (localStorage.getItem('theme') == 'dark-theme') {
      initialState('light-theme');
   } else {
      initialState('dark-theme');
   }
}

btn.addEventListener('click', (e) => {
   toggleTheme();
})