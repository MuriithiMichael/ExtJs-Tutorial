/**
 * Created by Micah on 02/08/2017.
 */
Ext.define('Insurance.view.menu.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'menutree',

    requires:[
        //'Insurance.overrides.tree.ColumnOverride'
    ],

    border: 0,
    autoScroll: true,
    rootVisible: false
});