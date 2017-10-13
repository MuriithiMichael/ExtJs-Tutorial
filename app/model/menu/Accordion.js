/**
 * Created by Micah on 30/07/2017.
 */
Ext.define('Insurance.model.menu.Accordion', {
    extend: 'Ext.data.Model',

    requires:[
      'Insurance.model.menu.TreeNode'
    ],

    fields: [
        {name: 'id', type: 'int'},
        {name: 'text'},
        {name: 'iconCls'}
    ],

    hasMany: {
        model: 'Insurance.model.menu.TreeNode',
        foreignKey: 'parent_id',
        name: 'items'
    }

});