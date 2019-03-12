import React, { Component } from "react";

import Nav from "../nav";
import "./index.less";

/**
 * base app layout
 */
abstract class BasicLayout extends Component<{}, {}> {
    public abstract renderMain(): React.ReactNode;
    render() {
        return (
            <div className="layout">
                <Nav />
                <div className="right">{this.renderMain()}</div>
            </div>
        );
    }
}

export default BasicLayout;
