import useSWR, {SWRResponse} from "swr";
import {TApplication} from "./types/TApplication.ts";

const fetcher = (key: string) => fetch(key).then(res => res.json())

const useApplicationsStore = (page: number, limit: number, suspense = false): SWRResponse<TApplication[]> => {
  if (page < 0) throw new Error('Page must be greater than 0')
  if (limit < 0) throw new Error('Limit must be greater than 0')
  const key = `?_page=${page}&_limit=${limit}`
  return useSWR(key, fetcher, {suspense})
}

export default useApplicationsStore