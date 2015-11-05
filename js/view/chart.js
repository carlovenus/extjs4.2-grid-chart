Ext.require('Ext.chart.*');

Ext.define('Sample.view.Chart', {
    extend: 'Ext.chart.Chart',
    animate: true,
    flex:1,
    height: '100%',
    store: 'Sample.store.Series',
    theme: 'Category1',
    legend: {
        position: 'right'
    },
    marker: {
        type: 'cross',
        size: 4,
        radius: 4,
        'stroke-width': 0
    },
    axes: [{
        type: 'Numeric',
        minimum: 0,
        position: 'left',
        fields: ['node', 'node2', 'node3', 'node4', 'node5'],
        title: 'Requests',
        grid: {
            odd: {
                opacity: 1,
                stroke: '#bbb',
                'stroke-width': 0.5
            }
        }
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['time']
    }],
    series: [{
        type: 'line',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'left',
        xField: 'time',
        yField: 'node1',
        markerCfg: this.marker
    },{
        type: 'line',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'left',
        xField: 'time',
        yField: 'node2',
        markerCfg: this.marker
    },{
        type: 'line',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'left',
        xField: 'time',
        yField: 'node3',
        markerCfg: this.marker
    }]
});