import Accordion from 'react-bootstrap/Accordion';

const Faqs = () => {
    return (
        <div className="faqs">
            <div>
                <h1>
                    FAQS
                </h1>
            </div>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Can a course be changed?</Accordion.Header>
        <Accordion.Body>
         A course can be changed only if it is being upgraded.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How can a course be changed?</Accordion.Header>
        <Accordion.Body>
        To change a course, you have to do it at the main office. <br/>
        You simply have to pay for the difference between the two course. <br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>When can a course be changed?</Accordion.Header>
        <Accordion.Body>
        A course can be changed within the time period of a week from when it was purchased
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can we get Refunds?</Accordion.Header>
        <Accordion.Body>
         Refunds can be within the time period of a week from when it was purchased.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
      );
}
 
export default Faqs;