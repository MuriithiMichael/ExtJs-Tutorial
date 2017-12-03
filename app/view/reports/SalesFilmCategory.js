/**
 * Created by Micah on 14/11/2017.
 */
Ext.define('Insurance.view.reports.SalesFilmCategory',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.salesfilmcategory',

    requires: [
        'Insurance.view.reports.SalesFilmCategoryModel',
        'Insurance.view.reports.SalesFilmCategoryController',
        'Insurance.view.reports.SalesFilmCategoryPie',
        'Insurance.view.reports.SalesFilmCategoryColumn',
        'Insurance.view.reports.SalesFilmCategoryBar',
        'Insurance.util.Glyphs'
    ],

    controller: 'sales-film-category',

    viewModel: {
        type: 'sales-film-category'
    },

    layout: 'card',
    activeItem: 0,

    items: [
        {
           xtype: 'salesfilmcategorypie'
        },
        {
            xtype: 'salesfilmcategorycol'
        },
        {
            xtype: 'salesfilmcategorybar'
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        flex: 1,
        dock: 'top',
        items: [
            {
                text: 'Change Chart Type',
                glyph: Insurance.util.Glyphs.getGlyph('menuReports'),
                menu: {
                    xtype: 'menu',
                    defaults: {
                        listeners: {
                            click: 'onChangeChart'
                        }
                    },
                    items: [
                        {
                            xtype: 'menuitem',
                            text: 'Pie',
                            itemId: 'pie',
                            glyph: Insurance.util.Glyphs.getGlyph('chartPie')
                        },
                        {
                            xtype: 'menuitem',
                            text: 'Column',
                            itemId: 'column',
                            glyph: Insurance.util.Glyphs.getGlyph('chartColumn')
                        },
                        {
                            xtype: 'menuitem',
                            text: 'Bar',
                            itemId: 'bar',
                            glyph: Insurance.util.Glyphs.getGlyph('chartBar')
                        }
                    ]

                }
            },
            {
                text: 'Download Chart',
                glyph: Insurance.util.Glyphs.getGlyph('download'),
                menu: {
                    xtype: 'menu',
                    defaults: {
                        listeners: {
                            click: 'onDownloadChart'
                        }
                    },
                    items:[
                        {
                            xtype: 'menuitem',
                            text: 'Download as Image',
                            itemId: 'png',
                            glyph: Insurance.util.Glyphs.getGlyph('image')
                        },
                        {
                            xtype: 'menuitem',
                            text: 'Download as PDF',
                            itemId: 'pdf',
                            glyph: Insurance.util.Glyphs.getGlyph('pdf')
                        }
                    ]
                }
            }
        ]
    }]

});