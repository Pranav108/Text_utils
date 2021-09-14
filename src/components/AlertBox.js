import React from 'react'

export default function AlertBox(props) {
    return(
      <div className="my-1" style={{height:'50px'}}>
      {props.myAlert && <div className="">
        <div className={`py-2 px-2 alert alert- alert-${props.myAlert.type.toLowerCase()} fade show`} role="alert">
            {/* <strong>{`${props.myAlert.type} : `}</strong> */}
            {props.myAlert.message}
            </div>
      </div>}
      </div> 
    );
}
