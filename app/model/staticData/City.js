/**
 * Created by Micah on 13/09/2017.
 */
Ext.define('Insurance.model.staticData.City', {
    extend: 'Insurance.model.staticData.Base',

    entityName: 'City',

    idProperty: 'city_id',

    fields: [
        {name: 'city_id'},
        {name: 'city', defaultValue: 'New City*'},
        {name: 'country_id'}
    ]
});