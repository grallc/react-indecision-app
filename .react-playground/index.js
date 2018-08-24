
        import React from 'react';
        import ReactDom from 'react-dom';
        import Playground from 'react-playground-kit';
        import * as module from '/home/corentin/Coding/react-indecision-app/public/index.html';

        ReactDom.render(React.createElement(Playground, { module }), document.getElementById('app'));
    