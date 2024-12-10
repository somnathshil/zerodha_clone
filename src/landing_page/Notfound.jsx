import {Link} from "react-router-dom";

function Notfound() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
             <h1 className="mt-5">404 Page Not Found! <i class="fa-regular fa-face-sad-tear"></i></h1>
             <p>Sorry!, the page you are looking for does not exist.</p>
             <Link to="/"><button>Go Back </button></Link>
            </div>
        </div>
     );
}

export default Notfound;