import React, { useEffect, useRef } from 'react';

const PredictionDisplay = () => {
    // 创建对div容器的引用
    const containerRef = useRef(null);

    useEffect(() => {
        // 检查容器是否已经挂载

        if (containerRef.current) {
            const viewer = new window.AMRT.Viewer('container', { offline: true });
            window.viewer = viewer;
            const path = 'http://localhost:5001/static/1768839893078904832_AMRT';
            const model = viewer.largeSceneLoader2.load(path);
            window.model = model;
        }


    }, []);

    return <div id='container' ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }} />;
};

export default PredictionDisplay;
