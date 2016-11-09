/**
 * Created by yuri on 16-11-4.
 */
// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/theme/macarons',
        'echarts/chart/pie', // 使用柱状图就加载bar模块，按需加载
        'echarts/chart/bar',
        'echarts/chart/line'
    ],
    drawEcharts
);
function drawEcharts(ec) {
    drawPie1(ec);
    drawPie2(ec);
    drawLine1(ec);
    drawLine2(ec);
    drawBar1(ec);
    drawBar2(ec);
    drawBar3(ec);
}
function drawPie1(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('left2'));

    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom',
                    fontSize: 8
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    color:'#ffffff',
                    baseline: 'top',
                    fontSize: 8
                }
            }
        }
    }
    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = ['13%', '18%'];
    var option = {
        legend: {
            orient: 'vertical',
            x: '5%',
            y: '20%',
            itemGrap: 6,
            itemWidth: 20,
            itemHeight: 10,
            data: [
                {name: '销售量', icon: 'bar'},
                {name: '退货率', icon: 'bar'},
                // {name:'销售量',icon:'bar'},
                {name: '负面评价', icon: 'bar'},
                {name: '投诉举报', icon: 'bar'},
                {name: '疫情疫病', icon: 'bar'},
                {name: '警示通报', icon: 'bar'},
                {name: '媒体舆情', icon: 'bar'},
            ],
            textStyle: {
                color: "#ffffff",
                fontSize: 8
            }

        },
        title: {
            text: '抽样检测数据',
            // subtext: '来自 xxx 数据中心',
            x: 'center',
            textStyle: {
                color: '#FFFFFF',
                fontSize: 20
            }
        },

        series: [
            {
                type: 'pie',
                center: ['30%', '30%'],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 46, itemStyle: labelBottom},
                    {name: '销售量', value: 54, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['50%', '30%'],
                radius: radius,
                x: '20%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 56, itemStyle: labelBottom},
                    {name: '退货率', value: 44, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['70%', '30%'],
                radius: radius,
                x: '40%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 65, itemStyle: labelBottom},
                    {name: '负面评价', value: 35, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['90%', '30%'],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 70, itemStyle: labelBottom},
                    {name: '投诉举报', value: 30, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['40%', '55%'],
                radius: radius,
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 73, itemStyle: labelBottom},
                    {name: '疫情疫病', value: 27, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['60%', '55%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '警示通报', value: 22, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['80%', '55%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '20%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '媒体舆情', value: 22, itemStyle: labelTop}
                ]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawPie2(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('center'));

    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom'
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    color:'#ffffff',
                    baseline: 'top'
                }
            }
        },
    }
    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = ['10%', '15%'];
    var option = {
        legend: {
            orient: 'vertical',
            x: '1%',
            y: '2%',
            itemGrap:10,
            itemWidth:45    ,
            itemHeight:20,
            data: [
                {name: '销售量', icon: 'bar'},
                {name: '退货率', icon: 'bar'},
                {name: '销售量', icon: 'bar'},
                {name: '负面评价', icon: 'bar'},
                {name: '投诉举报', icon: 'bar'},
                {name: '疫情疫病', icon: 'bar'},
                {name: '警示通报', icon: 'bar'},
                {name: '媒体舆情', icon: 'bar'},
            ],
            textStyle:{
                color:'#ffffff'
            }

        },
        series: [
            {
                type: 'pie',
                center: ['12%', '10%'],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 46, itemStyle: labelBottom},
                    {name: '销售量', value: 54, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['25%', '10%'],
                radius: radius,
                x: '20%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 56, itemStyle: labelBottom},
                    {name: '退货率', value: 44, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['38%', '10%'],
                radius: radius,
                x: '40%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 65, itemStyle: labelBottom},
                    {name: '负面评价', value: 35, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['51%', '10%'],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 70, itemStyle: labelBottom},
                    {name: '投诉举报', value: 30, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['18.5%', '30%'],
                radius: radius,
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 73, itemStyle: labelBottom},
                    {name: '疫情疫病', value: 27, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['31.5%', '30%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '警示通报', value: 22, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['44.5%', '30%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '20%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '媒体舆情', value: 22, itemStyle: labelTop}
                ]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawBar2(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('right1'), 'macarons');
    var option4 = {
        title: {
            text: '2016年B2C',
            x: 'center',
            textAlign: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        xAxis: [
            {

                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 3,
                max: 20,
                axisLabel: {
                    formatter: '{value} W'
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '38%',
            width: '40%',
            height: ' 20%',
            backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '10',
                data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4, true);
};
function drawBar3(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('center'), 'macarons');
    var option4 = {
        // title: {
        //     text: '2016年B2C',
        //     x: 'center'
        // },
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        xAxis: [
            {
                name: '监控产品',
                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                textStyle: {
                    fontSize: 8
                }
            }
        ],
        yAxis: [
            {
                name: '数量',
                type: 'value',
                splitNumber: 2,
                max: 10,
                axisLabel: {
                    formatter: '{value} W'
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '20%',
            y: '25%',
            width: '60%',
            height: '10%'
//                        backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: 20,    // bar 的宽度
                data: [5.5, 8.0, 9.0, 7.0, 6.5]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option4, true);
};
