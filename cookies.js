function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

function acceptCookies() {
  setCookie("stats_cookies", "accepted", 365);
  document.getElementById("cookieBanner").style.display = "none";
  loadAnalytics();
}

function rejectCookies() {
  setCookie("stats_cookies", "rejected", 365);
  document.getElementById("cookieBanner").style.display = "none";
}

function loadAnalytics() {
  const s = document.createElement("script");
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
  s.async = true;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX', { anonymize_ip: true });
}

window.addEventListener("load", () => {
  const consent = getCookie("stats_cookies");
  if (consent === "accepted") loadAnalytics();
  if (!consent) document.getElementById("cookieBanner").style.display = "block";
});
