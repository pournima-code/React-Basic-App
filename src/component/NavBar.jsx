
import React, { Component } from 'react';



// class NavBar extends Component {
//     state = {  }
//     render() { 
//         console.log("props:",this.props)
//         return ( 
//             <nav class="navbar navbar-light bg-light">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">
//                     Navbar <span className="badge badge-pill badge-secondary">{this.props.NavCounters}</span>

//                 </a>
//             </div>
//             </nav>
//          );
//     }
// }
const NavBar = (props) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{props.NavCounters}</span>

            </a>
        </div>
        </nav>
     );
}
 
export default NavBar;
 

