/**
 * Created by Micah on 19/07/2017.
 */
Ext.define('Insurance.view.main.Footer', {
    extend: 'Ext.container.Container',
    xtype: 'appfooter',

    cls: 'app-footer',

    height: 30,

    layout: 'center',

    items: [
        {
            xtype: 'component',
            width: 350,
            componentCls: 'app-footer-title',
            bind: {
                html: '{footer}'
            }
        }
    ]

});