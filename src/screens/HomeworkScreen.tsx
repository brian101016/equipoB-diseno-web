// ################################ IMPORTS ################################
import ModalComments from "@components/ModalComments";
import { useState } from "react";
import styled, { css } from "styled-components";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// HomeworkScreen => Rename all instances to use
type HomeworkScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _HomeworkScreen = (props: HomeworkScreenProps) => {
  
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <ModalComments users={""} />
    </div>
  );
};

// ################################ STYLES ################################
const HomeworkScreen = styled(_HomeworkScreen) <HomeworkScreenProps>`
  ${(props) => css``}
`;

// ################################ EXPORTS ################################
export default HomeworkScreen;
