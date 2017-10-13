/**
 * Created by Micah on 14/09/2017.
 */
Ext.define('Insurance.view.staticData.Actors', {
    extend: 'Insurance.view.staticData.BaseGrid',
    xtype: 'actorsgrid',

    requires: [
        'Insurance.store.staticData.Actors'
    ],

    store: 'staticData.Actors',

    columns:[
        {
            text: 'Actor Id',
            width: 100,
            dataIndex: 'actor_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'First Name',
            flex: 1,
            dataIndex: 'first_name',
            editor: {
                allowBlank: false,
                maxLength: 45
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Last Name',
            flex: 1,
            dataIndex: 'last_name',
            editor: {
              allowBlank: false,
              maxLength: 45
            },
            filter: {
                type: 'string'
            }
        }
    ]
});