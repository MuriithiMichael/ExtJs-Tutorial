/**
 * Created by Micah on 13/10/2017.
 */
Ext.define('Insurance.view.base.ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.view',


    onAdd: function (button, e, options) {
        this.createDialog(null);
    },

    onEdit: function (button, e, options) {
        this.createDialog(button.getWidgetRecord());
    },

    onCancel: function (button, e, options) {
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },

    onDelete: function(button, e, options){
      var record = button.getWidgetRecord();
      Ext.Msg.show({
          title: 'Delete',
          msg: 'Are you sure you want to delete?',
          buttons: Ext.Msg.YESNO,
          icon: Ext.Msg.QUESTION,
          fn: function (buttonId) {
              if(buttonId== 'yes'){
                  record.drop();
              }
          }
      });
    },

    viewSessionChanges: function () {
        var changes= this.getView().getSession().getChanges();
        if(changes !== null){
            new Ext.window.Window({
                autoShow: true,
                title: 'Session Changes',
                modal: true,
                width: 600,
                height: 400,
                layout: 'fit',
                items: [
                    {
                        xtype: 'textarea',
                        value: JSON.stringify(changes, null, 4)
                    }
                ]
            });
        }else{
            Ext.Msg.alert('No changes', 'There is no changes to the session.');
        }
    },

    /**
     * Called when the view is created
     */
    init: function() {

    }
});