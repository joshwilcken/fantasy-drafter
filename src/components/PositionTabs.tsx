import * as React from "react";
import { Component } from "react";
import { PositionView } from "./PositionView";

import { Tab } from 'semantic-ui-react';

interface IPositionTabsProps {
    qb: any;
    rb: any;
    wr: any;
    te: any;
    def: any;
    flex: any;
}

export class PositionTabs extends Component<IPositionTabsProps> {

    constructor(props: any) {
        super(props);
    }

    public render() {

        const panes = [
            {
                menuItem: 'QB', render: () =>
                    <Tab.Pane attached={false}>
                        <PositionView
                            playerList={this.props.qb}
                            sorter="QB" />
                    </Tab.Pane>
            },
            {
                menuItem: 'RB', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.rb}
                        sorter="RB" />></Tab.Pane>
            },
            {
                menuItem: 'WR', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.wr}
                        sorter="WR" /></Tab.Pane>
            },
            {
                menuItem: 'TE', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.te}
                        sorter="TE" /></Tab.Pane>
            },
            {
                menuItem: 'D/ST', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.def}
                        sorter="D/ST" /></Tab.Pane>
            },
            {
                menuItem: 'Flex', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.def}
                        sorter="Flex" /></Tab.Pane>
            },


        ]

        return (
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        )
    }
}