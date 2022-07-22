const payment = () => {
    const [val, setVal] = useState(0);
    return (  
    <form  method="post" enctype="text/plain" action="payment.html">
            <div className="mb3">

                
              <div className="mb3">
                <h4> Card Information</h4>
              </div>

              <div className="mb-3 col-lg-6">
                <select id = "course-bar" className="form-select form-select-sm">
                  <option selected>Choose the etype of card</option>
                  <option value="Visa">Visa</option>
                  <option value="Visa Debit">Visa Debit</option>
                  <option value="MasterCard">MasterCard</option>
                  <option value="Credit Card">Credit Card</option>
                </select>
              </div>

              <div className="mb-3 col-lg-6">
                <input required type="text" className="form-control" id="name-bar" placeholder="Enter your name as it appears on your card "/>
              </div>

              <div className="mb-3 col-lg-6">
                <input type="text" className="form-control" id="phone-bar" placeholder="Enter your card number" pattern="[0-9]*"  onChange={(e) =>
          setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }/>
              </div>


              <div className="mb-3 col-lg-6">
                <input required type="text" className="form-control" id="email-bar" placeholder="Expiry date"/>
              </div>

              <div className="mb-3 col-lg-6">
                <input required type="text" className="form-control" id="post-bar" placeholder="cvv"/>
              </div>

            </div>

            <div className="mb3">
              <div>
                <h4> Course Information</h4>
              </div>

            </div>




            <div className="mb-3 col-lg-6">
              <button id = "confirm-button"className="btn btn-primary" type="submit">Continue to Payment</button>
            </div>

          </form>

 );
}
 
export default payment;