import React from "react";
import SingleApplication from "./SingleApplication";
import { getSingleApplicationFixture } from "./__fixtures__/applications.fixture";
import styles from "./Applications.module.css";

const Applications = () => {
  const applications = getSingleApplicationFixture;

  return (
    <div className={styles.Applications}>
      <ol className={styles.ApplicationsList}>
        <li>
          <SingleApplication application={applications[0]} />
        </li>
      </ol>
    </div>

  );
};

export default Applications;
