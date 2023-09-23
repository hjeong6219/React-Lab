import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://lybrkcjuccvuxhejoksl.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-09-23T03%3A08%3A43.411Z" />
    </Row>
  );
}

export default Cabins;
