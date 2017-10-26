/**
 * Created by Micah on 20/10/2017.
 */
Ext.define('Insurance.view.film.FilmFormCategories', {
    extend: 'Ext.container.Container',
    xtype: 'film-categories-form',

    requires: [
        'Ext.view.MultiSelector',
        'Insurance.store.staticData.Categories'
    ],

    title: 'Film Categories',
    layout: 'fit',
    items: [
        {
            xtype: 'multiselector',
            title: 'Selected Categories',
            reference: 'categoriesMultiSelector',
            fieldName: 'name',
            viewConfig:{
                deferEmptyText: false,
                emptyText: 'No categories selected'
            },
            bind: '{currentFilm.categories}',
            search: {
                field: 'name',
                store: {
                    //source: Ext.getStore('staticData.Categories'),
                    type: 'categories',
                    autoLoad: true
                }
            }
        }
    ]
});