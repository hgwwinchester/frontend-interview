import {renderHook, waitFor} from "@testing-library/react";
import useApplicationsStore from "./useApplicationsStore.tsx";

describe('use applications store fetches applications', () => {
  it('should fetch applications', async () => {
    // Just need to check if it actually has applications
    // Testing pagination is a serverside concern
    const {result} = renderHook(() => useApplicationsStore(0, 1))
    await waitFor(() => expect(result.current.isLoading).toBeTruthy())
    const {data} = result.current
    expect(data).toBeDefined()
    expect(data.length).toBeGreaterThan(0)
  })
  // Could use more tests - not enough time
});