import React from "react";
import Header from "../components/Header";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Solar from "./SolarEnergy.jpg";
import AE from "./AlternativeEnergy.jpg";
import CO2 from "./CO2.jpg";
import EA from "./EA.jpg";

const useStyles = makeStyles({
  cardtitle: {
    marginBottom: "10px",
    textAlign: "center",
    color: "rgb(94, 176, 231)",
    textTransform: "uppercase",
    fontSize: "15px",
    fontWeight: "bold",
  },
  media: {
    height: 140,
  },
});

const Product: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header page="products" />
      <div className="margin">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Card>
                <div className="imagediv">
                  <img className="cardimage" src={Solar} alt="image1"></img>
                </div>
                <CardContent>
                  <Typography variant="h6" className={classes.cardtitle}>
                    Solar Energy
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Solar power is energy from the sun that is converted into
                    electrical energy. Solar energy is the cleanest and most
                    abundant renewable energy source available in nature.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-6">
              <Card>
              <div className="imagediv">
                  <img className="cardimage" src={AE} alt="image1"></img>
                </div>
                <CardContent>
                  <Typography variant="h6" className={classes.cardtitle}>
                    Alternative Energy
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Alternative energy sources are renewable and are thought to
                    be free energy sources. They all have lower carbon
                    emissions, compared to conventional energy sources.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row margin">
            <div className="col-6">
              <Card>
              <div className="imagediv">
                  <img className="cardimage" src={CO2} alt="image1"></img>
                </div>
                <CardContent>
                  <Typography variant="h6" className={classes.cardtitle}>
                    Reduced CO2 Emissions
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    We can reduce the CO2 by selecting the available renewable
                    enegy sources for our daily consumptions.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-6">
              <Card>
              <div className="imagediv">
                  <img className="cardimage" src={EA} alt="image1"></img>
                </div>
                <CardContent>
                  <Typography variant="h6" className={classes.cardtitle}>
                    Environmental Awareness
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Being aware of the natural environment and making choices
                    that benefit the earth, rather than hurt it
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

export default Product;
