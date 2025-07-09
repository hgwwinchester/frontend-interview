import React, {FC, useMemo} from "react";
import styles from "./SingleApplication.module.css";
import {TApplication} from "./types/TApplication.ts";

// Could replace the `/` with `-` using str replace, but best to keep simple
const localeDate = (date: string) => new Date(date).toLocaleDateString()

type SingleApplicationProps = {
  application: TApplication
}

const SingleApplication: FC<SingleApplicationProps> = ({application}) => {
  const loanAmount = useMemo(() => new Intl.NumberFormat("en-GB", {
    style: 'currency',
    currency: 'GBP'
  }).format(application.loan_amount), [application.loan_amount])
  const dateCreated = useMemo(() => localeDate(application.date_created), [application.date_created])
  const dateExpired = useMemo(() => localeDate(application.expiry_date), [application.expiry_date])
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {/* Potentially unsafe? Maybe needs verification. */}
        <a className={styles.email} href={`mailto:${application.email}`}>{application.email}</a>
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {loanAmount}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {dateCreated}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {dateExpired}
      </div>
    </div>
  );
};

export default SingleApplication;
