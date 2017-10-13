/**
 * Created by Micah on 10/10/2017.
 */
Ext.define('Insurance.view.base.Grid', {
    extend: 'Ext.grid.Panel',

    requires: [
      'Insurance.util.Glyphs'
    ],

    columnLines: true,

    viewConfig: {
      stripeRows: true
    },

    initComponent: function () {
        var  me = this;

        me.columns = Ext.Array.merge(
            me.columns, [
                {
                    xtype: 'datecolumn',
                    text: 'Last Update',
                    width: 150,
                    data_index: 'last_update',
                    format: 'Y-m-j H:i:s',
                    filter: true
                },
                {
                    xtype: 'widgetcolumn',
                    width: 50,
                    sortable: false,
                    menuDisabled: true,
                    widget: {
                        xtype: 'button',
                        glyph: Insurance.util.Glyphs.getGlyph('edit'),
                        tooltip: 'Edit',
                        handler: 'onEdit'
                    }
                },
                {
                    xtype: 'widgetcolumn',
                    width: 50,
                    sortable: false,
                    menuDisabled: true,
                    widget: {
                        xtype: 'button',
                        glyph: Insurance.util.Glyphs.getGlyph('destroy'),
                        handler: 'onDelete'
                    }
                }
            ]
        );

        me.callParent(arguments);
    }
});