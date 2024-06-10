import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  console.log("PropertyList COMPONENT - PAGES ROUTER");

  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">PROPERTY LIST</Stack>
    </div>
  );
};
export default withLayoutBasic(PropertyList);
