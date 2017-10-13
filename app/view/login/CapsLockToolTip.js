/**
 * Created by Micah on 11/07/2017.
 */
Ext.define('Insurance.view.login.CapsLockToolTip', {
    extend: 'Ext.tip.QuickTip',
    xtype: 'capslocktooltip',

    target: 'password',
    anchor: 'top',
    anchorOffset: 0,
    width: 300,
    dismissDelay: 0,
    autoHide: false,
    title: '<div class="fa fa-exclamation-triangle"> Caps Lock is On</div>',
    html: '<div>Having Caps Lock on may cause you to enter ' +
    'your password incorrectly.</div><br/>' +
    '<div>You should press Caps Lock to turn it off ' +
    'before entering your password.</div>'
    // title: '<div class="fa fa-exclamation-triangle"> '+ translations.capsLockTitle+'</div>',
    // html: '<div>'+ translations.capsLockMsg1 + translations.capsLockMsg2 +'</div><br/>' +
    // '<div>'+  translations.capsLockMsg3 + translations.capsLockMsg4+'</div>'
});