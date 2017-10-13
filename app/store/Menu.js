/**
 * Created by Micah on 31/07/2017.
 */
Ext.define('Insurance.store.Menu', {
    extend: 'Ext.data.Store',

    requires:[
        'Insurance.util.Util'
    ],

    model: 'Insurance.model.menu.Accordion',

    proxy: {
        type: 'ajax',
        url: 'php/menu/list.php',

        reader: {
            type: 'json',
            rootProperty: 'data'
        },

        listeners:{
            exception: function (proxy, response, operation) {
                Insurance.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});