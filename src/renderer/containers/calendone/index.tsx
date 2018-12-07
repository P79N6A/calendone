import * as React from 'react';
import Layout from '../layout';
import './index.less';
/**
 * teacher room
 * init room all room service
 */
class Calendone extends React.Component {
    render() {
        return (
            <Layout
                left={<nav />}
                right={<article />}
            />
        );
    }
}

export default Calendone;
