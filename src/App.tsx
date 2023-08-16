import algoliasearch from "algoliasearch/lite";
import {
  Hits as AlgoliaHits,
  Configure,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch";

import "instantsearch.css/themes/satellite.css";

import Hits from "./components/Hits";

// import "./App.css";
import { Col, Layout, Row, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const searchClient = algoliasearch(
  "XP1F8B8ZH7",
  process.env.REACT_APP_ALGOLIA_API_KEY!
);

function App() {
  return (
    <div>
      <InstantSearch
        searchClient={searchClient}
        indexName="dev_hoda_airports"
        insights
      >
        <Header style={{ backgroundColor: "gray", paddingTop: 10 }}>
          <Row>
            <Col span={8}>
              <Typography.Title level={3}>
                Hello Algolia Dev Interviewer 💻
              </Typography.Title>
            </Col>
            <Col span={16}>
              <SearchBox />
            </Col>
          </Row>
        </Header>
        <Layout
          style={{
            color: "whitesmoke",
            fontFamily: "monospace",
          }}
        >
          <Configure hitsPerPage={5} />

          <Sider style={{ backgroundColor: "gray" }}>
            <RefinementList attribute="country" />
          </Sider>
          <Content style={{ backgroundColor: "gray" }}>
            <AlgoliaHits hitComponent={Hits} />
            <Pagination />
          </Content>
        </Layout>
      </InstantSearch>
    </div>
  );
}

export default App;
