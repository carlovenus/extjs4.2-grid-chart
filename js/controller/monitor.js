Ext.define('Sample.controller.Monitor', {
    extend: 'Ext.app.Controller',
    views : ['Sample.view.Grid', 'Sample.view.Chart'],
    stores : ['Sample.store.Endpoints', 'Sample.store.Series'],
    models : ['Sample.model.Endpoint'],
    init: function() {
        this.control({
            'grid' : {
                render : this.onGridRendered
            },
            '[name=pauseBtn]' : {
                click : this.pauseMonitor
            },
            '[name=clearBtn]' : {
                click : this.clearMonitor
            }
        });
    },
    refs: [{
        ref: 'grid',
        selector: 'grid'
    },{
        ref: 'chart',
        selector: 'chart'
    }],
    onGridRendered : function(grid){
        var store = grid.getStore();
        store.mon(store, 'load', this.gridStoreLoaded, this);
    },
    gridStoreLoaded : function(store, recs){
        var stopMonitor = store.paused;
        var timeout;
        if(!stopMonitor){
            store.reqTimeout = setTimeout(function () {
                store.load({addRecords: true});
            }, this.getInterval());
        }else{
            clearTimeout(store.reqTimeout);
        }
        this.generateDataChart(recs);
    },
    generateDataChart : function(records){
        var series  = [];
        var sumNode1 = sumNode2 = sumNode3 = 0;

        var currentdate = new Date();
        var now = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        Ext.each(records, function(record){
            sumNode1 += record.get('node1');
            sumNode2 += record.get('node2');
            sumNode3 += record.get('node3');
        });

        series.push({
            node1 : sumNode1,
            node2 : sumNode2,
            node3 : sumNode3,
            time : now
        })

        this.getChart().getStore().loadData(series, true);
    },
    pauseMonitor : function(btn){
        var gridStore = this.getGrid().getStore();
        if(gridStore.paused){
            gridStore.load({addRecords: true});
            btn.setText('Pause');
        }else{
            clearTimeout(gridStore.reqTimeout);
            btn.setText('Start');
        }
        gridStore.paused = !gridStore.paused;
    },
    getInterval: function(){
        return this.getGrid().down('[name=intervalCombo]').getValue();
    },
    clearMonitor : function(){
        this.getGrid().getStore().removeAll();
        this.getChart().getStore().removeAll();
    }
});
