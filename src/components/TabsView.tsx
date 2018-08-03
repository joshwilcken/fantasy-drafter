import * as React from 'react'
import { Component } from "react";
import { Tab } from 'semantic-ui-react'

import { PositionView } from "./PositionView";

interface ITabsViewProps  {
    fantasyPros: any;
    espn: any;
    nfl: any;
}

export class TabsView extends Component<ITabsViewProps> {

    public render() {
        const panes = [
            { menuItem: 'FantasyPros', render: () =>
            <Tab.Pane attached={false}>
                <PositionView
                    playerList={this.props.fantasyPros}
                    sorter="fantasyPros" />
            </Tab.Pane> },
            { menuItem: 'ESPN', render: () => <Tab.Pane attached={false}>
                <PositionView
                    playerList={this.props.espn}
                    sorter="espn" />></Tab.Pane> },
            { menuItem: 'NFL', render: () => <Tab.Pane attached={false}>
                <PositionView
                    playerList={this.props.nfl}
                    sorter="nfl" /></Tab.Pane> },
        ]
        return (
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        )
    }
}