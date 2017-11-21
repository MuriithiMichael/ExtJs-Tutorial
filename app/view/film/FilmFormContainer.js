/**
 * Created by Micah on 14/10/2017.
 */
Ext.define('Insurance.view.film.FilmFormContainer', {
    extend: 'Ext.panel.Panel',
    xtype: 'film-form-container',

    requires: [
        'Insurance.store.staticData.Languages',
        'Insurance.util.Util'
    ],

    bodyPadding: 10,
    scrollable: true,
    layout: {
        type: 'anchor'
    },
    title: 'Film Information',
    defaults: {
        anchor: '100%',
        msgTarget: 'side',
        labelWidth: 105
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Title',
            afterLabelTextTpl: Insurance.util.Util.required,
            bind: '{currentFilm.title}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Release Year',
            allowDecimals: false,
            bind: '{currentFilm.release_year}'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Language',
            displayField: 'name',
            valueField: 'language_id',
            queryMode: 'local',
            store: 'staticData.Languages',
            afterLabelTextTpl: Insurance.util.Util.required,
            bind: '{currentFilm.language_id}'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Original Language',
            displayField: 'name',
            valueField: 'language_id',
            queryMode: 'local',
            store: 'staticData.Languages',
            afterLabelTextTpl: Insurance.util.Util.required,
            bind: '{currentFilm.original_language_id}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Rental Duration',
            allowDecimals: false,
            afterLabelTextTpl: Insurance.util.Util.required,
            bind: '{currentFilm.rental_duration}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Rental Rate',
            step: 0.1,
            afterLabelTextTpl: Insurance.util.Util.required,
            bind: '{currentFilm.rental_rate}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Length (min)',
            allowDecimals: false,
            bind: '{currentFilm.length}'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Replacement Cost',
            name: 'replacement_cost',
            step: 0.1,
            afterLabelTextTpl: Insurance.util.Util.required,
            bind: '{currentFilm.replacement_cost}'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Rating',
            displayField: 'text',
            valueField: 'text',
            queryMode: 'local',
            bind: {
                value: '{currentFilm.rating}',
                store: '{ratings}'
            }
        },
        {
            xtype: 'tagfield',
            fieldLabel: 'Special Features',
            displayField: 'text',
            valueField: 'text',
            filterPickList: true,
            queryMode: 'local',
            publishes: 'value',
            stacked: true,
            bind: {
                value: '{currentFilm.special_features}',
                store: '{special_features}'
            }
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Description',
            bind: '{currentFilm.description}'
        }
    ]
});