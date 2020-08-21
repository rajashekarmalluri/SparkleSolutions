import React from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import Slide7 from "./Slide7.png";
import Slide8 from "./Slide8.png";
import Slide9 from "./Slide9.png";

const useStyles = makeStyles({
  title: {
    marginBottom: "30px",
    color: "rgb(94, 176, 231)",
    textTransform: "uppercase",
    fontSize: "15px",
    fontWeight: "bold",
  },
  cardtitle: {
    marginTop: "20px",
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

const Offerings: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header page="offerings"></Header>
      <div className="margin">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <Typography variant="h5" className={classes.title}>
                EPC (Roof Top & Ground Mounted)
              </Typography>

              <Typography variant="h6" className={classes.cardtitle}>
                Engineering
              </Typography>

              <Typography variant="body1" color="textSecondary">
                Detailed designing will be done with well experienced Designing
                team.
              </Typography>

              <Typography variant="h6" className={classes.cardtitle}>
                Procurement
              </Typography>

              <Typography variant="body1" color="textSecondary">
                Our strategic PV procurement solutions encompass a range of
                products & services designed to help consolidate spend, reduce
                operational costs, mitigate market risks and increase supplier
                competition for our customers
              </Typography>

              <Typography variant="h6" className={classes.cardtitle}>
                Construction
              </Typography>

              <Typography variant="body1" color="textSecondary">
                Installation and commissioning of solar plants under
                professional and experienced Engineers.
              </Typography>
            </div>
            <div className="col-7">
              <img className="solutionsImg" src={Slide8} alt="image1"></img>
            </div>
          </div>
          <div className="row margin">
            <div className="col-5">
              <img className="solutionsImg" src={Slide9} alt="image1"></img>
            </div>
            <div className="col-7">
              <Typography variant="h6" className={classes.cardtitle}>
                Operations and Maintenance
              </Typography>

              <Typography variant="body1" color="textSecondary">
                We ensure that solar system gives the best possible generation.
                Timely cleaning of modules and monitoring of solar plants. Solar
                plants will be monitored by the experienced Engineers
              </Typography>

              <Typography variant="h6" className={classes.cardtitle}>
                Design Consultancy
              </Typography>

              <Typography variant="body1" color="textSecondary">
                Based on the requirement of customer we provide the suitable and
                reliable design.
              </Typography>

              <Typography variant="h6" className={classes.cardtitle}>
                Site Survey
              </Typography>

              <Typography variant="body1" color="textSecondary">
                We provide the best site survey reports with shadow analysis
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Offerings;
