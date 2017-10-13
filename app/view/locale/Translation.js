/**
 * Created by Micah on 20/07/2017.
 */
Ext.define('Insurance.view.locale.Translation', {
    extend: 'Ext.button.Split',
    xtype: 'translation',

    requires: [
        'Insurance.view.locale.TranslationController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'translation',
    */

    controller: 'translation',

    menu: {
        xtype: 'menu',
        defaults: {
            listeners: {
                click: 'onMenuItemClick'
            }
        },
        items: [
            {
                xtype: 'menuitem',
                iconCls: 'en',
                text: 'English'
            },
            {
                xtype: 'menuitem',
                iconCls: 'es',
                text: 'Español'
            },
            {
                xtype: 'menuitem',
                iconCls: 'pt_BR',
                text: 'Português'
            }
        ]
    }
});