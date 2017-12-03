/**
 * Created by Micah on 22/11/2017.
 */
Ext.define('Insurance.view.main.ResponsiveMenuButton', {
    extend: 'Ext.button.Split',
    xtype: 'responsive-mainmenu',

    requires: [
        'Ext.plugin.Responsive'
    ],

    text: 'Menu',

    plugins: 'responsive',
    responsiveConfig: {
        'width < 768 && tall': {
            visible: true
        },
        'width >= 768': {
            visible: false
        }
    },

    menu: {
        xtype: 'menu',
        items: [
            {
                xtype: 'mainmenu'
            }
        ]
    }
});