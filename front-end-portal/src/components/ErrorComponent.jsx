import React from 'react'
/*  This component acts as a safe guard incase the user ends up at an unintended url.
    Not actually possible with the addition of 'AuthenticatedRoute' but was used before that    */
function ErrorComponent() {
    return (
        <div>
            <h1>Error, how have you managed to end up here?</h1>
        </div>
    )
}
export default ErrorComponent
