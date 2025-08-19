import { useState } from "react";

const SpecialtyField = ({ specialties }: {specialties: string[]}) => {
  const [toggleExpand, setToggleExpand] = useState(false);
  return (
    <div onClick={() => setToggleExpand(!toggleExpand)}>
      {toggleExpand ? (
        specialties.map((specialty: string) => <div className="specialty" key={specialty}>{specialty}</div>
        )
      ) : (
        <div className="specialty-icon"><i className="fa fa-angle-double-down"></i></div>
      )}
    </div>
  );
};

export default SpecialtyField;
