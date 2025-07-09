import React, {FC, useCallback, useEffect, useState} from "react";
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
  const [applications, setApplications] = useState<TApplication[]>([])
  const [page, setPage] = useState(0);
  const {data, error, isLoading} = useApplicationsStore(page, 5)

  useEffect(() => setApplications(apps => [...apps, ...(data ?? [])]), [data, setApplications])

  const loadMoreFn = useCallback(() => setPage(page => page + 1), [setPage])

  return (
    <div className={styles.Applications}>
      <ApplicationsList applications={applications}/>
      {isLoading && <ApplicationsLoading/>}
      <Button className={styles.LoadMore} onClick={loadMoreFn} disabled={isLoading} >
        Load more
      </Button>
    </div>
  );
};

export default Applications;
