/**
 * Created by Micah on 13/09/2017.
 */
Ext.define('Insurance.store.staticData.Actors', {
    extend: 'Insurance.store.staticData.Base',

    alias: 'store.actors',

    requires: [
        'Insurance.model.staticData.Actor'
    ],

    model: 'Insurance.model.staticData.Actor'

});