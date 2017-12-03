/**
 * Created by Micah on 21/11/2017.
 */
Ext.define('Insurance.controller.Root', {
    extend: 'Ext.app.Controller',

    requires: [
        'Insurance.util.Util'
    ],

    init: function() {
        this.addRef([
            {
                ref: 'mainPanel',
                selector: 'mainpanel'
            },
            {
                ref: 'main',
                selector: '[xtype=mainmenu]'
            },
            {
                ref: 'filmsGrid',
                selector: '[xtype=films-grid]'
            }
            ]);

        this.callParent();
    },

    routes: {
        'home': 'onHome',

        'user|actorsgrid|categoriesgrid|languagesgrid|citiesgrid|countriesgrid|films|salesfilmcategory': {
            before: 'onBeforeRoute',
            action: 'onRoute'
        },

        'films:/id':{
            before: 'onBeforeFilmSelect',
            action: 'onFilmSelect',
            condition: '([0-9]+)'
        }
    },

    onHome: function () {
        var mainPanel = this.getMainPanel();
        if(mainPanel){
            mainPanel.setActiveTab(0);
        }
    },

    listen: {
        controller: {
            '*':{
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },

    onBeforeRoute: function (action) {
        var hash = Ext.util.History.getToken();

        Ext.Ajax.request({
            url : 'php/security/verifyEntitlement.php',
            params : {
                module : hash
            },
            success : function (conn, response, options, eOpts) {

                var result = Insurance.util.Util.decodeJSON(conn.responseText);

                if(result.success){
                    action.resume();
                }else{
                    Insurance.util.Util.showErrorMsg(result.msg);
                    action.stop(); 
                }
            },
            failure : function (conn, response, options, eOpts) {
                Insurance.util.Util.showErrorMsg(conn.responseText);
                action.stop();
            }
        });
    },

    onRoute: function () {
        var me = this,
            hash = Ext.util.History.getToken(),
            main = me.getMain();
        me.locateMenuItem(main, hash);
    },

    locateMenuItem: function (mainMenu, hash) {
        var me = this,
            root, node;
        var items = Ext.ComponentQuery.query('menutree');
        Ext.each(mainMenu.items.items, function (tree) {
            if(tree.getXType()=== 'menutree'){
                root = tree.getRootNode();
                node = root.findChild('className', hash);
                if(node){
                    me.openTab(node);
                    return;
                }
            }
        });
    },

    openTab: function (record) {
        var mainPanel = this.getMainPanel();

        var newTab = mainPanel.items.findBy(function (tab) {
            return tab.title === record.get('text');
        });

        if(!newTab){
            newTab = mainPanel.add({
                xtype: record.get('className'),
                glyph: record.get('glyph') + '@FontAwesome',
                title: record.get('text'),
                closable: true
            });
        }

        mainPanel.setActiveTab(newTab);
    },

    onUnmatchedRoute: function () {
        Insurance.util.Util.showErrorMsg('Hash does not exist!!!');
    },

    onBeforeFilmSelect: function (id, action) {
        var me = this,
            main = me.getMain();

        this.locateMenuItem(this.getMain(), 'films');

        var record = this.getFilmsGrid().getStore().findRecord('fiml_id', id);
        if(record){
            action.resume();
        }else{
            action.stop();
        }
    },

    onFilmSelect: function () {
        this.getFilmsGrid().fireEvent('selectfilm', id);
    }
    
});