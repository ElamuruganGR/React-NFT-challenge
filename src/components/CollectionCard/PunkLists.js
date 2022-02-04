import React from "react";
import { CollectionCard } from ".";
import './punkList.css';

export const PunkLists = ({punkListData, setSelectedPunk}) => {

  return (
    <div className="punkList scroll-snap-align" >
      {punkListData.length > 0 &&
          punkListData.map((punkData) => (
        <CollectionCard
          key={punkData.token_id}
          id={punkData.token_id}
          name={punkData.name}
          image={punkData.image_url}
          traits={punkData.traits}
          setSelectedPunk={setSelectedPunk}
        />
      ))}
    </div>
  );
};
