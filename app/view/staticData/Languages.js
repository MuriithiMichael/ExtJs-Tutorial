/**
 * Created by Micah on 14/09/2017.
 */
Ext.define('Insurance.view.staticData.Languages', {
    extend: 'Insurance.view.staticData.BaseGrid',
    xtype: 'languagesgrid',

    requires: [
        'Insurance.store.staticData.Languages'
    ],

    store: 'staticData.Languages',

    columns: [
        {
            text: 'Language Id',
            width: 100,
            dataIndex: 'language_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Language Name',
            flex: 1,
            dataIndex: 'name',
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