import { FC } from "react";
import { Helmet } from "react-helmet";

export const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <h1 data-testid="page-title">About</h1>
      <p>Hello</p>
      <p>This is an example application.</p>
    </>
  );
};
