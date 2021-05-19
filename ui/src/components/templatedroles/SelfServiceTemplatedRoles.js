import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Icon, Message, Segment, Step } from "semantic-ui-react";
import { SelfServiceStepEnum } from "../selfservice/SelfServiceEnums";
import { SelfServiceTemplatedRolesStep1 } from "./SelfServiceTemplatedRolesStep1";

const SelfServiceTemplatedRoles = () => {
  const initialState = {
    config: null,
    currStep: SelfServiceStepEnum.STEP1,
    messages: null,
    admin_bypass_approval_enabled: false,
  };
  const [state] = useState(initialState);

  return (
    <Segment basic>
      <Message success>
        Welcome to the Templated Roles Self-Service Wizard!
      </Message>

      <Step.Group fluid>
        <Step active={state.currStep === SelfServiceStepEnum.STEP1}>
          <Icon name="search" />
          <Step.Content>
            <Step.Title>Step 1.</Step.Title>
            <Step.Description>Search and Select Resource</Step.Description>
          </Step.Content>
        </Step>
        <Step active={state.currStep === SelfServiceStepEnum.STEP2}>
          <Icon name="search plus" />
          <Step.Content>
            <Step.Title>Step 2.</Step.Title>
            <Step.Description>Provide Permission Details</Step.Description>
          </Step.Content>
        </Step>
        <Step active={state.currStep === SelfServiceStepEnum.STEP3}>
          <Icon name="handshake" />
          <Step.Content>
            <Step.Title>Step 3.</Step.Title>
            <Step.Description>Review and Submit</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>

      <SelfServiceTemplatedRolesStep1 />
    </Segment>
  );
};

export function renderIAMSelfServiceWizard() {
  ReactDOM.render(
    <SelfServiceTemplatedRoles />,
    document.getElementById("templated_roles_wizard")
  );
}

export default SelfServiceTemplatedRoles;
