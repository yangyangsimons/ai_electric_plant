import React, { useEffect, useRef } from 'react';

const PredictionDisplay = () => {
    // 创建对div容器的引用
    const containerRef = useRef(null);

    useEffect(() => {
        // 检查容器是否已经挂载

        if (containerRef.current) {
            //if window.location.origin is http://localhost:3000
            //then baseUrl is http://localhost:5001
            let baseUrl = window.location.origin;
            if (window.location.origin === 'http://localhost:3000') {
                baseUrl = 'http://localhost:5001';
            }
            console.log(baseUrl)
            const viewer = new window.AMRT.Viewer('container', { offline: true });
            window.viewer = viewer;
            let path = `${baseUrl}/static/phase1_AMRT`;
            let path2 = `${baseUrl}/static/phase2_AMRT`;
            let path3 = `${baseUrl}/static/phase3_AMRT`;
            let model2 = viewer.largeSceneLoader2.load(path2);
            let model3 = viewer.largeSceneLoader2.load(path3);
            let model = viewer.largeSceneLoader2.load(path);

            window.model2 = model2;
            window.model3 = model3;
            window.model = model;


        }


    }, []);

    return <div id='container' ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }} />;
};

export default PredictionDisplay;
