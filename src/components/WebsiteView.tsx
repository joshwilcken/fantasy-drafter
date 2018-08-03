import { orderBy as _orderBy} from "lodash";
import * as React from "react";
import { Component, Fragment } from "react";

import { PositionView }  from "./PositionView"

interface IPositionViewProps {
    website: string;
    playerList: any;
}

interface IPositionViewState {
    sortedList: any;
}

export default class WebsiteView extends Component<IPositionViewProps, IPositionViewState> {

    constructor(props: IPositionViewProps) {
        super(props)

        this.state = {
            sortedList: null
        }
    }

    public componentDidMount() {
        this.sortByWebsite();
    }

    public render() {
        return (
            <Fragment>
                <div>FantasyPros</div>
                <PositionView playerList={this.state.sortedList}
                    sorter={"nfl"}/>
            </Fragment>
        )
    }

    private sortByWebsite() {
        const sortedList = _orderBy(this.props.playerList, (player: any) => {
            return player.overallRanking.nfl
          }, ["asc"])
        this.setState({
            sortedList
        })
    }
 }