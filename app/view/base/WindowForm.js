/**
 * Created by Micah on 14/10/2017.
 */
Ext.define('Insurance.view.base.WindowForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowform',


    requires: [
        'Insurance.util.Util',
        'Insurance.util.Glyphs',
        'Insurance.view.base.CancelSaveToolbar'
    ],

    height: 450,
    width: 500,
    layout: {
        type: 'fit'
    },
    modal: true,
    closable: false,

    bind: {
        title: '{title}',
        glyph: '{glyph}'
    },

    dockedItems: [
        {
            xtype: 'cancel-save-toolbar'
        }
    ]
});