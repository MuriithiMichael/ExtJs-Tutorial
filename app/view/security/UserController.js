/**
 * Created by Micah on 18/08/2017.
 */
Ext.define('Insurance.view.security.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',

    requires: [
        'Insurance.model.security.Group',
        'Insurance.model.security.User',
        'Insurance.util.Util',
        'Insurance.view.security.UserForm'
    ],
    
    onAdd: function (button, e, options) {
        this.createDialog(null);
    },
    
    onEdit: function (button, e, options) {
        var me = this,
            records = me.getRecordsSelected();
        console.log(records);
        if(records[0]){
            me.createDialog(records[0]);
        }
    },
    
    createDialog: function (record) {
        var me = this,
            view = me.getView();


        console.log(record);


        me.dialog = view.add({
            xtype: 'user-form',
            viewModel: {
                data: {
                    title: record ? 'Edit: ' + record.get('name') : 'Add User',
                    currentUser: record || Ext.create('Insurance.model.security.User')
                },
                groups: {
                    model: 'Insurance.model.security.Group',
                    autoLoad: true
                }
            }
        });

        me.dialog.show();
    },

    getRecordsSelected: function () {
        var grid = this.lookupReference('usersGrid');
        return grid.getSelection();
    },
    
    onDelete: function (button, e, options) {
        var me = this,
            view = me.getView(),
            records = me.getRecordsSelected(),
            store = me.getStore('users');

        if(store.getCount() >= 2 && records.length){
            var messageBox = Ext.Msg.show({
                title: 'Delete?',
                msg: 'Are you sure you want to delete?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function (buttonId) {
                    if(buttonId == 'yes'){
                        store.remove(records);
                        store.sync();
                    }
                }
            });

            Ext.Function.defer(function () {
                messageBox.zIndexManager.bringToFront(messageBox);
            }, 100);
        }else if(store.getCount() === 1){
            var warningBox = Ext.Msg.show({
                title: 'Warning',
                msg: 'You cannot delete all the users from the application',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });

            Ext.Function.defer(function () {
                warningBox.zIndexManager.bringToFront(warningBox);
            },100);
        }
    },

    onSave: function (button, e, options) {
        var me = this,
            form = me.lookupReference('form');

        if(form && form.isValid){
            form.submit({
                clientValidation: true,
                url: 'php/user/save.php',
                scope: me,
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            });
        }
    },

    onSaveSuccess: function (form, action) {
        var me = this;
        me.onCancel();
        me.refresh();
        Insurance.util.Util.showToast('Success! User saved.');
    },

    onSaveFailure: function (form, action) {
        Insurance.util.Util.handleFormFailure(action);
    },

    onCancel: function (button, e, options) {
        var me = this;
            me.dialog = Ext.destroy(me.dialog);
    },

    refresh: function (button, e, options) {
        var me = this,
            store = me.getStore('users');
        store.load();
    },

    onFileFieldChange: function (fileFiled, value, options) {
        var me = this,
            file = fileFiled.fileInputEl.dom.files[0],
            picture = this.lookupReference('userPicture');

        if(typeof FileReader !== 'undefined' && (/image/i).test(file.type) ){
            var reader = new FileReader();
            reader.onload = function (e) {
                picture.setSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }else if(!(/image/i).test(file.type)){
            Ext.Msg.alert('Warning!', 'You can only upload image files!');
            fileFiled.reset();
        }
    }
    
    
});