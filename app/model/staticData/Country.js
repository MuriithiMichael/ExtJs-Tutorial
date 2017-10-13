/**
 * Created by Micah on 13/09/2017.
 */
Ext.define('Insurance.model.staticData.Country', {
    extend: 'Insurance.model.staticData.Base',

    entityName: 'Country',

    idProperty: 'country_id',

    fields: [
        { name: 'country_id'},
        { name: 'country', defaultValue: 'New Country*'}
    ]
});