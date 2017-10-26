/**
 * Created by Micah on 20/10/2017.
 */
Ext.define('Insurance.store.film.SearchActors', {
    extend: 'Ext.data.Store',
    alias: 'store.search-actors',

    requires: [
        'Insurance.model.film.SearchActor'
    ],

    model: 'Insurance.model.film.SearchActor',

    pageSize: 2,

    proxy: {
        type: 'ajax',
        url: 'php/actor/searchActor.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});