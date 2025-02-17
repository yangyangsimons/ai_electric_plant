import React, { useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMeasure } from 'stores/measureSlice';
const CesiumViewPhase3 = () => {
    let baseUrl;
    const Cesium = window.Cesium;
    // 创建对div容器的引用
    // const containerRef = useRef(null);
    const viewerRef = useRef(null);
    const cesiumViewerRef = useRef(null); // 创建对div容器的引用

  // 定义加载3DTile的函数
  const tileSet = (tileset, longitude, latitude, height) => {
    const boundingSphere = tileset.boundingSphere;
    const cartographic_original = Cesium.Cartographic.fromCartesian(boundingSphere.center);

    const cartographic_offset = Cesium.Cartographic.fromDegrees(longitude, latitude, height);
    const Cartesian3_original = Cesium.Cartesian3.fromRadians(
      cartographic_original.longitude,
      cartographic_original.latitude,
      cartographic_original.height
    );
    const Cartesian3_offset = Cesium.Cartesian3.fromRadians(
      cartographic_offset.longitude,
      cartographic_offset.latitude,
      cartographic_offset.height
    );

    const translation = Cesium.Cartesian3.subtract(
      Cartesian3_offset,
      Cartesian3_original,
      new Cesium.Cartesian3()
    );

    tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
  }

  // 可选：如果需要tileSetAll函数也可以在这里定义
  const tileSetAll = (tileset,longitude,latitude,height,rotateX,rotateY,rotateZ,scale) =>
  {
        //旋转角度设置
        var mx = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(rotateX));
        var my = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(rotateY));
        var mz = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(rotateZ));
        var rotationX = Cesium.Matrix4.fromRotationTranslation(mx);
        var rotationY = Cesium.Matrix4.fromRotationTranslation(my);
        var rotationZ = Cesium.Matrix4.fromRotationTranslation(mz);
        //平移 修改经纬度
        var position = Cesium.Cartesian3.fromDegrees(longitude,latitude,height);
        var transform = Cesium.Transforms.eastNorthUpToFixedFrame(position);
        //旋转、平移矩阵相乘
        Cesium.Matrix4.multiply(transform, rotationX, transform);
        Cesium.Matrix4.multiply(transform, rotationY, transform);
        Cesium.Matrix4.multiply(transform, rotationZ, transform);
        //缩放 修改缩放比例
        var scale1 = Cesium.Matrix4.fromUniformScale(scale);
        Cesium.Matrix4.multiply(transform, scale1, transform);
        //赋值给tileset
        tileset._root.transform = transform;

  }
  const add3DTiles = (viewer, url, longitude, latitude, height, rotateX=90, rotateY = 90, rotateZ = 0, ) => {
    console.log('this is the url',url);
    console.log('viewer',viewer);
    console.log('view.scene',viewer.scene.primitives);
    const tileset = viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
        url: url,
        maximumScreenSpaceError: 2,
        maximumMemoryUsage: 5120
      })
    );
    tileset.readyPromise.then(tileset => {
      tileSet(tileset, longitude, latitude, height);
      viewer.zoomTo(tileset);
      console.log('Tileset loaded successfully.');
  })
  }

  const dispatch = useDispatch();
  const isMeasureActive = useSelector((state) => state.measure.isActive);
  const activateMeasure = () => {
    if (cesiumViewerRef.current) {
      console.log("measuring------------isMeasureActive", isMeasureActive)
        const viewer = cesiumViewerRef.current;
        let measure = new Cesium.Measure(viewer);
        measure.drawLineMeasureGraphics({
            clampToGround: false, measure: true, style: {
                line: {
                    width: 2,
                    material: Cesium.Color.BLUE.withAlpha(0.8)
                },
                point: {
                    color: Cesium.Color.RED,
                    pixelSize: 5,
                    outlineColor: Cesium.Color.GREEN,
                    outlineWidth: 3
                }
            }, callback: (e) => {
                console.log(e, "Measurement completed");
            }
        });
    }
};


// 初始化Cesium
    useEffect(() => {
        // 检查容器是否已经挂载重新

        if (viewerRef.current) {
            //if window.location.origin is http://localhost:3000
            //then baseUrl is http://localhost:5001
            baseUrl = window.location.origin;
            if (window.location.origin === 'http://localhost:3000') {
                baseUrl = 'http://localhost:5001';
            }
            console.log(baseUrl);
        }            // 
        if (!Cesium || !viewerRef.current) return;

        // 初始化viewer
        const viewer = new Cesium.Viewer(viewerRef.current, {
            animation:false,       //是否显示动画控件
            homeButton:false,       //是否显示home键
            geocoder:true,         //是否显示地名查找控件，如果设置为true，则无法查询
            baseLayerPicker:false, //是否显示图层选择控件
            timeline:false,        //是否显示时间线控件
            fullscreenButton:true, //是否全屏显示
            infoBox:true,         //是否显示点击要素之后显示的信息
            sceneModePicker:false,  //是否显示投影方式控件  三维/二维
            navigationInstructionsInitiallyVisible:false, //导航指令
            navigationHelpButton:false,     //是否显示帮助信息控件
            selectionIndicator:false, //是否显示指示器组件
         
        });
         // 隐藏Cesium logo
    viewer._cesiumWidget._creditContainer.style.display = "none"; 

    // 移除默认bingMap
    viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

    // 加载ArcGIS在线影像地图
       //arcgis在线影像地图
       viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
        name:"img_arcgis",
        url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
    }));  //显示在线的地面

    viewer.scene.globe.depthTestAgainstTerrain = true;
    viewer.scene.globe.enableLighting = true;

    // 将viewer存起来以备后续使用
    cesiumViewerRef.current = viewer;

    // 加载3dtiles数据
    console.log('this is the loading url sources',`${baseUrl}/static/tileset.json`);
    add3DTiles(viewer, `${baseUrl}/static/tileset.json`, 115.18508, 22.76195, 3);


    return () => {
      if (cesiumViewerRef.current) {
        cesiumViewerRef.current.destroy();
        cesiumViewerRef.current = null;
      }
    };
  }, []);

  // 当点击按钮时激活测量
useEffect(() => {
  if (isMeasureActive) {
      activateMeasure();
      dispatch(toggleMeasure());
  }
}, [isMeasureActive]);
    return <div id='container3' ref={viewerRef} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }} />;
};

export default CesiumViewPhase3;
