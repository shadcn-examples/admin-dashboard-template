"use client";

import ReactGA from "react-ga4";

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GA_ID}`);
    ReactGA.send("pageview");
  });

  return null;
}
