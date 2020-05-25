import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { CollectionsOverviewComponent } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewComponent>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
