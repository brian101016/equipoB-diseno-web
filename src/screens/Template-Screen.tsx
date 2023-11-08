// ################################ IMPORTS ################################
import styled, { css } from "styled-components";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// Template => Rename all instances to use
type TemplateProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _Template = (props: TemplateProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return <div className={props.className}></div>;
};

// ################################ STYLES ################################
const Template = styled(_Template)<TemplateProps>`
  ${(props) => css``}
`;

// ################################ EXPORTS ################################
export default Template;
