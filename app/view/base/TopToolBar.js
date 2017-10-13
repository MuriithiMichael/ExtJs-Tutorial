/**
 * Created by Micah on 12/10/2017.
 */
Ext.define('Insurance.view.base.TopToolBar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'top-tool-bar',

    requires: [
        'Insurance.util.Glyphs'
    ],

    dock: 'top',

    items: [
        {
            xtype: 'button',
            text: 'Add',
            itemId: 'add',
            glyph: Insurance.util.Glyphs.getGlyph('add'),
            listeners: {
                click: 'onAdd'
            }
        }
    ]
});