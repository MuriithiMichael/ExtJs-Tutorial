/**
 * Created by Micah on 17/08/2017.
 */
Ext.define('Insurance.model.security.User', {
    extend: 'Insurance.model.security.Base',


    entityName: 'User',

    identifier: 'sequential',

    fields: [
        { name: 'name' },
        { name: 'userName' },
        { name: 'email' },
        { name: 'picture' },
        { name: 'group_id', type: 'int' },
        {name: 'groupName', type: 'string', persist: false,
            convert: function (v, rec) {
                var data  = rec.data;
                if(data.group && data.group.name){
                    return data.group.name
                }
                return data.group_id;
            }
        }
    ],

    validators: {
        name: [
            {type: 'presence', message: 'This field is mandatory'},
            {type: 'length', min: 3, max: 100}
        ],
        userName: [
            {type: 'exclusion', list: ['Admin', 'Operator']},
            {type: 'format', matcher: /([a-z]+)/i},
            {type: 'presence', message: 'This field is mandatory'},
            {type: 'length', min: 2, max: 25}
        ],
        email: [
            {type: 'presence', message: 'This field is mandatory'},
            {type: 'length', min: 5, max: 100},
            {type: 'email'}
        ],
        group_id: 'presence'
    },

    hasOne: [
        {
            model: 'Insurance.model.security.Group',
            name: 'group',
            foreignKey: 'group_id',
            associationKey: 'group'
        }
    ]
});