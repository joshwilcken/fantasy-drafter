import { map as _map } from "lodash";
import * as React from "react";
import { Component, Fragment } from "react";
import { List } from "semantic-ui-react";

import { PlayerItem } from "./PlayerItem"

interface IPositionViewProps {
    playerList: any;
    sorter: string;
}

export class PositionView extends Component<IPositionViewProps> {

    public render() {
        return (
            <Fragment>
                <List divided={true} relaxed={true} className="position-view-width">
                    {
                        _map(this.props.playerList, (player) => {
                            return (
                                <PlayerItem
                                    key={player.overallRanking[this.props.sorter]}
                                    player={player}
                                    sorter={this.props.sorter}/>
                            )
                        })
                    }
                </List>
            </Fragment>
        );
    }
}