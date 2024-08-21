import React, { useState } from "react";
import LandingOne from "./landingOne";
import LandingTwo from "./landingTwo";
import LandingThree from "./landingThree";
import LandingFour from "./landingFour";

const Index = () => {
  const [formWizard, setFormWizard] = useState(1);
  return (
    <div>
      {formWizard === 1 && (
        <LandingOne
          onClick={() => setFormWizard(2)}
          isActive={formWizard === 1}
        />
      )}
      {formWizard === 2 && (
        <LandingTwo
          onClick={() => setFormWizard(3)}
          isActive={formWizard === 2}
        />
      )}
      {formWizard === 3 && (
        <LandingThree
          onClick={() => setFormWizard(4)}
          isActive={formWizard === 3}
        />
      )}
      {formWizard === 4 && <LandingFour onClick={() => setFormWizard(1)} />}
    </div>
  );
};

export default Index;
