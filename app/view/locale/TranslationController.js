/**
 * Created by Micah on 20/07/2017.
 */
Ext.define('Insurance.view.locale.TranslationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.translation',

    onMenuItemClick: function (item, e, options) {
        console.log('HH');
         var menu = this.getView();

         menu.setIconCls(item.iconCls);
         menu.setText(item.text)

        localStorage.setItem("user-lang", item.iconCls);

         window.location.reload();
    },

    /**
     * Called when the view is created
     */
    init: function() {
        var lang = localStorage ? (localStorage.getItem('user-lang') || 'es') : 'es', button = this.getView();

        button.setIconCls(lang);

        if(lang == 'en'){
            button.setText('English');
        }else if(lang == 'es'){
            button.setText('Español');
        }else {
            button.setText('Português');
        }
    }
});