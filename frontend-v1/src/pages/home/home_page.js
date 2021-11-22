import {Link} from "react-router-dom"


const Home = () => {
    return(
    <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">Hello, world! This is authentication system, I made..</h1>
            {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
            <hr className="my-4" />
            <p>Click The sign in button</p>
            <Link className="btn btn-primary btn-lg" to="/sign-in" role="button">Sign In</Link>
        </div>
    </div>
    )
}

export default Home;