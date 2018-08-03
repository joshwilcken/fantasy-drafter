import * as React from "react";
import { Component } from "react";
import { List } from "semantic-ui-react";
import { IPlayerProps } from "./PlayerCard"

interface IPlayerItemProps extends IPlayerProps {
    sorter: string;
}

export class PlayerItem extends Component<IPlayerItemProps> {

    public render() {
        return (
            <List.Item>
                <List.Content>
                    <List.Header>{this.props.player.overallRanking[this.props.sorter]}. {this.props.player.name}</List.Header>
                    <List.Description>{this.props.player.position} | {this.props.player.team}</List.Description>
                </List.Content>
            </List.Item>
        )
    }
}