import { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
    throw new Error("Sentry Error");
  };
  