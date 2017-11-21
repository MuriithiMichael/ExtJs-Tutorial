/**
 * Created by Micah on 09/11/2017.
 */
Ext.define('Insurance.view.reports.SalesFilmCategoryPie', {
    extend: 'Ext.chart.PolarChart',
    alias: 'widget.salesfilmcategorypie',

    requires: [
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.interactions.Rotate'
    ],

    legend: {
        docked: 'left'
    },

    interactions: ['rotate', 'itemhighlight'],

    bind: '{salesFilmCategory}',
    insetPadding: 40,
    innerPadding: 20,
    series: {
        type: 'pie',
        highlight: true,
        donut: 20,
        distortion: 0.6,
        style: {
            strokeStyle: 'white',
            opacity: 0.9
        },
        label: {
            field: 'category',
            display: 'rotate'
        },
        tooltip: {
            trackMouse: true,
            renderer: function (toolTip,storeItem, item) {
                var output = storeItem.get('category') + ': ' + storeItem.get('total_sales');
                console.log(output);
                toolTip.setHtml(output);
            }
        },
        xField: 'total_sales'
    }
});