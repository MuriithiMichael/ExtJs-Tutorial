/**
 * Created by Micah on 13/09/2017.
 */
Ext.define('Insurance.model.staticData.Base', {
    extend: 'Insurance.model.Base',

    fields: [
        {
            name: 'last_update',
            type: 'date',
            dateFormat: 'Y-m-j H:i:s'
        }
    ],

    validators: {
        last_update: 'presence'
    }
});