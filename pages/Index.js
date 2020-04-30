import Head from "next/head";
import Button from "@material-ui/core/Button";

const styleDiv = {
  color: "red"
};

const Index = () => (
  <div style={{ padding: "10px 45px" }}>
    <Head>
      <title>Index page</title>
      <meta
        name="description"
        content="This is the description of the Index page"
      />
    </Head>
    <div style={styleDiv}>
      <p>Content on Index page, yo!</p>
    </div>
    <Button variant="contained">MUI button</Button>
  </div>
);

export default Index;
