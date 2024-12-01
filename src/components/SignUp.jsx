import {  useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const handleSignUp = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password)

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            const createdTime = result?.user?.metadata?.creationTime;
            const newUser = {name, email, createdTime};
            fetch("https://coffee-store-server-eta-pied.vercel.app/users", {
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert("user created")
                }
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            
                
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SingUp</button>
                        </div>
                    </form>
                    <p>This website new? So <Link to="/signin"> Sign In</Link></p>
                </div>
            
        </div>
    );
};

export default SignUp;