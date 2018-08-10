import * as React from "react";
import { Component } from "react";
import { Button, Input, Modal } from "semantic-ui-react";

interface IAddTeamsModalProps {
    addFantasyTeam: any;
}

interface IAddTeamsModalState {
    fantasyTeam: any;
}

export class AddTeamsModal extends Component<IAddTeamsModalProps, IAddTeamsModalState> {

    constructor(props: any) {
        super(props)

        this.state = {
            fantasyTeam: {
                personName: "",
                teamName: "",
            }
        }
    }

    public render() {
        return (
            <Modal defaultOpen={true}>
                <Modal.Content>
                    <Input placeholder="Team Owner Name"
                        onChange={this.onChangePersonName}/>
                    <Input placeholder="Team Name"
                        onChange={this.onChangeTeamName}/>
                </Modal.Content>
                <Modal.Actions>
                    <Button icon='check' content='All Done' onClick={this.addTeam} />
                </Modal.Actions>
            </Modal>
        )
    }
    private onChangePersonName = (event: any) => {
        this.setState({
            fantasyTeam: {
                personName: event.target.value
            }
        })
    }

    private onChangeTeamName = (event: any) => {
        this.setState({
            fantasyTeam: {
                teamName: event.target.value
            }
        })
    }

    private addTeam = (): void => {
        this.props.addFantasyTeam(this.state.fantasyTeam)
        this.setState({
            fantasyTeam: {
                personName: "",
                teamName: ""
            }
        })
    }

}