import React, { useState } from "react";
import { Button, Grid, Header, Tab } from "semantic-ui-react";
import { format } from "date-fns";
import ProfileForm from "./ProfileForm";

export default function AboutTab({profile ,isCurrentUser}) {
  const [editMode, setEditMode] = useState(false);

  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="user"
            content={`About ${profile.displayName}`}
          />
          {isCurrentUser && 
          <Button
            floated="right"
            onClick={() => setEditMode(!editMode)}
            basic
            content={editMode ? "cancle" : "edit"}
          />
          
          }
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
           <ProfileForm profile = {profile} />
          ) : (
            <>
              <div style={{ marginBottom: 10 }}>
                <strong>
                  Member since : {format(profile.createdAt, "dd MMM yyy")}
                </strong>
                <div>{profile.description || null}</div>
              </div>
            </>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
}
