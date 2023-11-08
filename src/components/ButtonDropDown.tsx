import {
  Button_Menosf,
  Button_Masf,
  Button_Comentariof,
  Button_Editarf,
  Button_Agregarf,
} from "@components/StyledComponents";
import { useState } from "react";

function BtnDropDown() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="dropdown">
        {show ? (
          <div className="dropdown-items-show">
            <Button_Menosf onClick={() => setShow(false)}></Button_Menosf>
            <Button_Agregarf></Button_Agregarf>
            <Button_Editarf></Button_Editarf>
            <Button_Comentariof></Button_Comentariof>
          </div>
        ) : (
          <Button_Masf onClick={() => setShow(true)}></Button_Masf>
        )}
      </div>
    </>
  );
}

export default BtnDropDown;
