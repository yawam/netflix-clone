import useBillboard from "@/hooks/useBillBoard";
import React from "react";

const Billboard = () => {
  const { data } = useBillboard();
  return <div>Billboard</div>;
};

export default Billboard;
