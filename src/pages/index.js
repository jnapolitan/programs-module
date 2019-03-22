import React from "react";
import { graphql } from "gatsby";
import Program from "../components/program";
import Layout from "../components/layout";
import programOverviewStyles from "../styles/program-overview.module.css";
import programOverviewHeaderImage from "../images/pgm-overview-header.png";

const Index = ({ data }) => {
  const programs = data.allProgramsJson.edges.map((program, idx) => (
    <Program program={program} key={`program-${idx}`} />
  ));

  return (
    <Layout>
      <div className={programOverviewStyles.header}>
        <img src={programOverviewHeaderImage} alt="hand-with-heart" />
        <div>
          <h2>Program Overview</h2>
          <p>Welcome to your Program Overview page. Here you'll find helpful 
            resources and activities to help you manage your mental well-being 
            so you can stay happy and healthy.
          </p>
        </div>
      </div>
      { programs }
    </Layout>
  )
}

export default Index;

export const query = graphql`
{
  allProgramsJson {
    edges {
      node {
        id
        name
        description
        sections {
          storagePrefix
          programName
          order
          name
          image
          activities {
            type
          }
        }
      }
    }
  }
}
`