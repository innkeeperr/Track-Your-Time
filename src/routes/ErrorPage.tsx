import {useRouteError} from "react-router";

export const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page">
            <h1>Oopsy!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* @ts-ignore */ }
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}