/**
 * Created by Micah on 08/11/2017.
 */
Ext.define('Insurance.view.reports.SalesFilmCategoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sales-film-category',

    onChangeChart: function (item, e, options) {
        var panel = this.getView();

        if(item.itemId == 'pie'){
            panel.getLayout().setActiveItem(0);
        }else if(item.itemId == 'column'){
            panel.getLayout().setActiveItem(1);
        }else if(item.itemId == 'bar'){
            panel.getLayout().setActiveItem(2);
        }
    },
    
    onDownloadChart: function (item, e, options) {
        var panel = this.getView();
        var chart = panel.getLayout().getActiveItem();

        if(item.itemId == 'png'){
            Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as image?', function (choice) {
                if(choice == 'yes'){
                    chart.download({
                         format: 'png',
                        filename: 'SalesXFilmCategory'
                    });
                }
            });
        }else if(item.itemId == 'pdf'){
            Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as PDF?', function (choice) {
                if(choice == 'yes'){
                    chart.download({
                        //url: 'php/pdf/exportChartPdf.php',
                        format: 'pdf',
                        filename: 'SalesXFilmCategory',
                        pdf: {
                            format: 'A4',
                            orientation: 'portrait',
                            border: '1cm'
                        }
                    });
                }
            });
        }
    }

});