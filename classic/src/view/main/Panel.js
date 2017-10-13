/**
 * Created by Micah on 19/07/2017.
 */
Ext.define('Insurance.view.main.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',

    activeTab: 0,

    items: [
        {
            xtype: 'panel',
            closable: false,
            iconCls: 'fa fa-home fa-lg tabIcon',
            title: 'Home'
        }
    ]
});