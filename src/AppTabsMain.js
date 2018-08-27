import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import classnames from 'classnames';
import PlayersList from './PlayersList';
import TournamentDate from './TournamentDate';


class AppTabsMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              Rules
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              Tournament Details
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}>
              Add Player
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}>
              Add Table
            </NavLink>
          </NavItem>

        </Nav>
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Tournament Rules</CardTitle>
                  <CardText>The quick brown fox jumps over the lazy dog is an English-language pangram—a sentence that contains all of the letters of the alphabet. It is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired. Owing to its brevity and coherence, it has become widely known.</CardText>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Details</CardTitle>
                  <CardText>
                    <TournamentDate selected={this.state.startDate} onChange={this.handleChange}/>
                  </CardText>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Players</CardTitle>
                  <Form>
                     <FormGroup>
                        <p>
                          <PlayersList>
                          </PlayersList>
                        </p>
                     </FormGroup>
                  </Form>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="4">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Tables</CardTitle>
                  <CardText>This is where we talk about the tables we play</CardText>
                </Card>
              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}

// <Input type="player" name="player" id="playerName" placeholder="player name" />
// <Button onClick={this.addPlayerItem}>Add New Player</Button>

export default AppTabsMain; // Don’t forget to use export default!
