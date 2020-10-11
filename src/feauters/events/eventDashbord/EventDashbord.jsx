import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";

import { sampleData } from "../../../app/api/simpleData";

const EventDashbord = ({ fromOpen, setFormOpen }) => {
  const [events, setEvents] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {fromOpen && <EventForm setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashbord;
