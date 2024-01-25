import * as React from "react";
import { ViewPropTypes } from "./Card.types";
import { getPriorityIcons, getTicketStatusIcons } from "../Utils/priorityIcons";

const CardView = (props: ViewPropTypes) => {
  const { model, classes } = props;
  const { data, userName, userAvailable } = model;
  return (
    <div className={classes.card} key={data.id}>
      <div className={classes.cardHeader}>
        <div>{data.id}</div>
        <div className={"cardUserImg"}>
          {userName}
          <span className={`cardUserStatus ${userAvailable ? classes.cardUserStatusActive : ''}`} />
        </div>
      </div>
      <div className={classes.cardTitle}>
        <div>{getTicketStatusIcons(data.status)}</div>
        <div>{data.title}</div>
      </div>
      <div className={classes.cardFooter}>
        <div className={classes.cardTag}>{getPriorityIcons(data.priority)}</div>
        {data.tag?.map((tag) => (
          <div className={classes.cardTag} key={tag}>
            <span className={classes.tagStatus} />
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
