Ext.define('Insurance.util.Util',{



    statics:{

        required: '<span style="color:red;font-weight:bold" data-qtip="Required"> *</span>',

        decodeJSON : function (text){
            var result = Ext.JSON.decode(text, true);
            if(!result){
                result = {};
                result.sucess = false;
                result.msg = text;
            }
            return result;
        },

        showErrorMsg : function (text) {
            var errorBox= Ext.Msg.show({
                title: "Error!",
                icon: Ext.Msg.ERROR,
                msg: text,
                buttons: Ext.Msg.OK
            });

            Ext.Function.defer(function () {
               errorBox.zIndexManager.bringToFront(errorBox);
            },100);
        },
        
        showToast: function (text) {
            Ext.toast({
                html: text,
                closable: false,
                align: 't',
                slideInDuration: 400,
                minWidth: 400
            });
        },
        
        handleFormFailure: function (action) {
            console.log(action);
            var me = this,
                result = me.decodeJSON(action.response.responseText);

            switch(action.failureType){
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMsg('Form fields may  not be submitted with invalid values');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMsg(action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    me.showErrorMsg(result.msg);
            }
        }
    }

});