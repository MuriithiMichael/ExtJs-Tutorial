/**
 * Created by Micah on 20/06/2017.
 */
Ext.define('Insurance.view.company.Company', {
    extend: 'Ext.Container',

    requires: [
        'Insurance.view.company.CompanyModel',
		'Insurance.view.company.CompanyController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'company',
    */

    viewModel: {
        type: 'company'
    },

    controller: 'company',

    items: [
        /* include child components here */
    ]
});