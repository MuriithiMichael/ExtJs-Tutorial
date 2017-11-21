/**
 * Created by Micah on 14/11/2017.
 */
Ext.define('Insurance.view.reports.SalesFilmCategoryBar', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.salesfilmcategorybar',

    requires: [
        'Ext.chart.axis.Category3D',
        'Ext.chart.axis.Numeric3D',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.series.Bar3D',
        'Ext.util.Format'
    ],

    bind:'{salesFilmCategory}',

    insetPadding: {
        top: 40,
        bottom: 40,
        left: 20,
        right: 40
    },
    interactions: 'itemhighlight',

    flipXY: true,

    axes: [
        {
            type: 'numeric3d',
            position: 'bottom',
            fields: ['total_sales'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            titleMargin: 20,
            title: {
                text: 'Total Sales',
                fontSize: 14
            },
            grid: true,
            minimum: 0
        },
        {
            type: 'category3d',
            position: 'left',
            fields: ['category'],
            titleMargin: 20,
            title: {
                text: 'Film Category',
                fontSize: 14
            }
        }
    ],

    series: [
        {
            type: 'bar3d',
            highlight: true,
            style: {
                minGapWidth: 20
            },
            tooltip: {
                trackMouse: true,
                style: 'background: #333',
                renderer: function (toolTip, storeItem, item, attr) {
                    var output = storeItem.get('category') + ': ' + storeItem.get('total_sales') + '$';
                    toolTip.setHtml(output);
                }
            },
            label: {
                display: 'insideEnd',
                'text-anchor': 'middle',
                field: 'total_sales',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'horizontal',
                color: '#333',
                contrast: true
            },
            xField: 'category',
            yField: 'total_sales'
        }
    ]
});