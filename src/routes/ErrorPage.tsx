import {useRouteError} from "react-router";
import styled from "@emotion/styled";
import { Text } from '@chakra-ui/react'

export const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <ErrorPageWrapper id="error-page">
            <Text fontSize='5xl'>Oopsy!</Text>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* @ts-ignore */ }
                <i>{error.statusText || error.message}</i>
            </p>
        </ErrorPageWrapper>
    )
}

const ErrorPageWrapper = styled.div`
    width: 100%;
  min-height: 100vh;
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
`