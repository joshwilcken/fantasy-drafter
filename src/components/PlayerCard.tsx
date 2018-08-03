import { sum as _sum, values as _values } from "lodash";
import * as React from "react";
import { Component, Fragment } from "react";
import { Card } from 'semantic-ui-react'

export interface IPlayerProps {
    player: {
        name: string;
        team: string;
        picture: string;
        position: "RB" | "QB" | "WR" | "Defense" | "TE" | "K";
        bye: number;
        overallRanking: any;
        positionRanking: any;
        previousYearStats?: any;
    }
}

export class PlayerCard extends Component<IPlayerProps> {

    public render() {
        return (
            <Fragment>
                <Card>
                    <Card.Content>
                        <Card.Header>{this.props.player.name}</Card.Header>
                        <Card.Meta>{this.props.player.team}</Card.Meta>
                        <Card.Meta>{this.props.player.position}</Card.Meta>
                    </Card.Content>
                    <Card.Content>
                        <Card.Meta>Overall Ranking: {this.overallAverageRank()}</Card.Meta>
                        <Card.Meta>Position Ranking: {this.positionRank()}</Card.Meta>
                        <Card.Meta>Bye Week: {this.props.player.bye}</Card.Meta>
                    </Card.Content>
                </Card>
            </Fragment>
        )
    }

    private overallAverageRank = (): number => {
        const rankings = _values(this.props.player.overallRanking)
        const average = (_sum(rankings)) / rankings.length;
        return Math.floor(average);
    }

    private positionRank = (): number => {
        const rankings = _values(this.props.player.positionRanking)
        const average = (_sum(rankings)) / rankings.length;
        return Math.floor(average);
    }
}