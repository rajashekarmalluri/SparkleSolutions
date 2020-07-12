import React from "react";
import Header from "../components/Header";
import { Card, CardContent, Typography } from "@material-ui/core";

const About: React.FC = () => {
  return (
    <React.Fragment>
      <Header page="about" />
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Card style={{height :"150px"}}>
                <CardContent>
                    <Typography variant="h6" style={{marginBottom : "10px"}}>Our Vision</Typography>
                    <Typography variant="body1" color="textSecondary">
                        To provide the best reliable solutions and services that results long term benefits to our customer.
                    </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-6">
              <Card style={{height :"150px"}}>
              <CardContent>
                    <Typography variant="h6" style={{marginBottom : "10px"}}>Our Mission</Typography>
                    <Typography variant="body1" color="textSecondary">
                        Be the best leading provider of energy, sustainable and energy efficient solutions to create a emission free planet for future generations.
                    </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
