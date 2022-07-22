import React from "react";

const Drills = () => {
    return (  
        <section id="drills">
    <div class="container-fluid">
      <div class="section-title text-center">
        <h1>Drills </h1>
        <hr />
        <div class="row text-center">

          <div class="col-lg-6 col-md-6 mb-3">
            <div class="card">
              <img class="card-img-top expert-image" src="images/passingDrill.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h4 class="card-title"> Passing Drills </h4>
                <p class="card-text"><iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 mb-3">
            <div class="card">
              <img class="card-img-top expert-image" src="images/shootingDrill.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h4 class="card-title"> Shooting Drills </h4>
                <p class="card-text"><div>
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
    </div></p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 mb-3">
            <div class="card">
              <img class="card-img-top expert-image" src="images/headingDrill.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h4 class="card-title"> Heading Drills </h4>
                <p class="card-text"><div>
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
    </div></p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 mb-3">
            <div class="card">
              <img class="card-img-top expert-image" src="images/goalKeepingDrill.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h4 class="card-title"> Goalkeeping Drills </h4>
                <p class="card-text"><div>
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
    </div></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section> 
    );
}
 
export default Drills;
