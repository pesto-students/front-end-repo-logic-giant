import { Link } from "react-router-dom"
import img from "../assets/images/not-found.svg"


const Error = () => {
  return (
  <main className="full-page">

        <div>
            <img src={img} alt="error"/>
            <h3> ohh! page not found</h3>
            <p> we could not find the page you are looking for</p>
            <Link to='/'>back home</Link>
        </div>


    </main>
  )
}
export default Error