import React, {FunctionComponent} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./index.scss";

interface Props {
    title: string;
    cases: string;
    lastUpdate: string;
}

const InfoBox: FunctionComponent<Props> = ({
    title,
    cases = 0,
    lastUpdate,
}) => {
    return (
        <Card 
            className="info-box"
        >
            <CardContent>
                <Typography
                    className="info-box-title"
                    color="textSecondary"
                >
                    {title}
                </Typography>
                <h2 className="info-box__cases">{cases}</h2>
                <p>Last update at: </p>
                <Typography
                    className="info-box-lastupdate"
                    color="textSecondary"
                >
                    {lastUpdate}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InfoBox;