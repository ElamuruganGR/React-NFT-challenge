import React from "react";
import "./styles.css";
import Instagram from '.././../assets/owner/instagram.png';
import Twitter from '.././../assets/owner/twitter.png';
import More from '.././../assets/owner/more.png';

export const PunkHighlighter = ({ activePunk }) => {
  console.log("activePunk:", activePunk);
  return (
    <div className="punk-highlighter-container">
      <div className="selected-punk-image-container">
        <img src={activePunk.image_url} alt={activePunk.name} />
      </div>
      <div className="selected-punk-metadata">
        <div className="punk-details">
          <span className="name">{activePunk.name}</span>
          <span className="id">.#{activePunk.token_id}</span>
        </div>
        <div className="owner-details">
          <div className="owner-info">
            <div className="owner-image-container">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="owner-data">
              <div className="owner-address">{activePunk.owner.address}</div>
              <div className="owner-name">
                {"@CleverProgrammer"}
                {
                  // activePunk.owner.user.username
                }
              </div>
            </div>
          </div>
          <div className="owner-contact-info">
                <img src={Instagram} alt={"instagram"} />
                <img src={Twitter} alt={"twitter"} />
                <img src={More} alt={"more"} />
          </div>
        </div>
      </div>
    </div>
  );
};
