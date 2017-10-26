/**
 * Created by Micah on 13/09/2017.
 */
Ext.define('Insurance.store.staticData.Languages', {
    extend: 'Ext.data.Store',

    requires: [
        'Insurance.model.staticData.Language'
    ],

    autoLoad: true,

    model: 'Insurance.model.staticData.Language'
});