// ################################ INTERFACES & PROPS ################################

import { Link } from "react-router-dom";

// LandingScreen => Rename all instances to use
type LandingScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const LandingScreen = (props: LandingScreenProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div>
      Landing page
      <Link to={"/login"}>Ir hacia Login</Link>
    </div>
  );
};

// ################################ EXPORTS ################################
export default LandingScreen;
