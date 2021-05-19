import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

export const SelfServiceTemplatedRolesStep1 = () => {
  return (
    <Segment>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Header>
              Search for Templated Roles
              <Header.Subheader>
                Please search for the templated roles where you want to modify
                actions, effects, or resources.
              </Header.Subheader>
            </Header>
            <p>
              For Help, please visit{" "}
              <a
                href="http://go/templatedrolestldr"
                target="_blank"
                rel="noopener noreferrer"
              >
                go/templatedrolestldr
              </a>
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header>Selected Role Information</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
