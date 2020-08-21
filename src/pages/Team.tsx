import React from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TeamImg from "./Team.png";

const useStyles = makeStyles({
  cardtitle: {
    marginTop: "60px",
    marginBottom: "10px",
    color: "rgb(94, 176, 231)",
    textTransform: "uppercase",
    fontSize: "15px",
    fontWeight: "bold",
  },
  card: {
    width: "50%",
  },
  media: {
    height: 140,
  },
});

const Team: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header page="team"></Header>
      <div className="margin">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Typography variant="h6" className={classes.cardtitle}>
                Our Team
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Flexible approach and fast decision making due to smaller size
                company and driven by professionals with good experience of
                Technical, Design and Operations in the industry. The team has a
                combined multi MW of solar experience and renewable experience
                in Ground mounted and Roof top and In addition it boasts a wide
                set of backgrounds
              </Typography>
              <Typography variant="h6" className={classes.cardtitle}>
                Contact
              </Typography>
              <Typography variant="body1" color="textSecondary">
                EPC@vsparkle.in
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Sales@vsparkle.in
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Maintenance@vsparkle.in
              </Typography>
              <Typography variant="body1" color="textSecondary">
                +91 9624906839
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Hyderabad, Telangana, India
              </Typography>
            </div>

            <div className="col-6">
              <img className="photo" src={TeamImg} alt="image1"></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Team;
