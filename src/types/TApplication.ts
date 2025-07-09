import {LOAN_TYPES} from "./LOAN_TYPES.ts";

type TLoanType = (typeof LOAN_TYPES)[number];

type TLoanHistory = {
  loan_started: Date;
  loan_ended: Date;
  principle: number;
  interest_rate: number;
  interest: number;
};

export type TApplication = {
  id: number;
  first_name: string;
  last_name: string;
  loan_amount: number;
  loan_type: TLoanType;
  email: string;
  company: string;
  date_created: Date;
  expiry_date: Date;
  avatar: string;
  loan_history: TLoanHistory[];
};