import { Button } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { useTimer } from "../../../hooks/useTimer";

interface ActiveTimeCounter {
  counterTotalSeconds?: number;
}

export const ActiveTimeCounter = ({
  counterTotalSeconds = 0,
}: ActiveTimeCounter) => {
  const {
    isPaused,
    formattedHours,
    formattedMinutes,
    formattedSeconds,
    handlePause,
    handleResume,
  } = useTimer({ timerValue: counterTotalSeconds });

  useEffect(() => {
    handleResume();

    return () => handlePause();
  }, []);

  return (
    <Wrapper>
      <StyledLabel>{`${formattedHours}`}</StyledLabel>
      <StyledLabel>:</StyledLabel>
      <StyledLabel>{`${formattedMinutes}`}</StyledLabel>
      <StyledLabel>:</StyledLabel>
      <StyledLabel>{`${formattedSeconds}`}</StyledLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 5px;
  }
`;

const StyledLabel = styled.span`
  font-size: 10vw;
  font-weight: 500;
`;
