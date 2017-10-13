/**
 * Created by Micah on 18/08/2017.
 */
Ext.define('Insurance.view.security.UserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',

    requires: [
        'Insurance.model.security.Group',
        'Insurance.model.security.User'
    ],

    stores: {
        users:{
            model: 'Insurance.model.security.User',
            autoLoad: true
        },
        groups: {
            model: 'Insurance.model.security.Group',
            autoLoad: true
        }
    },


    formulas: {
       currentUser : {
           bind: {
               bindTo: '{usersGrid.selection}',
               deep: true
           },

           get: function(user){
               return user;
           },

           set: function(user){
               var me = this;
               if (!user.isModel){
                   user = me.get('users').getById(user);
               }
               me.set('currentUser',user);
           }
       }
   }
});