import * as React from 'react';
import './index.less';

export interface Props {
    left: React.ReactNode,
    right: React.ReactNode,
}
/**
 * base room layout for parent & student
 */
const RoomLayout = function(props: Props) {
    return (
        <div className="layout">
            <div className="room-main">
                <div className="left">
                    { props.left }
                </div>
                <div className="right">
                    { props.right }
                </div>
            </div>
        </div>
    );
}

export default RoomLayout;
