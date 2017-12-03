/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Insurance.view.main.Main', {
    //extend: 'Ext.tab.Panel',
    extend: 'Ext.container.Container',

    plugins: 'viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Responsive',
        'Ext.plugin.Viewport',
        'Insurance.view.main.Footer',
        'Insurance.view.main.Header',
        'Insurance.view.main.MainController',
        'Insurance.view.main.MainModel',
        'Insurance.view.main.Panel',
        'Insurance.view.menu.Accordion'
    ],

    controller: 'main',

    viewModel:{
      type: 'main'
    },

    layout: 'border',

    items: [{
        region: 'center',
        xtype: 'mainpanel'
    },{
        region: 'north',
        xtype: 'appheader'
    },{
        region: 'south',
        xtype: 'appfooter'
    },{
        region: 'west',
        xtype: 'mainmenu',
        plugins: 'responsive',
        responsiveConfig: {
            'width < 768 && tall': {
                visible: false
            },
            'width >= 768': {
                visible: true
            }
        }
    }]

});
