import { Card, Tag, Typography } from "antd";
import { Highlight } from "react-instantsearch";

type MyProps = {
  name: string;
  city: string;
  country: string;
  iata_code: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  links_count: number;
  objectId: string;
  _highlightResult: any;
};

// interface Hit extends HitsProps {
//   hit: HitProps;
// }

export default function Hits({ hit }: any) {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  return (
    <Card
      title={hit.name}
      style={{ width: "350px" }}
      extra={<Tag>{hit.iata_code}</Tag>}
    >
      <Highlight attribute={"name"} hit={hit}></Highlight>
      <Typography.Text>{`${hit.city}, ${hit.country}`}</Typography.Text>
      <br></br>
      <Typography.Text>{`Airport Code: ${hit.iata_code}`}</Typography.Text>
      <iframe
        width="280px"
        height="150px"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=%20${hit._geoloc.lat}%2C%20%20${hit._geoloc.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
      ></iframe>
    </Card>
  );
}
