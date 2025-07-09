import React from "react";
import SingleApplication from "./SingleApplication";
import { getSingleApplicationFixture } from "./__fixtures__/applications.fixture";
import styles from "./Applications.module.css";
import {Button} from "./ui/Button/Button.tsx";

const Applications = () => {
  const applications = getSingleApplicationFixture;

  return (
    <div className={styles.Applications}>
      <ol className={styles.ApplicationsList}>
        <li>
          <SingleApplication application={applications[0]} />
        </li>
      </ol>
      <Button className={styles.LoadMore}>
        Load more
      </Button>
    </div>
  );
};

export default Applications;
