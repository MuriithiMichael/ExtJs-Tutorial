/**
 * Created by Micah on 14/10/2017.
 */
Ext.define('Insurance.view.base.CancelSaveToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'cancel-save-toolbar',

    requires: [
        'Insurance.util.Glyphs'
    ],

    dock: 'bottom',
    ui: 'footer',
    layout: {
        pack: 'end',
        type: 'hbox'
    },
    items: [
        {
            xtype: 'button',
            text: 'Save',
            glyph: Insurance.util.Glyphs.getGlyph('save'),
            listeners: {
                click: 'onSave'
            }
        },
        {
            xtype: 'button',
            text: 'Cancel',
            glyph: Insurance.util.Glyphs.getGlyph('cancel'),
            listeners: {
                click: 'onCancel'
            }
        }
    ]
});