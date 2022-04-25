import Card from "../shared/Card";
import { useState } from "react";

function Display(entry) {
  console.log(entry);
  return (
    <Card>
      <div className="display"></div>
    </Card>
  );
}
export default Display;
