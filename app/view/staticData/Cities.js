/**
 * Created by Micah on 14/09/2017.
 */
Ext.define('Insurance.view.staticData.Cities', {
    extend: 'Insurance.view.staticData.BaseGrid',
    xtype: 'citiesgrid',

    requires: [
        'Insurance.store.staticData.Cities'
    ],

    store: 'staticData.Cities',

    columns: [
        {
            text: 'City Id',
            width: 100,
            dataIndex: 'city_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'City Name',
            flex: 1,
            dataIndex: 'city',
            filter: {
                type: 'string'
            },
            editor: {
                allowBlank: false,
                maxLength: 45
            }
        },
        {
            text: 'Country Id',
            flex: 1,
            dataIndex: 'country_id',
            filter: {
                type: 'numeric'
            },
            editor: {
                allowBlank: false,
                maxLength: 10
            }
        }
    ]
});