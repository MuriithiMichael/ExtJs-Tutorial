/**
 * Created by Micah on 13/10/2017.
 */
Ext.define('Insurance.view.film.FilmCategoriesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'film-categories',

    requires: [
        'Insurance.util.Glyphs'
    ],

    bind: '{filmsGrid.selection.categories}',

    border: true,

    title: 'Film Categories',

    glyph: Insurance.util.Glyphs.getGlyph('category'),

    columns: [
        {
            text: 'Category Id',
            width: 100,
            dataIndex: 'category_id'
        },
        {
            text: 'Category Name',
            flex: 1,
            dataIndex: 'name'
        }
    ]
});