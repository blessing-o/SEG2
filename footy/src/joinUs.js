import { useState } from "react";

const J = () => {
    const [val, setVal] = useState(0);

    return (  
        <section className="joinUS">
    <div className="container-fluid">
      <div className="row">
        <div id="join-us" className="col-lg-6">
          <form  method="post" enctype="text/plain" action="payment.js">
            <div className="mb3">
              <div className="mb3">
                <h3>Start your journey with us</h3>
                <hr />
              </div>
              <div className="mb3">
                <h4> Personal Information</h4>
              </div>

              <div className="mb-3 col-lg-6">
                <input required type="text" className="form-control" id="name-bar" placeholder="Enter your Name"/>
              </div>

              <div className="mb-3 col-lg-6">
                <input type="text" className="form-control" id="phone-bar" placeholder="Enter your Phone Number" pattern="[0-9]*"  onChange={(e) =>
          setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }/>
              </div>


              <div className="mb-3 col-lg-6">
                <input required type="email" className="form-control" id="email-bar" placeholder="Enter your email"/>
              </div>

              <div className="mb-3 col-lg-6">
                <input required type="text" className="form-control" id="post-bar" placeholder="Enter your Postal Code"/>
              </div>

            </div>

            <div className="mb3">
              <div>
                <h4> Course Information</h4>
              </div>

              <div className="mb-3 col-lg-6">
                <select id = "course-bar" className="form-select form-select-sm">
                  <option selected>Select a course</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Amateur">Amateur</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              <div className="mb-3 col-lg-6">
                <select id = "expert-bar" class="form-select form-select-sm">
                  <option selected>Select your age group</option>
                  <option value="0 - 10">0 - 10</option>
                  <option value="11 - 18">11 - 18</option>
                  <option value="Above 18">Above 18</option>
                </select>
              </div>
            </div>




            <div className="mb-3 col-lg-6">
              <button id = "confirm-button"className="btn btn-primary" type="submit">Continue to Payment</button>
            </div>

          </form>
        </div>
        <div id="contact" class="col-lg-6">
          <div class="mb3">
            <h3>Contact Us!</h3>
            <hr />
          </div>
          <div class="col-lg-5">
            <p><strong>Address: </strong>
              <em>1591 Champagne Ave. Ottawa, ON, K5P 4J7</em> <br/>
              <strong>Phone Number: </strong> <em>647-295-3550</em> <br/> <strong>Email: </strong><em>info@footy.com</em>
            </p>
          </div>

          <div class="col-lg-5">
            <table class="table">
              <thead>
                <th class="special-th">
                  Day
                </th>
                <th class="special-th">
                  Hours of Operation
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>10am - 7pm</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>10am - 7pm</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>10am - 7pm</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>10am - 7pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>10am - 7pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10am - 6pm</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>10am - 5pm</td>
                </tr>
              </tbody>
              </table>
          </div>


        </div>
        <div className="feedback">
        <form  method="post" enctype="text/plain" action="payment.html">
            <div className="mb3">
              <div className="mb3">
                <h4> Feedback</h4>
              </div>

              <div className="mb-3 col-lg-6">
                <textarea required className="form-control" id="text-bar" placeholder="Enter your Fedback"/>
              </div>

            </div>





            <div className="mb-3 col-lg-6">
              <button id = "confirm-button"className="btn btn-primary" type="submit">Submit Feedback</button>
            </div>

          </form>
        </div>
        </div>
        </div>
        </section>
    );
}
 
export default J;