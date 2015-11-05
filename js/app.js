Ext.application({
    name: 'Sample',
    appFolder: rootUrl + 'js',
    controllers : ['Monitor'],
    launch : function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'hbox',
            padding : 10,
            items: [ Ext.create('Sample.view.Grid'), Ext.create('Sample.view.Chart')]
        });
    }
});
