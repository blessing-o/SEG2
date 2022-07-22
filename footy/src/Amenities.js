const Amenities = () => {
    return (  
        <section id="amenities" className="team_member section-padding">
        <div className="container-fluid">
          <div className="section-title text-center">
            <h1>Amenities</h1>
            <hr />
          </div>
          <div className="row text-center">
            <div className="col-lg-6 col-md-6 mb-3">
              <div className="card">
                <img className="card-img-top expert-image" src="images/fullPitch.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title"> Full Sized Pitch </h4>
                  {/* <p className="card-text">Remember to put more information</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-3">
              <div className="card">
                <img className="card-img-top expert-image" src="images/miniPitch.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title"> Mini Pitch </h4>
                  {/* <p className="card-text">Remember to put more information</p> */}
                </div>
              </div>
            </div>
    
            <div className="col-lg-6 col-md-6 mb-3">
              <div className="card">
                <img className="card-img-top expert-image" src="images/cafeAndLounge.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title"> Cafe and Lounges </h4>
                  {/* <p className="card-text">Remember to put more information</p> */}
                </div>
              </div>
            </div>
    
            <div className="col-lg-6 col-md-6 mb-3">
              <div className="card">
                <img className ="card-img-top expert-image" src="images/spasAndShower.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title"> Spas and Showers </h4>
                  {/* <p className="card-text">Remember to put more information </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    );
}
 
export default Amenities;