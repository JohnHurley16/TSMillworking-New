import React, { useState } from "react";
import Icofont from "react-icofont";

const Alert = ({ type, text }) => {
  const [show, setShow] = useState(true);

  return (
    show ? (<div className={"alert alert-dismissible alert-"+type} role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => setShow(!show)}
      >
        <Icofont icon="close" />
      </button>
      {text}
    </div>) : null
  );
};

export default Alert;
