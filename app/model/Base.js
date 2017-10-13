/**
 * Created by Micah on 17/08/2017.
 */
Ext.define('Insurance.model.Base', {
    extend: 'Ext.data.Model',

    requires:[
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Insurance.util.Util'
    ],

    schema: {
        namespace: 'Insurance.model',
        urlPrefix: 'php',
        proxy:{
            type: 'ajax',
            api:{
                read: '{prefix}/{entityName:lowercase}/list.php',
                create: '{prefix}/{entityName:lowercase}/create.php',
                update: '{prefix}/{entityName:lowercase}/update.php',
                destroy: '{prefix}/{entityName:lowercase}/destroy.php'
            },
            reader:{
                type: 'json',
                rootProperty: 'data'
            },
            writer:{
                type: 'json',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            listeners:{
                exception: function (proxy, response, operation) {
                    Insurance.util.Util.showErrorMsg(response.responseText);
                }
            }
        }
    }
});