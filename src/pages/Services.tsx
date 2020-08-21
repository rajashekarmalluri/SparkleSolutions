import React from "react";
import Header from "../components/Header";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Site from "./SITEI&T.png";
import SPT from "./SPT.png";
import JBR from "./JBR.png";

const useStyles = makeStyles({
  cardtitle: {
    marginBottom: "10px",
    textAlign: "center",
    color: "rgb(94, 176, 231)",
    textTransform: "uppercase",
    fontSize: "15px",
    fontWeight: "bold",
  },
  card : {
      width : "60%",
  },
  media: {
    height: 140,
  },
});

const Services: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header page="services"></Header>
      <div className="margin">
        <div className="container">
          <div className="row">
            <div className="col-12 services">
              <Card className={classes.card}>
                <div className="imagediv">
                  <img className="cardimage" src={Site} alt="image1"></img>
                </div>
                <CardContent>
                  <Typography variant="h6" className={classes.cardtitle}>
                    Site Inspection & Troubleshoot
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Analyzing the solar plants to improve the overall generation
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row margin">
            <div className="col-12 services">
              <Card className={classes.card}>
                <div className="imagediv">
                  <img className="cardimage" src={SPT} alt="image1"></img>
                </div>
                <CardContent>
                  <Typography variant="h6" className={classes.cardtitle}>
                    Solar plant Thermography
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Individual solar panels thermal imaging will be done and
                    affected solar panels individual image data will be
                    submitted
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row margin">
            <div className="col-12 services">
              <Card className={classes.card}>
                <div className="imagediv">
                  <img className="cardimage" src={JBR} alt="image1"></img>
                </div>
                <CardContent>
                  <Typography variant="h6" className={classes.cardtitle}>
                    Junction box Repair
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Replacing of solar module junction boxes and repairing of
                    junction boxes which are damaged because of lightning,
                    malfunctioning and etc.
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

export default Services;
