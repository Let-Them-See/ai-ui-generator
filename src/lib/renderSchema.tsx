import React from "react";
import { componentRegistry } from "./componentRegistry";
import { UISchema } from "@/types/uiSchema";

export function renderSchema(schema: UISchema): React.ReactNode {
  const Component = componentRegistry[schema.type];

  if (!componentRegistry[schema.type]) {
  return <div>Blocked invalid component: {schema.type}</div>;
}

  const children = schema.children?.map((child, index) =>
    <React.Fragment key={index}>
      {renderSchema(child)}
    </React.Fragment>
  );

  return <Component {...schema.props}>{children}</Component>;
}
