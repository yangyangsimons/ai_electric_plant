import React, { useEffect, useRef } from 'react';

const ModelDisplay = () => {
    // 创建对div容器的引用
    const containerRef = useRef(null);

    useEffect(() => {
        // 检查容器是否已经挂载

        if (containerRef.current) {
            const viewer = new window.AMRT.Viewer('container', { offline: true });
            const path = 'http://localhost:5001/static/1763576691151736832_AMRT';
            console.log(viewer.controls);
            viewer.controls.autoRotate = true;
            viewer.largeSceneLoader2.load(path);
            x
        }


    }, []);

    return <div id='container' ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }} />;
};

export default ModelDisplay;
