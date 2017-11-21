/**
 * Created by Micah on 04/10/2017.
 */
Ext.define('Insurance.view.film.FilmsController', {
    extend: 'Insurance.view.base.ViewController',
    alias: 'controller.films',

    requires: [
        'Insurance.model.film.Film',
        'Insurance.util.Glyphs',
        'Insurance.ux.grid.Printer',
        'Insurance.view.film.FilmSearchActor'
    ],

    /**
     * Called when the view is created
     */
    init: function() {

    },
    
    onFilmSelect: function (id) {
        var me = this,
            grid = me.lookupReference('filmsGrid'),
            store = me.getStore('films'),
            record = store.findRecord('film_id', id);

        if(record){
            grid.getSelectionModel().select(record);
        }
    },

    onItemClick: function (view, record, item, index, e, eOpts) {
        this.redirectTo('films/' + record.get('film_id'));
    },

    createDialog: function(record){

        var me = this,
            view = me.getView(),
            glyphs = Insurance.util.Glyphs;

        me.isEdit = !!record;
        me.dialog = view.add({
            xtype: 'film-window',
            viewModel: {
                data: {
                    title: record ? 'Edit:' + record.get('title') : 'Add Film',
                    glyph: record ? glyphs.getGlyph('edit') : glyphs.getGlyph('add'),
                    currentFilm: record || Ext.create('Insurance.model.film.Film')
                }
                // ,
                // links: {
                //     currentFilm: record || {
                //         type: 'Film',
                //         create: true
                //     }
                // }
            },
            session: true
        });

        me.dialog.show();
    },
    
    onCancelActors: function (button, e, options) {
        var me = this;
        me.searchActors = Ext.destroy(me.searchActors)
    },
    
    onSave: function (button, e, options) {
        var me = this,
            dialog = me.dialog,
            form = me.lookupReference('filmForm'),
            isEdit = me.isEdit,
            session = me.getSession(),
            id;

        if(form.isValid){
            if(!isEdit){
                id = dialog.getViewModel().get('currentFilm').id;
            }
            dialog.getSession().save();
            if(!isEdit){
                me.getStore('films').add(session.getRecord('Film', id));
            }
            me.onCancel();
        }

        me.viewSessionChanges();

        var batch = session.getSaveBatch();
        if(batch){
            batch.start();
        }
    },

    onAddActor: function (button, e, options) {
        var me = this;
        me.searchActors = Ext.create('Insurance.view.film.FilmSearchActor');
        me.dialog.add(me.searchActors);
    },

    onDeleteActor: function (button, e, options) {
        var customerGrid = this.lookupReference('actorsGrid'),
            selection = customerGrid.getSelectionModel().getSelection()[0];

            selection.drop();
    },

    onClearActors: function (button, e, options) {
        this.lookupReference('comboActors').clearValue();
    },

    onSaveActors: function (button, e, options) {
        var me = this,
            value = me.lookupReference('comboActors').getValue(),
            store = me.getStore('actors'),
            model = store.findRecord('actor_id', value),
            actorsGrid = me.lookupReference('actorsGrid'),
            actorsStore = actorsGrid.getStore();
        //create extjs store with empty data
        var newStore  = Ext.create('Ext.data.Store',{
            fields : ['actor_id','first_name','last_name', 'last_update'],
            autoLoad: true
        });
        if(actorsStore.getCount()==0){
            newStore.add(model);
            actorsStore = newStore;
            actorsGrid.setStore(actorsStore);
        }else{
            if(model){
                actorsStore.add(model);
            }

        }
        me.onCancelActors();
    },

    onExportPdf: function (button, e, options) {
        var mainPanel = Ext.ComponentQuery.query('mainpanel')[0];

        var newTab = mainPanel.add({
            xtype: 'panel',
            closable: true,
            glyph: Insurance.util.Glyphs.getGlyph('pdf'),
            title: 'Films PDF',
            layout: 'fit',
            html: 'Loading PDF.....',
            items: [{
                xtype: 'uxiframe',
                //src: 'http://www.flashscore.com/'
                src: 'php/pdf/exportFilmsPdf.php'
                }]
        });

        mainPanel.setActiveTab(newTab);
    },

    onExportExcel: function (button, e, options) {
        window.open('php/pdf/exportFilmsExcel.php');
    },

    onPrint: function (button, e, options) {
        var printer = Insurance.ux.grid.Printer;
        printer.printAutomatically = false;
        printer.print(this.lookupReference('filmsGrid'));
    }

});