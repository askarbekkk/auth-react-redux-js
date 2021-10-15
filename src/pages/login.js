import React, {useState} from 'react';

const Login = () => {
const [user, setUser] = useState({
    email: '',
    password: ''
})

    const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
    e.preventDefault()

    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-6 offset-3">
                    <form className='my-5' onSubmit={handleSubmit}>
                        <div className="form-group d-flex">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Login</label>
                            <div className="w-50">
                                <input type="email" name='email' className="form-control" id="inputPassword" placeholder="login" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group d-flex mt-3">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className=" w-50">
                                <input type="password"  name='password' className="form-control" id="inputPassword" placeholder="Password" onChange={handleChange}/>
                            </div>
                        </div>
                        <button className='btn btn-primary mt-3'>Login</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;