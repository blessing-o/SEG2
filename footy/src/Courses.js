import Table from 'react-bootstrap/Table';

const Courses = () => {
    return (  
        <section id="courses">
            <div className="container-fluid">
            <div className="section-title text-center">
            <h1> Our Courses </h1>
            </div>
    <Table striped  hover>
    <thead>
          <tr>
            <th scope="col">Course</th>
            <th scope="col">Description</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Beginner</td>
            <td> A professional coach will be available to train you once a week.<br/> The pitch will always be open for you to do drills.</td>
            <td>
              <Table striped bordered className="table mini-table">
                <tr>
                  <td>0 - 11</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>11 - 18</td>
                  <td>$65</td>
                </tr>
                <tr>
                  <td>Above 18</td>
                  <td>$85</td>
                </tr>

              </Table>
            </td>
          </tr>
          <tr>
            <td>Amateur</td>
            <td>A professional coach will be available to train you three times a week.<br/> The pitch will always be open for you to do drills.</td>
            <td>
            <Table striped bordered className="table mini-table">
                <tr>
                  <td>0 - 11</td>
                  <td>$40</td>
                </tr>
                <tr>
                  <td>11 - 18</td>
                  <td>$75</td>
                </tr>
                <tr>
                  <td>Above 18</td>
                  <td>$95</td>
                </tr>

              </Table>
            </td>
          </tr>
          <tr>
            <td>Intermediate</td>
            <td>A professional coach will be available to train you everytime.<br/> The pitch will always be open for you to do drills. <br /> Regional Competitions will be played at the end of each month. </td>
            <td>
            <Table striped bordered className="table mini-table">
                <tr>
                  <td>0 - 11</td>
                  <td>$60</td>
                </tr>
                <tr>
                  <td>11 - 18</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>Above 18</td>
                  <td>$120</td>
                </tr>

              </Table>
            </td>
          </tr>

          <tr>
            <td>Expert</td>
          <td>A professional coach will be available to train you everytime.<br/> The pitch will always be open for you to do drills. <br /> Regional Competitions will be played at the end of each week. </td>
            <td>
            <Table striped bordered className="table mini-table">
                <tr>
                  <td>0 - 11</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>11 - 18</td>
                  <td>$140</td>
                </tr>
                <tr>
                  <td>Above 18</td>
                  <td>$160</td>
                </tr>

              </Table>
            </td>
          </tr>
        </tbody>
    </Table>
    </div>
    </section>
    );
}
 
export default Courses;