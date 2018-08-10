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

interface IPositionTabsState {
    sortBy: string;
}

export class PositionTabs extends Component<IPositionTabsProps, IPositionTabsState> {

    constructor(props: any) {
        super(props);

        this.state = {
            sortBy: "fantasyPros"
        }
    }

    public render() {

        const panes = [
            {
                menuItem: 'QB', render: () =>
                    <Tab.Pane attached={false}>
                        <PositionView
                            playerList={this.props.qb}
                            sorter={this.state.sortBy} />
                    </Tab.Pane>
            },
            {
                menuItem: 'RB', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.rb}
                        sorter={this.state.sortBy} />></Tab.Pane>
            },
            {
                menuItem: 'WR', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.wr}
                        sorter={this.state.sortBy} /></Tab.Pane>
            },
            {
                menuItem: 'TE', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.te}
                        sorter={this.state.sortBy} /></Tab.Pane>
            },
            {
                menuItem: 'D/ST', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.def}
                        sorter={this.state.sortBy} /></Tab.Pane>
            },
            {
                menuItem: 'Flex', render: () => <Tab.Pane attached={false}>
                    <PositionView
                        playerList={this.props.flex}
                        sorter={this.state.sortBy} /></Tab.Pane>
            },
        ]

        return (
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        )
    }
}