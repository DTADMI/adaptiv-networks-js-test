import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Card, Container, Form} from "react-bootstrap";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);
  const [date1, setDate1] = useState<Value>(new Date());
  const [date2, setDate2] = useState<Value>(new Date());

  const compareDates = () => {
    if(date1 && date2){
      let valDate1 = date1 as Date;
      let valDate2 = date2 as Date;

      setSeconds(Math.abs(valDate1.getSeconds() - valDate2.getSeconds()));
      setMinutes(Math.abs(valDate1.getMinutes() - valDate2.getMinutes()));
      setHours(Math.abs(valDate1.getHours() - valDate2.getHours()));
      setDays(Math.abs(valDate1.getDate() - valDate2.getDate()));
      setMonths(Math.abs(valDate1.getMonth() - valDate2.getMonth()));
      setYears(Math.abs(valDate1.getFullYear() - valDate2.getFullYear()));

    }
  }

  useEffect(() => {
    compareDates();
  }, [date1, date2]);

  return (
    <div className="App">
      <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px"}}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Date input</h2>
              <Form>
                <Form.Group>
                  <label htmlFor="date1" className=" col-form-label">Date1 :</label>
                    <DateTimePicker value={date1} onChange={setDate1} />
                </Form.Group>

                <Form.Group>
                  <label htmlFor="date2" className=" col-form-label">Date1 :</label>
                    <DateTimePicker value={date2} onChange={setDate2} />
                </Form.Group>

              </Form>

            </Card.Body>
          </Card>
        </div>
        <div className="w-100" style={{ maxWidth: "400px"}}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Date comparison</h2>
              <Form>
                <Form.Group>
                  <Form.Label>Seconds</Form.Label>
                  <Form.Control type="text" placeholder="0"   value={seconds} readOnly={true} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Minutes</Form.Label>
                  <Form.Control type="text" placeholder="0" value={minutes}  readOnly={true} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Hours</Form.Label>
                  <Form.Control type="text" placeholder="0" value={hours}  readOnly={true}  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Days</Form.Label>
                  <Form.Control type="text" placeholder="0" value={days}  readOnly={true} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Months</Form.Label>
                  <Form.Control type="text" placeholder="0" value={months}  readOnly={true} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Years</Form.Label>
                  <Form.Control type="text" placeholder="0" value={years}  readOnly={true} />
                </Form.Group>

              </Form>

            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default App;
