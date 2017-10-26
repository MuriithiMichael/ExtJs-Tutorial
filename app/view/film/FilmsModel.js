/**
 * Created by Micah on 04/10/2017.
 */
Ext.define('Insurance.view.film.FilmsModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.films',

    requires: [
        'Insurance.model.TextCombo',
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
        },
        ratings: {
            model: 'Insurance.model.TextCombo',
            data: [
                // ENUM ('G', 'PG', 'PG-13', 'R', 'NC-17')
                ['G'],
                ['PG'],
                ['PG-13'],
                ['R'],
                ['NC-17']
            ],
            session: true
        },
        special_features: {
            model: 'Insurance.model.TextCombo',
            data: [
                ['Trailers'],
                ['Commentaries'],
                ['Deleted Scenes'],
                ['Behind the scenes']
            ],
            session: true
        }
    },

    formulas: {
        specialFeatures: {
            bind: {
                bindTo: '{currentFilm.special_features}',
                deep: true
            },
            get: function (value) {
                var values = value ? value.split(',') : [],
                    texts = [];
                values.forEach(function (item ) {
                    texts.push(Ext.create('Insurance.model.TextCombo',{
                        text: item
                    }));
                });
                return texts;
            },
            set: function (value) {
                if(value){
                    this.get('currentFilm').set('special_features', value.join());
                }
            }
        }
    }
});