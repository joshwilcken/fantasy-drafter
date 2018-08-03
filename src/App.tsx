import {
  filter as _filter,
  // map as _map,
  orderBy as _orderBy,
} from "lodash";
import * as React from 'react';
import { Component, Fragment } from "react";
// import { PlayerCard } from "./components/PlayerCard";
// tslint:disable-next-line:no-var-requires
const data = require("./data.json")
import './App.css';

import { TabsView } from "./components/TabsView";


interface IAppState {
  data: any;
  rankingsQB: any;
  rankingsRB: any;
  rankingsWR: any;
  rankingsDefense: any;
  rankingsTE: any;
  rankingsK: any;
  rankingsFlex: any;
  rankingsOverall: any;

}

export class App extends Component<{}, IAppState> {

  constructor(props: any) {
    super(props);

    this.state = {
      data: null,
      rankingsDefense: null,
      rankingsFlex: null,
      rankingsK: null,
      rankingsQB: null,
      rankingsRB: null,
      rankingsTE: null,
      rankingsWR: null,
      // tslint:disable-next-line:object-literal-sort-keys
      rankingsOverall: {
        fantasyPros: null,
        nfl: null,
        // tslint:disable-next-line:object-literal-sort-keys
        espn: null
      }

    }
  }

  public componentDidMount() {
    this.init();
  }

  public render() {

    return (
      <Fragment>
        <div className="App">
          {/* {_map(this.state.rankingsOverall, (player) => {
            return (
              <PlayerCard
                player={player}
                key={player.overallRanking.fantasyPros} />
            )
          })
          } */}
          <TabsView
            fantasyPros={this.state.rankingsOverall.fantasyPros}
            espn={this.state.rankingsOverall.espn}
            nfl={this.state.rankingsOverall.nfl}/>
        </div>

      </Fragment>
    );
  }

  private init() {
    this.setState({
      data
    })
    this.sortOverallRankings("nfl");
    this.sortOverallRankings("espn");
    this.sortOverallRankings("fantasyPros")
    this.sortRBs();
    this.sortWRs();
  }

  private sortOverallRankings(site: string): void {
    const sorted = _orderBy(data, (player: any) => {
      return player.overallRanking[site]
    }, ["asc"])
    this.setState((prevState) => ({
      rankingsOverall: {
        ...prevState.rankingsOverall,
        [site]: sorted
      }
    }))
  }

  private sortRBs() {
    const filteredList = _filter(data, { "position": "RB" })
    const sorted = _orderBy(filteredList, (player) => {
      // tslint:disable-next-line:no-string-literal
      return ["positionRanking"]["fantasyPros"]
    })
    this.setState({
      rankingsRB: sorted
    })
  }

  private sortWRs() {
    const filteredList = _filter(data, { "position": "WR" })
    const sorted = _orderBy(filteredList, () => {
      // tslint:disable-next-line:no-string-literal
      return ["positionRanking"]["fantasyPros"]
    })
    this.setState({
      rankingsWR: sorted
    })
  }
}
