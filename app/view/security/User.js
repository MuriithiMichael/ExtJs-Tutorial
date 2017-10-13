/**
 * Created by Micah on 18/08/2017.
 */
Ext.define('Insurance.view.security.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',

    requires: [
        'Insurance.view.security.UsersGrid',
        'Insurance.view.security.UserModel',
        'Insurance.view.security.UserController',
        'Insurance.util.Glyphs'
    ],
    viewModel: {
        type: 'user'
    },

    controller: 'user',

    frame: true,

    layout:{
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'users-grid',
            flex: 1
        }
    ],
    dockedItems:[
        {
            xtype: 'toolbar',
            dock: 'top',
            items:[
                {
                    xtype: 'button',
                    text: 'Add',
                    glyph: Insurance.util.Glyphs.getGlyph('add'),
                    listeners: {
                        click: 'onAdd'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    glyph: Insurance.util.Glyphs.getGlyph('edit'),
                    listeners: {
                        click: 'onEdit'
                    },
                    bind:{
                        disabled: '{!usersGrid.selection}'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    glyph: Insurance.util.Glyphs.getGlyph('destroy'),
                    listeners: {
                        click: 'onDelete'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                }
            ]
        }
    ]
});