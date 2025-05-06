import { useRouteError } from 'react-router-dom';

function NotFound() {
	const error = useRouteError();
    return (
        <>
            <div>
                <h1>It is an Error Page</h1>
                <h2>404 Not Found Error</h2>
                <p>
                    <i>{error.statusText}</i>
                </p>
                <p>
                    <i>{error.data}</i>
                </p>
            </div>
        </>
    );
}

export default NotFound;