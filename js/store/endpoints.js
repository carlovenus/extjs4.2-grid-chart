Ext.define('Sample.store.Endpoints', {
    extend:'Ext.data.Store',
    autoLoad : true,
    model : 'Sample.model.Endpoint',
    sorters : [{
        property: 'time',
        direction: 'DESC'
    }],
    proxy: {
        type: 'ajax',
        url : rootUrl + 'data/read.php',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'totalResults'
        }
    }
});