/**
 * Created by Micah on 13/10/2017.
 */
Ext.define('Insurance.view.film.FilmActorsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'film-actors',

    requires: [
        'Insurance.util.Glyphs'
    ],

    bind: '{filmsGrid.selection.actors}',

    border: true,

    title: 'Film Actors',

    glyph: Insurance.util.Glyphs.getGlyph('actor'),

    columns: [
        {
            text: 'Actor Id',
            width: 80,
            dataIndex: 'actor_id'
        },
        {
            xtype: 'templatecolumn',
            text: 'Actor Name',
            flex: 1,
            tpl: '{first_name} {last_name}'
        }
    ]
});