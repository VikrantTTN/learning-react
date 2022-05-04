import React from 'react'

function About() {
  return (
<div className="container">

  <h1>About</h1>

    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        The Text Utils Application
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is an Amazing Text Utils Application.</strong> 
      </div>
    </div>
  </div>
  
</div>
</div>

  )
}

export default About