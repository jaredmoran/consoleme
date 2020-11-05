import React from "react";
import { Accordion, Button, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useInlinePolicy from "./hooks/useInlinePolicy";
import {
  PolicyMonacoEditor,
  NewPolicyMonacoEditor,
} from "./PolicyMonacoEditor";
import { JustificationModal } from "./PolicyModals";

const InlinePolicy = () => {
  const {
    arn,
    activeIndex = [],
    inlinePolicies = [],
    isNewPolicy = false,
    setActiveIndex,
    setIsNewPolicy,
    addInlinePolicy,
    updateInlinePolicy,
    deleteInlinePolicy,
    handleInlinePolicySubmit,
  } = useInlinePolicy();

  const toggleNewInlinePolicy = () => {
    setIsNewPolicy(true);
  };

  const onTitleClick = (e, { index }) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };

  const panels = inlinePolicies.map((policy) => {
    return {
      key: policy.PolicyName,
      title: policy.PolicyName,
      content: {
        content: (
          <PolicyMonacoEditor
            context="inline_policy"
            policy={policy}
            deletePolicy={deleteInlinePolicy}
            updatePolicy={updateInlinePolicy}
          />
        ),
      },
    };
  });

  if (isNewPolicy) {
    panels.unshift({
      key: "new_policy",
      title: "New Policy",
      content: {
        content: (
          <NewPolicyMonacoEditor
            addPolicy={addInlinePolicy}
            setIsNewPolicy={setIsNewPolicy}
          />
        ),
      },
    });
  }

  return (
    <>
      <Segment
        basic
        clearing
        style={{
          padding: 0,
        }}
      >
        <Header as="h2" floated="left">
          Inline Policies
          <Header.Subheader>
            You can add/edit/delete inline policies for this role from here.
            Please create a new policy by using the buttons on the right.
          </Header.Subheader>
        </Header>
        <Button.Group floated="right">
          <Button onClick={toggleNewInlinePolicy} positive>
            Create New Inline Policy
          </Button>
          <Button.Or />
          <Button
            as={Link}
            disabled={false}
            to={`/ui/selfservice?arn=${encodeURIComponent(arn)}`}
            primary
          >
            Policy Wizard
          </Button>
        </Button.Group>
      </Segment>
      <Accordion
        activeIndex={activeIndex}
        exclusive={false}
        fluid
        onTitleClick={onTitleClick}
        panels={panels}
        styled
      />
      <JustificationModal handleSubmit={handleInlinePolicySubmit} />
    </>
  );
};

export default InlinePolicy;