import React from "react";
import { OurWeddingService } from "../context/ourweddingservice";
import OurWedding from "../pages/ourwedding";

export default function OurWeddingContainer() {
  return (
    <>
      <OurWeddingService>
        <OurWedding />
      </OurWeddingService>
    </>
  );
}
