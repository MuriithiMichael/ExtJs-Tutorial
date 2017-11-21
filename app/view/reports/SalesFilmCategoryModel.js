/**
 * Created by Micah on 08/11/2017.
 */
Ext.define('Insurance.view.reports.SalesFilmCategoryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sales-film-category',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    stores: {
        salesFilmCategory: {
            fields: [
                {name: 'category'},
                {name: 'total_sales'}
            ],
            autoLoad: true,
            proxy: {
                type:'ajax',
                url: 'php/reports/salesFilmCategory.php',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});