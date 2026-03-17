import { useState } from "react"

function Logout() {
    const [state, setState] = useState(false)

    function deleteUser() {
        setState(true)
        alert(state)
    }

    return (
        <div>
            <button onClick={deleteUser} > Logout </button>
        </div>
    )
}

export default Logout
