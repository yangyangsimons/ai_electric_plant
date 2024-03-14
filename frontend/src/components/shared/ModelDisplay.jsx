import React, { useEffect } from 'react';

const ModelDisplay = () => {
    useEffect(() => {
        // 确保AMRT是全局可访问的，可以考虑在public/index.html中引入
        const viewer = new window.AMRT.Viewer('container', { offline: true });
        const path = 'http://localhost:5001/static/1763576691151736832_AMRT'; // 使用相对路径以便代理能够处理

        viewer.largeSceneLoader2.load(path);
    }, []);

    return <div id="container" style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }} />;
};

export default ModelDisplay;
