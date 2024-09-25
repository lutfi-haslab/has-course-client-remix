import * as Sentry from "@sentry/remix";

Sentry.init({
<<<<<<< HEAD
    dsn: "https://ad2f33a0bce89512ab88323f6586005c@o4507485188325376.ingest.us.sentry.io/4508008435023872",
=======
    dsn: process.env.SENTRY_DSN,
>>>>>>> origin/main
    tracesSampleRate: 1,
    autoInstrumentRemix: true
})