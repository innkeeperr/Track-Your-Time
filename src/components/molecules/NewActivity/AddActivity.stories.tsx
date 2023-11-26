import { AddActivity } from "./AddActivity";
import styled from "@emotion/styled";
import React from "react";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Library/Molecules/AddActivity",
  component: AddActivity,
  decorators: [
    (Story) => (
      <DecoratorWrapper>
        <Story />
      </DecoratorWrapper>
    ),
  ],
} as ComponentMeta<typeof AddActivity>;

export const InitialInput = () => <AddActivity id="initialInput" />;

InitialInput.parameters = {
  pseudo: {
    focus: false,
  },
};

export const InputWithValue = () => (
  <AddActivity id="withValue" defaultValue="Working on service issue" />
);

InputWithValue.parameters = {
  pseudo: {
    focusVisible: "#withValue",
  },
};

const DecoratorWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
