import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/student"
          >
            Student Documentation
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/professor"
          >
            Professor Documentation
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/dep-clerk"
          >
            Clerk Documentation
          </Link>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Link
            to="/docs/overview"
            className="button button--secondary button--outline button--lg"
          >
            ERP System Overview
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="ERP documentation for Students, Professors, and Clerks. Start here!"
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
