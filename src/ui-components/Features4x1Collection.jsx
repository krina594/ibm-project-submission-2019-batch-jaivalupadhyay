/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Features } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Features4x1 from "./Features4x1";
import { Collection } from "@aws-amplify/ui-react";
export default function Features4x1Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Features,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "Features4x1Collection")}
      {...rest}
    >
      {(item, index) => (
        <Features4x1
          feature={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Features4x1>
      )}
    </Collection>
  );
}
