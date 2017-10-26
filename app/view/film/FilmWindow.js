/**
 * Created by Micah on 13/10/2017.
 */
Ext.define('Insurance.view.film.FilmWindow', {
    extend: 'Insurance.view.base.WindowForm',
    xtype: 'film-window',

    requires: [
        'Insurance.view.film.FilmActorsGrid',
        'Insurance.view.film.FilmFormCategories',
        'Insurance.view.film.FilmFormContainer'
    ],

    //width: 357,

    items: [
        {
            xtype: 'form',
            reference: 'filmForm',
            layout:{
                type: 'fit'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'film-form-container',
                            glyph: Insurance.util.Glyphs.getGlyph('film')
                        },
                        {
                            xtype: 'film-categories-form',
                            glyph: Insurance.util.Glyphs.getGlyph('category')
                        },
                        {
                            xtype: 'film-actors',
                            reference: 'actorsGrid',
                            dockedItems: [{
                                dock: 'top',
                                items: [
                                    {
                                        xtype: 'button',
                                        text: 'Search and Add',
                                        glyph: Insurance.util.Glyphs.getGlyph('searchAndAdd'),
                                        listeners: {
                                            click: 'onAddActor'
                                        }
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Delete',
                                        glyph: Insurance.util.Glyphs.getGlyph('destroy'),
                                        listeners: {
                                            click: 'onDeleteActor'
                                        }
                                    }
                                ]
                            }]
                        }
                    ]
                }
            ]
        }
    ]
});