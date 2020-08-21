import React from "react";
import Header from "../components/Header";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AboutImg from "./About.png";

const useStyles = makeStyles({
  title: {
    marginTop: "40px",
    marginBottom: "10px",
    color: "rgb(94, 176, 231)",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "15px",
  },
  cardtitle: {
    marginTop: "20px",
    marginBottom: "10px",
    color: "rgb(94, 176, 231)",
    textTransform: "uppercase",
    fontSize: "15px",
    fontWeight: "bold",
  },
  media: {
    height: 140,
  },
});

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header page="about" />
      <div className="margin">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Typography variant="h6" className={classes.cardtitle}>
                Our Vision
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Strive to the best leading Renewable Energy services provider by
                offering our intelligent solution & services.
              </Typography>

              <Typography variant="h6" className={classes.cardtitle}>
                Our Mission
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Make the Energy simple, clean and accessable in future and
                present.
              </Typography>

              <Typography variant="h6" className={classes.title}>
                Why we choose this
              </Typography>

              <Typography variant="body1" color="textSecondary">
                The Continuous growth of the solar industry has brought an
                ever-expanding industry of solar installations. To be a part in
                this continuous growth, VSparkle Solutions also participate in
                this industry journey. To provide the best services & solutions
                and we come with betters results to satisfy the customer
              </Typography>
            </div>
            <div className="col-6">
              <img className="aboutImg" src={AboutImg} alt="image1"></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
