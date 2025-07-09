import React, {FC, useCallback, useState} from "react";
import styles from "./Applications.module.css";
import {Button} from "./ui/Button/Button.tsx";
import useApplicationsStore from "./useApplicationsStore.tsx";
import SingleApplication from "./SingleApplication.tsx";
import {TApplication} from "./types/TApplication.ts";

type ApplicationsListProps = {
  applications: TApplication[]
}

const ApplicationsList: FC<ApplicationsListProps> = ({applications}) => {
  return <ol className={styles.ApplicationsList}>
    {applications.map((application) => (
      <li key={application.id}>
        <SingleApplication application={application}/>
      </li>
    ))}
  </ol>
}

const ApplicationsLoading: FC = () => {
  return <p className={styles.Loading}>Loading applications...</p>
}

const Applications = () => {
  const [page, setPage] = useState(0);
  const {data: applications} = useApplicationsStore(page, 5)

  const loadMoreFn = useCallback(() => setPage(page => page + 1), [setPage])

  return (
    <div className={styles.Applications}>
      {applications ? <ApplicationsList applications={applications}/> : <ApplicationsLoading/>}
      <Button className={styles.LoadMore} onClick={loadMoreFn}>
        Load more
      </Button>
    </div>
  );
};

export default Applications;
