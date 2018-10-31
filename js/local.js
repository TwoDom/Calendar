function hideNotice(){
  document.getElementById('cookie-notice').classList.add('hide');
  localStorage.setItem('showCookieNotice', 'false');
}

function showNotice(){
  if(localStorage.getItem('showCookieNotice') !== 'false'){
    document.getElementById('cookie-notice').classList.remove('hide');
  }
}

window.onload = showNotice();
document.getElementById("cookie-notice-button").addEventListener("click", hideNotice);
