/**
 * Created by Micah on 04/10/2017.
 */
Ext.define('Insurance.view.film.FilmsModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.films',

    requires: [
        'Insurance.model.film.Film'
    ],

    stores: {
        films: {
            model: 'Insurance.model.film.Film',
            pageSize: 15,
            autoLoad: true,
            session: true
        },
        categories: {
            source: 'staticData.Categories',
            autoLoad: true,
            session: true
        },
        actors: {
            source: 'staticData.Actors',
            autoLoad: true,
            session: true
        }
    }
});