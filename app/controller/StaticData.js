/**
 * Created by Micah on 29/09/2017.
 */
Ext.define('Insurance.controller.StaticData', {
    extend: 'Ext.app.Controller',

    requires: [
        'Insurance.util.Util',
        'Insurance.util.Glyphs'
    ],

    stores: [
        'staticData.Actors',
        'staticData.Categories',
        'staticData.Cities',
        'staticData.Countries',
        'staticData.Languages'
    ],

    views: [
        'staticData.BaseGrid',
        'staticData.Actors',
        'staticData.Categories',
        'staticData.Cities',
        'staticData.Countries',
        'staticData.Languages'
    ],

    config: {
        /*
        Uncomment to add references to view components
        refs: [{
            ref: 'list',
            selector: 'grid'
        }],
        */

        /*
        Uncomment to listen for events from view components
        control: {
            'useredit button[action=save]': {
                click: 'updateUser'
            }
        }
        */
    },

    /**
     * Called when the view is created
     */
    init: function(application) {
        var me = this;
        me.control({
            'staticdatagrid':{
                render: me.render,
                edit: me.onEdit,
                afterrender: me.onAfterRender,
                'widgetclick': me.onWidgetClick,
                'handleactioncolumn':me.handleColumnAction
            },

            'staticdatagrid button#add': {
                click: me.onButtonClickAdd
            },

            // 'staticdatagrid actioncolumn':{
            //     // itemclick: me.handleActionColumn
            //     'handleactioncolumn': me.handleActionColumn
            // },

            'staticdatagrid button#save':{
                click: me.onButtonClickSave
            },

            'staticdatagrid button#cancel': {
                click: me.onButtonClickCancel
            },

            'staticdatagrid button#clearFilter': {
                click: me.onButtonClickClearFilter
            },

            'staticdatagrid button#clearGrouping': {
                toggle: me.onButtonToggleClearGrouping
            }

        });

        me.listen({
            store: {
                '#staticData.Actors': {
                    write: this.onStoreSync
                },

                '#staticData.Categories':{
                    write: this.onStoreSync
                },

                '#staticData.Cities':{
                    write: this.onStoreSync
                },

                '#staticData.Countries':{
                    write: this.onStoreSync
                },

                '#staticData.Languages':{
                    write: this.onStoreSync
                }
            }
        });
    },

    onButtonClickAdd: function(button, e, options){
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
            last_update : new Date()
        }));

        cellEditing.startEditByPosition({row: 0, column: 1});
    },

    onEdit: function (editor, context, options) {
        context.record.set('last_update', new Date());
    },

    // handleActionColumn: function (column, action, view, rowIndex, colIndex, item, e) {
    //     var store = view.up('staticdatagrid').getStore(),
    //         rec = store.getAt(rowIndex);
    //
    //     if(action == 'delete'){
    //         store.remove(rec);
    //         Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    //     }
    // },

    handleActionColumn: function (column, action, view, rowIndex, colIndex, item, e) {
        var store = view.up('staticdatagrid').getStore(),
            rec = store.getAt(rowIndex);

        if(action == 'delete'){
            store.remove(rec);
            Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
        }
    },

    handleColumnAction:function (button, grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var rec = grid.getStore().getAt(rowIndex);
        console.log(rec);
        store.remove(rec);
        Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    },

    // handleColumnAction:function (grid, rowIndex, colIndex) {
    //     var store = grid.getStore();
    //     var rec = grid.getStore().getAt(rowIndex);
    //     store.remove(rec);
    //     Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    // },

    onButtonClickSave: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            errors = grid.validate();

        if(errors === undefined){
            store.sync();
        }else{
            Ext.Msg.alert(errors);
        }
    },

    onButtonClickCancel: function (buton, e, options) {
        buton.up('staticdatagrid').getStore().reload();
    },

    onButtonClickClearFilter: function (button, e, options) {
        button.up('staticdatagrid').filters.clearFilters();
    },

    onStoreSync: function (store, operation, options) {
        Insurance.util.Util.showToast('Success! Your changes have been saved.');
    },
    
    onWidgetClick: function (grid, rowIndex, colIndex) {
        console.log(grid);
         var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    },

    onButtonToggleClearGrouping: function (button, pressed, options){
        var store = button.up('citiesgrid').getStore();

        if(button.getText() === "Group by Country: OFF"){
            button.setText('Group by Country: ON');
            store.group('country_id');
        }else{
            button.setText('Group by Country: OFF');
            store.clearGrouping();
        }

        // if (pressed){
        //     button.setText('Group by Country: ON');
        //     store.group('country_id');
        // }else{
        //     button.setText('Group by Country: OFF');
        //     store.clearGrouping();
        // }
    },

    render: function (component, options) {
        component.getStore().load();

        if (component.xtype === 'citiesgrid'){
                component.down('toolbar#topToolbar').add([
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearGrouping',
                        text: 'Group by Country: OFF',
                        glyph: Insurance.util.Glyphs.getGlyph('groupCountry'),
                        enableToggle: true,
                        pressed: true
                    }
                ]);
            }

        // if (component.xtype === 'citiesgrid' && component.features.length > 0){
        //     if (component.features[0].ftype === 'grouping'){
        //         component.down('toolbar#topToolbar').add([
        //             {
        //                 xtype: 'tbseperator'
        //             },
        //             {
        //                 xtype: 'button',
        //                 itemId: 'clearGrouping',
        //                 text: 'Group by Country: ON',
        //                 glyph: Insurance.util.Glyphs.getGlyph('groupCountry'),
        //                 enableToggle: true,
        //                 pressed: true
        //             }
        //         ]);
        //     }
        // }
    },

    onAfterRender: function (grid, options) {
        var view = grid.getView();
        view.on('itemupdate', function (record, index, node, options) {
            grid.validateRow(record, index, node, options);
        });
    }

});