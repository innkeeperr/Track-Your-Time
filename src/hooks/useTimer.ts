import { useEffect, useRef, useState } from "react";

interface Props {
  timerValue?: number;
}

export const useTimer = ({ timerValue = 0 }: Props) => {
  const [totalSeconds, setTotalSeconds] = useState(timerValue);
  const [isPaused, setIsPaused] = useState(false);
  const counterRef = useRef<NodeJS.Timer | undefined>(undefined);

  const formattedHours = `0${Math.floor(totalSeconds / 3600)}`;
  const formattedMinutes = `0${Math.floor(totalSeconds / 60) % 60}`.slice(-2);
  const formattedSeconds = `0${totalSeconds % 60}`.slice(-2);

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(counterRef.current);
  };

  const handleResume = () => {
    setIsPaused(false);
    counterRef.current = setInterval(() => {
      setTotalSeconds((prevValue) => prevValue + 1);
    }, 1000);
  };

  return {
    isPaused,
    totalSeconds,
    formattedHours,
    formattedMinutes,
    formattedSeconds,
    handlePause,
    handleResume,
  };
};
