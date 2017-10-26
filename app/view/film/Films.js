/**
 * Created by Micah on 12/10/2017.
 */
Ext.define('Insurance.view.film.Films', {
    extend: 'Ext.panel.Panel',
    xtype: 'films',

    requires: [
        'Insurance.view.base.TopToolBar',
        'Insurance.view.film.FilmsController',
        'Insurance.view.film.FilmsGrid',
        'Insurance.view.film.FilmActorsGrid',
        'Insurance.view.film.FilmCategoriesGrid',
        'Insurance.view.film.FilmsModel'
    ],

    controller: 'films',

    viewModel: {
        type: 'films'
    },

    session: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'films-grid',
            flex: 1
        },
        {
            xtype: 'container',
            split: true,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            height: 150,
            items: [
                {
                    xtype: 'film-categories',
                    flex: 1
                },
                {
                    xtype: 'film-actors',
                    flex: 2
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'top-tool-bar'
        }
    ]
});