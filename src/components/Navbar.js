import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [textSearch, settextSearch] = useState("")
  const OnTextChange =(event)=>{
    settextSearch(event.target.value);
}
const clearSearchBox=()=>{
  if(textSearch==="")
      props.showAlert("Danger","Oops!!, search-box cannot be empty");
  else
      props.showAlert("Primary","Not found : (");
  settextSearch("");
}
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{border:'4px double green'  }}>
        <div className="container-fluid">
          <Link className="navbar-brand my-0" to="/" >{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active my-0" aria-current="page" to="/">Home</Link>
              </li> */}
              <li className="nav-item">
                <Link type="button" className="btn btn-outline-info my-1 mx-2"  to="/about" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Created by Pranav">{props.about}</Link>
              </li>
            </ul> 
            
             <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-4`}>
               <input className="form-check-input " onChange={props.toggleFunc} type="checkbox" id="flexSwitchCheckDefault"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'} mode`}</label>
              </div>
      {/* <div className="dropdown mx-4">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Change Mode
  </button>
  <ul className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
    <li><div className="form-check form-switch text-dark">
               <input className="form-check-input " onChange={props.toggleFunc} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              </div></li>
    <li><div className="form-check form-switch text-dark">
               <input className="form-check-input " onChange={props.toggleFunc} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue Mode</label>
              </div></li>
    <li><div className="form-check form-switch text-dark">
               <input className="form-check-input " onChange={props.toggleFunc} type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
              </div></li>
    <li><div className="form-check form-switch text-dark">
               <input className="form-check-input " onChange={props.toggleFunc} type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default Mode</label>
              </div></li>
  </ul>
</div> */}
            <form className="d-flex">
              <input className="form-control me-2" onChange={OnTextChange} value={textSearch} type="search" placeholder="Search" aria-label="Search"/>
              <Link  className="btn btn-outline-primary" onClick={clearSearchBox} type="submit" to="#">Search</Link>
            </form>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "defaultTitle",
    about: "defaultAbout"
}