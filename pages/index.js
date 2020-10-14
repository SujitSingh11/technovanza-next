import Head from "next/head";
import Styles from "../styles/Home.module.css";
import { Grid, Container, Typography } from "@material-ui/core";

import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={Styles.root}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Styles.main}>
        <Grid alignItems="center" className={Styles.rootHeaderGrid} container>
          <Container maxWidth="lg">
            <Grid
              lg={5}
              md={6}
              sm={8}
              xs={12}
              className={Styles.headerGrid}
              item
            >
              <div className={Styles.headerTitleDiv}>
                <img
                  alt="technoLogo"
                  src="/Technovanza.svg"
                  className={Styles.headerTitle}
                />
              </div>
              <Typography
                className={Styles.headerDescription}
                variant="body1"
                component="span"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
            </Grid>
          </Container>
        </Grid>
      </main>

      <footer className={Styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
