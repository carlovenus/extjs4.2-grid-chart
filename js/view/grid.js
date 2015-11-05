Ext.define('Sample.view.Grid', {
    extend : 'Ext.grid.Panel',
    title: 'Node monitor',
    store: 'Sample.store.Endpoints',
    flex:1,
    height: '100%',
    viewConfig: {
        loadMask: false
    },
    paused: false,
    tbar : [
        {
            xtype: 'combo',
            name : 'intervalCombo',
            fieldLabel: 'Frequency (millisec)',
            labelWidth: 110,
            store: Ext.create('Ext.data.Store', {
                fields: ['millisec'],
                data : [
                    {"millisec": 10000},
                    {"millisec": 5000},
                    {"millisec": 3000},
                    {"millisec": 1000}
                ]
            }),
            queryMode: 'local',
            displayField: 'millisec',
            valueField: 'millisec',
            value : 3000,
            editable : false
        },
        '->',
        {
            xtype: 'button',
            text: 'Pause',
            name : 'pauseBtn',
            iconCls: ''
        },
        {
            xtype: 'button',
            text: 'Clear',
            name : 'clearBtn',
            iconCls: ''
        }
    ],
    columns: {
        defaults: {
            flex : 1,
            menuDisabled: true
        },
        items : [{
            text: 'Endpoint',
            dataIndex: 'endpoint'
        },{
            text: 'Node 1',
            dataIndex: 'node1'
        },{
            text: 'Node 2',
            dataIndex: 'node2'
        },{
            text: 'Node 3',
            dataIndex: 'node3'
        },{
            text: 'Time',
            dataIndex: 'time'
        }]
    }
});