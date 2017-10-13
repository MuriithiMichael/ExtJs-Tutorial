/**
 * Created by Micah on 14/09/2017.
 */
Ext.define('Insurance.view.staticData.Countries', {
    extend: 'Insurance.view.staticData.BaseGrid',
    xtype: 'countriesgrid',

    requires: [
        'Insurance.store.staticData.Countries'
    ],

    store: 'staticData.Countries',

    columns: [
        {
            text: 'Country Id',
            width: 100,
            dataIndex: 'country_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Country Name',
            flex: 1,
            dataIndex: 'country',
            filter: {
                type: 'string'
            },
            editor: {
                allowBlank: false,
                maxLength: 45
            }
        }
    ]
});