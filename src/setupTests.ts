// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import {getSingleApplicationFixture} from "./__fixtures__/applications.fixture.js"

/// <reference types="vitest" />

import {http, HttpResponse} from "msw";
import {setupServer} from "msw/node";

const applications = Array.from({length: 50}, () => getSingleApplicationFixture[0])

const restHandlers = [
  http.get('http://localhost:3001/api/applications', () => {
    return HttpResponse.json(applications);
  })
]

const server = setupServer(...restHandlers);

beforeAll(async () => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())