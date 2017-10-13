/**
 * Created by Micah on 18/08/2017.
 */
Ext.define('Insurance.view.security.UsersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.users-grid',

    reference: 'usersGrid',

    columns: [
        {
            width: 150,
            dataIndex: 'userName',
            text: 'Username'
        },
        {
            width: 200,
            dataIndex: 'name',
            flex: 1,
            text: 'Name'
        },
        {
            width: 250,
            dataIndex: 'email',
            text: 'Email'
        },
        {
            width: 150,
            dataIndex: 'groupName',
            text: 'Group'
        }
    ],
    bind: '{users}'
});