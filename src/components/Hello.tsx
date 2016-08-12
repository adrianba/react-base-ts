import * as React from "react";
import { Button } from "react-bootstrap";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div><Button>Hello from {this.props.compiler} and {this.props.framework}!</Button></div>;
    }
}