/**
 * Created by Micah on 14/09/2017.
 */
Ext.define('Insurance.view.staticData.Categories', {
    extend: 'Insurance.view.staticData.BaseGrid',
    xtype: 'categoriesgrid',

    requires: [
        'Insurance.store.staticData.Categories'
    ],

    store: 'staticData.Categories',

    columns: [
        {
            text: 'Categroy Id',
            width: 100,
            dataIndex: 'category_id',
            filter:{
                type: 'numeric'
            }
        },
        {
            text: 'Category Name',
            flex: 1,
            dataIndex: 'name',
            filter:{
                type: 'string'
            },
            editor: {
                allowBlank: false,
                maxLength: 45
            }
        }

    ]
});