import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <LinearProgress />;

export default ReactDelayRender({ delay: 300 })(Loading);
