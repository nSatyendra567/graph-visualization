import React from "react";
import "./CustomNode.css";

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      <div className="node-header">
        <h4>{data.title}</h4>
      </div>
      <div className="node-body">
        <p className="method-name">{data.method}</p>
        <p><strong>DependentLibs:</strong> {data.libs.join(', ')}</p>
        <p><strong>Params:</strong> {JSON.stringify(data.params)}</p>
        <p><strong>ResponseObject:</strong> {data.responseObject}</p>
      </div>
    </div>
  );
};

export default CustomNode;
