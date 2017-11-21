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
        },
        {
            xtype: 'tbseparator'
        },
        {
            xtype: 'button',
            text: 'Print',
            glyph: Insurance.util.Glyphs.getGlyph('print'),
            listeners: {
                click: 'onPrint'
            }
        },
        {
            xtype: 'button',
            text: 'Export to PDF',
            glyph: Insurance.util.Glyphs.getGlyph('pdf'),
            listeners: {
                click: 'onExportPdf'
            }
        },
        {
            xtype: 'button',
            text: 'Export to Excel',
            glyph: Insurance.util.Glyphs.getGlyph('excel'),
            listeners: {
                click: 'onExportExcel'
            }
        }
    ]
});