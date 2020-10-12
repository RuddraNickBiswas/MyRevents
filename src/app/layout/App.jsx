import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashbord from "../../feauters/events/eventDashbord/EventDashbord";
import HomePage from "../../feauters/home/HomePage";
import NavBar from "../../feauters/nav/NavBar";
import EventDetailedPage from "../../feauters/events/eventsDetailed/EventDetailedPage";
import EventForm from "../../feauters/events/eventForm/EventForm";

const App = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashbord} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default App;
