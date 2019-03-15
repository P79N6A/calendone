import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

import Nav from "./nav";
import Header from "./header";
import "./index.less";

/**
 * base app layout
 */
abstract class BasicLayout extends Component<RouteComponentProps<{}>, {}> {
    public abstract renderMain(): React.ReactNode;
    render() {
        return (
            <div className="layout">
                <Nav location={this.props.location} />
                <div className="main">
                    <Header />
                    {this.renderMain()}
                </div>
            </div>
        );
    }
}

export default BasicLayout;
