const translations = {
  pl: {
    // COOKIE
   accept: "Akceptuję",
   reject: "Odrzuć",
   cookies: "Ta strona używa plików cookie do celów statystycznych",
     // NAV
    nav_home: "Strona główna",
    nav_consoles: "Konsole",
    nav_discord: "Discord",

    // HERO
    hero_subtitle: "& Polish Street Simulator Community",

    // SEKCJE – INDEX
    offer_title: "Co oferujemy:",
    offer_1: "🎮 Community Polish Street Simulator",
    offer_2: "🔧 Pomoc w przerabianiu konsol",
    offer_3: "💬 Aktywna społeczność Discord",
    offer_4: "🛠️ Poradniki i wsparcie techniczne",

    welcome_title: "Polish Street Simulator Community",
    welcome_p1: "Witaj w oficjalnej społeczności graczy Polish Street Simulator!",
    welcome_p2: "Dołącz do nas, poznaj ekipę, podziel się swoimi pomysłami i bierz udział w eventach!",
    game_link: "Link do gry będzie jak skończymy pierwsze prace",
    news: "Aktualności",
    community_event: "Nowy event community",
    soon: "Wkrótce!",
    updates: "Nowe aktualizacje gry",
    whats_new: "Co Nowego?",

    consoles_help_title: "Pomagamy przerabiać konsole",
    consoles_community: "W naszej społeczności znajdziesz również osoby, które znają się na przerabianiu różnych konsol - od klasycznych retro sprzętów po nowsze generacje. Doradzimy, pomożemy i podpowiemy, jak najlepiej wykorzystać potencjał Twojej konsoli.",
    

    faq_title: "FAQ",
    question_1: "Czy przeróbka jest bezpieczna?", 
    answer_1: "Tak, jeśli jest robiona poprawnie.",
    question_2: "Czy mogę dostać bana za przerobienie konsoli?",
    answer_2: "Tak, dlatego naleśy przerabiać jeśli straci wsparcie internetowe.",

    discord_below: "Na discordzie poniżej znajdziecie poradniki.",
    join_discord: "Dołącz na Discord",
    see_consoles: "Zobacz jakie konsole przerabiamy",
    community_exp: "✔ Doświadczenie community",
    free_help: "✔ Darmowa pomoc",
    retro_gen: "✔ Retro + nowoczesne konsole",
    

    privacy_title: "Polityka prywatności",
    privacy_text: "Strona Retro Games wykorzystuje pliki cookie wyłącznie do celów statystycznych."
  },

  en: {
    //COOKIE
   accept: "Accept", 
   reject: "Reject",
   cookies: "This website uses cookies for statistical purposes",

     // NAV
    nav_home: "Home",
    nav_consoles: "Consoles",
    nav_discord: "Discord",

    // HERO
    hero_subtitle: "& Polish Street Simulator Community",

    // SEKCJE – INDEX
    offer_title: "What we offer:",
    offer_1: "🎮 Polish Street Simulator community",
    offer_2: "🔧 Console modding help",
    offer_3: "💬 Active Discord community",
    offer_4: "🛠️ Guides and technical support",

    welcome_title: "Polish Street Simulator Community",
    welcome_p1: "Welcome to the official Polish Street Simulator community!",
    welcome_p2: "Join us, meet the team, share ideas and take part in events!",
    game_link: "The link to the game will be available once we finish the first work",
    news: "News",
    community_event: "New event community",
    soon: "Soon!",
    updates: "New game updates",
    whats_new: "What's New?",

    consoles_help_title: "We help mod consoles",
    consoles_community: "Our community also includes people who specialize in modding various consoles - from classic retro devices to newer generations. We'll offer advice, assistance, and tips on how to maximize your console's potential.",

    faq_title: "FAQ",
    question_1: "Is the modification safe?",
    answer_1: "Yes, if done correctly.",
    question_2: "Can I get banned for modifying my console?",
    answer_2: "Yes, that's why you need to rework if it loses internet support.",

    discord_below: "On discord you will find guides below.",
    join_discord: "Join Discord",
    see_consoles: "See supported consoles",
    community_exp: "✔ Community experience",
    free_help: "✔ Free help",
    retro_gen: "✔ Retro + modern consoles", 

    privacy_title: "Privacy Policy",
    privacy_text: "Retro Games uses cookies only for anonymous statistics."
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "pl";
  applyLanguage(lang);
});
