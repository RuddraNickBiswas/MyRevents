import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashbord from "../../feauters/events/eventDashbord/EventDashbord";
import NavBar from "../../feauters/nav/NavBar";

const App = () => {
  const [fromOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };
  
  const handleCreateFromOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <>
      <NavBar setFormOpen={handleCreateFromOpen} />
      <Container className="main">
        <EventDashbord
          fromOpen={fromOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent ={selectedEvent} 
        />
      </Container>
    </>
  );
};

export default App;
