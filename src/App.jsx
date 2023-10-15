import { Link } from 'react-router-dom';
import './App.css'


function App() {
 

  return (
    <>
        <h1>The Awesome React query</h1>
        <div>
            <Link to="/">Home</Link> <br />
            <Link to="/products">Products</Link>
        </div>
    </>
  )
}

export default App


/* 
  caching,
  auto-retrieve   // when url fail .. it send request for three time.. and then shows error
*/
