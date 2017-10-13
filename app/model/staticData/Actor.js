/**
 * Created by Micah on 13/09/2017.
 */
Ext.define('Insurance.model.staticData.Actor', {
    extend: 'Insurance.model.staticData.Base',

    entityName: 'Actor',

    idProperty: 'actor_id',

    fields: [
        {name: 'actor_id'},
        {name: 'first_name'},
        {name: 'last_name'}
    ],

    validators: {
        first_name: [
            {type: 'presence', message: 'This field is mandatory'},
            {type: 'length', min: 2, max: 45}
        ],
        last_name: [
            {type: 'presence', message: 'This field is mandatory'},
            {type: 'length', min: 2, max: 45}
        ]
    },

    manyToMany: {
        ActorFilms:{
            type: 'Film',
            role: 'films',
            field: 'film_id',
            right: {
                field: 'actor_id',
                role: 'actors'
            }
        }
    }
});