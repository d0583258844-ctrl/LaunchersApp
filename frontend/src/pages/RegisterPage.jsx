import { useState } from "react"
import "./Register.css"

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        user_type: ""
    })


    async function handelSubmit(e) {
        e.preventDefault()
    }

    function handelChang(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div className="mainregister">
            <p className="title"> Hello Register Page</p>
            <div className="allFields">
                <form onSubmit={handelSubmit}>
                    <label className="labelinput" htmlFor="username">userName: </label>
                    <input onChange={handelChang} className="labelinput" type="text" id="username" name="username" />

                    <label className="labelinput" htmlFor="password">password: </label>
                    <input onChange={handelChang} className="labelinput" type="password" id="password" name="password" />

                    <label className="labelinput" htmlFor="email">email: </label>
                    <input onChange={handelChang} className="labelinput" type="email" id="email" name="email" />

                    <label className="labelinput" htmlFor="usertype">user type: </label>
                    <input onChange={handelChang} className="labelinput" type="text" id="usertype" name="usertype" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage