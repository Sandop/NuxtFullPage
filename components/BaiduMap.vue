<template>
    <div id="place_map">
        <div id="allmap" :style="mapStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'baidu-map',
    data() {
            return{
                mapStyle:{
                    width:'100%',
                    height:'100%'
                }
            }
        },
        props:{
            mapData: {
                type: Object,
                    // 地图在该视图上的高度
                    mapHeight:{
                        type:Number,
                        default:600
                    },
                    // 经度
                    longitude:{
                        type:Number,
                        default:116.460642
                    },
                    // 纬度
                    latitude:{
                        type:Number,
                        default:39.953156
                    },
                    title:{
                        type:String,
                        default:'中信消费金融有限公司'
                    },
                    description:{
                        type:String,
                        default:'地址：北京市朝阳区建国门外大街19号'
                    }
            }
        },
        mounted (){
            var map =new BMap.Map("allmap");
            var point =new BMap.Point(this.mapData.longitude,this.mapData.latitude);
            var marker =new BMap.Marker(point);   // 创建标注
            map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
            map.setMapStyle({style:'white'});  //地图添加黑夜主题背景为black
            map.addOverlay(marker);       // 将标注添加到地图中
            map.centerAndZoom(point,15);
            // 信息窗的配置信息
            var opts ={
                width :150,
                height:70,
                title :this.mapData.title,
            }
            var infoWindow =new BMap.InfoWindow(this.mapData.description, opts);// 创建信息窗口对象
            marker.addEventListener("click",function(){
                map.openInfoWindow(infoWindow,point);
            });
            map.enableScrollWheelZoom(true);
            map.openInfoWindow(infoWindow,point);//开启信息窗口

            var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT,offset: new BMap.Size(70, 40)});// 左下角，添加比例尺

            var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL,anchor:BMAP_ANCHOR_BOTTOM_LEFT,offset: new BMap.Size(20, 40)};       //type表示显示小型的平移缩放控件;anchor表示控件的停靠位置，即控件停靠在地图的哪个角;offset表示偏移量
            var top_left_navigation = new BMap.NavigationControl(opts);  //左下角，添加默认缩放平移控件
            map.addControl(top_left_navigation);
            map.addControl(top_left_control);
        }
}
</script>

<style lang="scss">
    div#place_map {
        overflow: hidden;
        width:  100%;
        height:  100%;

        .BMap_cpyCtrl.BMap_noprint.anchorBL {
            display: none !important;
        }
    }
    
</style>
