/**
 * Created by Micah on 13/09/2017.
 */
Ext.define('Insurance.model.staticData.Category', {
    extend: 'Insurance.model.staticData.Base',

    entityName: 'Category',

    idProperty: 'category_id',

    fields: [
        { name: 'category_id'},
        { name: 'name'}
    ],

    manyToMany: {
        CategoryFilms: {
            type: 'Film',
            role: 'films',
            field: 'film_id',
            right: {
                field: 'category_id',
                role: 'categories'
            }
        }
    }

});