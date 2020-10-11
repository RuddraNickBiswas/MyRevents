import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashbord from "../../feauters/events/eventDashbord/EventDashbord";
import NavBar from "../../feauters/nav/NavBar";

const App = () => {
  const [fromOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashbord fromOpen={fromOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
};

export default App;
