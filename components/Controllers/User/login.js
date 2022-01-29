// pages/profile.js
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { React } from "react";

export default withPageAuthRequired(function Profile({ user, children }) {
  return <>{children}</>;
});
