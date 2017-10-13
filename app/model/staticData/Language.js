/**
 * Created by Micah on 13/09/2017.
 */
Ext.define('Insurance.model.staticData.Language', {
    extend: 'Insurance.model.staticData.Base',

    entityName: 'Language',

    idProperty: 'language_id',

    fields: [
        { name: 'language_id'},
        { name: 'name', defaultValue: 'New Language*'}
    ]
});