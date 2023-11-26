import styled from "@emotion/styled";
import { ActiveTimeCounter } from "./ActiveTimeCounter";
import React from "react";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Library/Molecules/ActiveTimeCounter",
  component: ActiveTimeCounter,
  decorators: [
    (Story) => (
      <DecoratorWrapper>
        <Story />
      </DecoratorWrapper>
    ),
  ],
} as ComponentMeta<typeof ActiveTimeCounter>;

export const InitialValueCounter = () => <ActiveTimeCounter />;

export const FilledSecondsCounter = () => (
  <ActiveTimeCounter counterTotalSeconds={28} />
);

export const FilledMinutesCounter = () => (
  <ActiveTimeCounter counterTotalSeconds={248} />
);

export const FilledHoursCounter = () => (
  <ActiveTimeCounter counterTotalSeconds={5696} />
);

const DecoratorWrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto;
`;
