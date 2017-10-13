/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
function loadLocale(){
    var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en',
        file = Ext.util.Format.format("classic/resources/locale/{0}.js", lang);

    Ext.Loader.loadScript({url: file, onError: function () {
        alert('Error loading locale file. Please contact system administrator.');
    }});

    var extJsFile = Ext.util.Format.format("ext/classic/locale/overrides/{0}/ext-locale-{0}.js", lang);
    Ext.Loader.loadScript({
        url: extJsFile
    });
}

loadLocale();

Ext.define('Insurance.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Insurance',

    glyphFontFamily: 'FontAwesome',

    requires:[
        'Insurance.overrides.tree.ColumnOverride'
    ],

    enableQuickTips: true,

    controllers:[
        'Menu',
        'StaticData'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],

    views:[
        'login.Login'
    ],
    
    launch: function () {
        //TODO - Launch the application
        // Ext.tip.QuickTipManager.init();
        // var me = this;
        // var task = new Ext.util.DelayedTask(function (){
        //     //fade out the body mask
        //     me.splashscreen.fadeOut({
        //     duration: 1000,
        //     remove: true
        // });
        //
        //     //fade out the icon and message
        //     me.splashscreen.next().fadeOut({
        //        duration: 1000,
        //         remove: true,
        //         listeners:{
        //            afteranimate: function(el, startTime, eOpts){
        //                //console.log('launch')
        //                Ext.widget('login-dialog');
        //            }
        //         }
        //     });
        // });
        // task.delay(4000);
        Ext.widget('login-dialog');
    },
    init: function(){
        // var me = this;
        // me.splashscreen = Ext.getBody().mask('Loading.........................', 'splashscreen');
        // me.splashscreen.addCls('splashscreen');
        //
        // Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0],{
        //     cls: 'x-splash-icon'
        // });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
