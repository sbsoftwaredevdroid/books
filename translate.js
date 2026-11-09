function googleTranslateElementInit() {
    // Détection de la langue du navigateur
    var userLang = navigator.language || navigator.userLanguage;

    // Si la langue n'est pas le français (fr, fr-FR, fr-CA, etc.)
    if (!userLang.startsWith('fr')) {
        new google.translate.TranslateElement({
            pageLanguage: 'fr',
            includedLanguages: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');

        // Force le déclenchement de la traduction en anglais
        setTimeout(function() {
            var select = document.querySelector('select.goog-te-combo');
            if (select) {
                select.value = 'en';
                select.dispatchEvent(new Event('change'));
            }
        }, 1000);
    }
}

// Chargement dynamique du script Google Translate requis
var googleScript = document.createElement('script');
googleScript.type = 'text/javascript';
googleScript.src = '//://google.com';
document.body.appendChild(googleScript);
