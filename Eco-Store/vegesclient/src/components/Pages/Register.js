import React from 'react'

const Register = () => {
  return (
    <div>

        <div >
            <form>
                <label>First Name</label>
                <input type="text" placeholder='First Name'/>
                <label>Last Name</label>
                <input type="text" placeholder='Last Name'/>
                <label>Email</label>
                <input type="text" placeholder='Enter Email'/>
                <label>Password</label>
                <input type="text" placeholder='Password'/>
            </form>
        </div>
    </div>
  )
}

export default Register