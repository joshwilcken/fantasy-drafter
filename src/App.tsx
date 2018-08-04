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

import { PositionTabs } from "./components/PositionTabs";
import { TabsView } from "./components/TabsView";


interface IAppState {
  data: any;
  qb: any;
  rb: any;
  wr: any;
  def: any;
  te: any;
  flex: any;
  rankingsOverall: any;

}

export class App extends Component<{}, IAppState> {

  constructor(props: any) {
    super(props);

    this.state = {
      data: null,
      def: null,
      flex: null,
      qb: null,
      rb: null,
      te: null,
      wr: null,
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
          <TabsView
            fantasyPros={this.state.rankingsOverall.fantasyPros}
            espn={this.state.rankingsOverall.espn}
            nfl={this.state.rankingsOverall.nfl}/>
          <PositionTabs
            qb={this.state.qb}
            rb={this.state.rb}
            wr={this.state.wr}
            te={this.state.te}
            def={this.state.def}
            flex={this.state.flex}/>
        </div>

      </Fragment>
    );
  }

  private init() {
    this.setState({
      data
    }, () => {
      this.filterQB();
      this.filterRB();
      this.filterWR();
      this.filterTE();
      this.filterDEF();
      this.filterFlex();
      this.sortOverallRankings("nfl");
      this.sortOverallRankings("espn");
      this.sortOverallRankings("fantasyPros")
    })
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

  private filterQB() {
    const filteredByPosition: any = _filter(this.state.data, (players) => {
      return players.position.qb
    })
    this.setState({
      qb: filteredByPosition
    })
  }

  private filterRB() {
    const filteredByPosition: any = _filter(this.state.data, (players) => {
      return players.position.rb
    })
    this.setState({
      rb: filteredByPosition
    })
  }

  private filterWR() {
    const filteredByPosition: any = _filter(this.state.data, (players) => {
      return players.position.WR
    })
    this.setState({
      wr: filteredByPosition
    })
  }

  private filterTE() {
    const filteredByPosition: any = _filter(this.state.data, (players) => {
      return players.position.TE
    })
    this.setState({
      te: filteredByPosition
    })
  }

  private filterDEF() {
    const filteredByPosition: any = _filter(this.state.data, (players) => {
      return players.position.DEF
    })
    this.setState({
      def: filteredByPosition
    })
  }

  private filterFlex() {
    const filteredByRB: any = _filter(this.state.data, (players) => {
      return players.position.RB
    })
    const filteredByWR: any = _filter(this.state.data, (players) => {
      return players.position.WR
    })
    this.setState({
      flex: {...filteredByRB, ...filteredByWR}
    })
  }

}
