/**
 * Created by Micah on 21/06/2017.
 */
Ext.define('Insurance.view.login.Login', {
    //extend: 'Ext.Container',
    extend: 'Ext.window.Window',

    requires: [
        'Insurance.view.login.LoginModel',
		'Insurance.view.login.LoginController',
        'Insurance.view.locale.Translation'
    ],

    xtype: 'login-dialog',
    autoShow: true,
    height: 185,
    width: 360,
    layout:{
        type: 'fit'
    },
    iconCls: 'fa fa-key fa-lg',
    title: translations.login,
    closeAction: 'hide',
    closable: false,
    draggable: false,
    resizable: false,

    viewModel: {
        type: 'login'
    },

    controller: 'login',

    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60,
                allowBlank: false,
                vtype: 'alphanum',
                minLength: 3,
                msgTarget: 'side',
                listeners:{
                    specialKey: 'onTextFieldSpecialKey'
                }
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: translations.user,
                    maxLength: 25
                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: translations.password,
                    maxLength: 15,
                    vtype: 'customPass',
                    id: 'password',
                    enableKeyEvents: true,
                    listeners:{
                        keypress: 'onTextFieldKeyPress'
                    }
                }
            ],
            dockedItems:[
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items:[
                        {
                          xtype: 'translation'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-times fa-lg',
                            text: translations.cancel,
                            listeners: {
                                click: 'onButtonClickCancel'
                            }
                        },
                        {
                            xtype: 'button',
                            formBind: true,
                            iconCls: 'fa fa-sing-in fa-lg',
                            text: translations.submit,
                            listeners: {
                                click: 'onButtonClickSubmit'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});