/**
 * Created by Micah on 26/07/2017.
 */
function loadTranslations(){
    var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en',
        file = 'classic/resources/locale/'+ lang + '.js';
    document.write('<script type="text/javascript" src="' + file + '"></script>');
}

loadTranslations();