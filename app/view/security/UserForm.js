/**
 * Created by Micah on 18/08/2017.
 */
Ext.define('Insurance.view.security.UserForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.user-form',

    requires: [
        'Insurance.util.Glyphs',
        'Insurance.util.Util'
    ],


    height: 400,
    width: 600,

    layout:{
        type: 'fit'
    },

   
    bind:{
        title: '{dialogTitle}'
    },

    closable: false,
    modal: true,

    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 5,
            modelValidation: true,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                {
                    xtype: 'fieldset',
                    flex: 1,
                    title: 'User Information',
                    layout: 'anchor',
                    defaults:{
                        afterLabelTextTpl: Insurance.util.Util.required,
                        anchor: '100%',
                        xtype: 'textfield',
                        msgTarget: 'side',
                        labelWidth: 75
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: 'id',
                            fieldLabel: 'Label',
                            bind: '{currentUser.id}'
                        },
                        {
                            fieldLabel: 'Username',
                            name: 'userName',
                            bind: '{currentUser.userName}'
                        },
                        {
                            fieldLabel: 'Name',
                            name: 'name',
                            bind: '{currentUser.name}'
                        },
                        {
                            fieldLabel: 'Email',
                            name: 'email',
                            bind: '{currentUser.email}'
                        },
                        {
                            xtype: 'combo',
                            fieldLabel: 'Group',
                            displayField: 'name',
                            valueField: 'id',
                            queryMode: 'local',
                            forceSelection: true,
                            editable: false,
                            name: 'group_id',
                            bind:{
                                value: '{currentUser.group_id}',
                                store: '{groups}'
                                // selection: '{currentUser.group}'
                            }
                        },
                        {
                            xtype: 'filefield',
                            fieldLabel: 'Photo',
                            anchor: '100%',
                            name: 'picture',
                            buttonText: 'Select Photo.....',
                            afterLabelTextTpl: '',
                            listeners: {
                                change: 'onFileFieldChange'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Photo',
                    width: 170,
                    items: [
                        {
                            xtype: 'image',
                            reference: 'userPicture',
                            height: 150,
                            width: 150,
                            bind: {
                                src: 'resources/profileImages/{currentUser.picture}'
                            }
                        }
                    ]
                }

            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
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
                    listeners:{
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    glyph: Insurance.util.Glyphs.getGlyph('cancel'),
                    listeners:{
                        click: 'onCancel'
                    }
                }
            ]
        }
    ]
});