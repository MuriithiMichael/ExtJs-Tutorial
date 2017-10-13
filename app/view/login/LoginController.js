/**
 * Created by Micah on 21/06/2017.
 */
Ext.define('Insurance.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    requires: [
        'Insurance.view.login.CapsLockToolTip',
        'Insurance.util.Util',
        'Insurance.util.SessionMonitor'
    ],

    onTextFieldSpecialKey: function (field, e, options) {
        var me = this;
        if(e.getKey() == e.ENTER){
            if(me.lookupReference('form').isValid()){
                me.doLogin();
            }else{
                Insurance.util.Util.showErrorMsg("Empty Fields or invalid inputs!");
            }

        }
    },

    onTextFieldKeyPress: function (field, e, options) {
        var charCode = e.getCharCode();
        me = this;

        if((e.shiftKey && charCode >= 97 && charCode <= 122) || (!e.shiftKey && charCode >= 65 && charCode <=90)){

            if(me.capslocktooltip === undefined){
                me.capslocktooltip = Ext.widget('capslocktooltip');
            }
            me.capslocktooltip.show();
        }else{
            if(me.capslocktooltip !== undefined){
                me.capslocktooltip.hide();
            }
        }
    },

    onButtonClickCancel: function (button, e, options) {
        this.lookupReference('form').reset();
    },

    onButtonClickSubmit: function (button, e, options) {
        var me = this;
        if(me.lookupReference('form').isValid()){
            me.doLogin();
        }
    },

    doLogin: function () {
        var me = this;
        form = me.lookupReference('form');

        //display process dialog
        this.getView().mask('Authenticating...... Please wait.....');

        form.submit({
            clientValidation: true,
            url: 'php/security/login.php',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
    },

    // onLoginFailure: function (form, action) {
    //     console.log(action);
    //     var result = Ext.JSON.decode(action.response.responseText, true);
    //
    //     if(!result){
    //         result = {};
    //         result.success = false;
    //         result.msg = action.response.responseText;
    //     }
    //
    //     switch(action.failureType){
    //
    //         case Ext.form.action.Action.CLIENT_INVALID:
    //             Ext.Msg.show({
    //                 title: 'Error!',
    //                 msg: 'Form fields may not be submitted with invalid values',
    //                 icon: Ext.Msg.ERROR,
    //                 buttons: Ext.Msg.OK
    //             });
    //             break;
    //         case Ext.form.action.Action.CONNECT_FAILURE:
    //             Ext.Msg.show({
    //                 title: 'Error!',
    //                 msg: result.msg,
    //                 icon: Ext.Msg.ERROR,
    //                 buttons: Ext.Msg.OK
    //             });
    //             break;
    //         case Ext.form.action.Action.SERVER_INVALID:
    //             Ext.Msg.show({
    //                 title: 'Error!',
    //                 msg : result.msg,
    //                 icon: Ext.Msg.ERROR,
    //                 buttons: Ext.Msg.OK
    //             });
    //             break;
    //     }
    // },

    onLoginFailure: function (form, action){
        console.log(action);
        this.getView().unmask();
        Insurance.util.Util.handleFormFailure(action);
    },

    onLoginSuccess: function (form, action) {
        this.getView().unmask();
        this.getView().close();
        Ext.create('Insurance.view.main.Main');
        Insurance.util.SessionMonitor.start();
    },

    /**
     * Called when the view is created
     */
    init: function() {

    }
});