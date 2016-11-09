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
        'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('left2'));

        var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom',
                        fontSize :5
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline : 'top'
                    }
                }
            }
        }
        var labelBottom = {
            normal : {
                color: '#ccc',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = ['13%', '18%'];
        var option = {
            legend: {
                orient:'vertical',
                x : 'left',
                y : '20%',
                itemGrap:6,
                itemWidth:15,
                itemHeight:10,
                data:[
                    {name:'销售量',icon:'bar'},
                    {name:'退货率',icon:'bar'},
                    // {name:'销售量',icon:'bar'},
                    {name:'负面评价',icon:'bar'},
                    {name:'投诉举报',icon:'bar'},
                    {name:'疫情疫病',icon:'bar'},
                    {name:'警示通报',icon:'bar'},
                    {name:'媒体舆情',icon:'bar'},
                ],
                textStyle:{
                    color:"#ffffff"
                }

            },
            title : {
                text: '抽样检测数据',
                // subtext: '来自 xxx 数据中心',
                x: 'center',
                textStyle:{
                    color:'#FFFFFF'
                }
            },

            series : [
                {
                    type : 'pie',
                    center : ['30%', '30%'],
                    radius : radius,
                    x: '0%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:46, itemStyle : labelBottom},
                        {name:'销售量', value:54,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['50%', '30%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:56, itemStyle : labelBottom},
                        {name:'退货率', value:44,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['70%', '30%'],
                    radius : radius,
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:65, itemStyle : labelBottom},
                        {name:'负面评价', value:35,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['90%', '30%'],
                    radius : radius,
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:70, itemStyle : labelBottom},
                        {name:'投诉举报', value:30,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['40%', '55%'],
                    radius : radius,
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:73, itemStyle : labelBottom},
                        {name:'疫情疫病', value:27,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['60%', '55%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x: '0%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'警示通报', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['80%', '55%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'20%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'媒体舆情', value:22,itemStyle : labelTop}
                    ]
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);