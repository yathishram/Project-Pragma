import React from "react";
import AnimatedNumber from "animated-number-react";

const Profile = ({ profile }) => {
  const { PragmaRewards } = profile;
  const formatValue = (value) => value.toFixed(0);
  return (
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
          <div className="row">
            <div className="col s6">
              <h5>Welcome!</h5>
              <h3>
                {profile.firstName} {profile.lastName}
              </h3>
            </div>
            <div className="col s6">
              <h5>Your Pragma Rewards</h5>
              <h3 style={{ color: "#ff4156" }}>
                <AnimatedNumber value={PragmaRewards} formatValue={formatValue} />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
