// ################################ IMPORTS ################################
import Spinner from "@components/Spinner";
import { useRouteError } from "react-router-dom";
import styled, { css } from "styled-components";
import ImageProvider from "@utils/ImageProvider";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// NotFoundScreen => Rename all instances to use
type NotFoundScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _NotFoundScreen = (props: NotFoundScreenProps) => {
  const err = useRouteError() as any;

  const info = err
    ? {
        status: err.status || "inesperado",
        reason: err.data || "Algo salió mal...",
        message:
          err.statusText || err.message || "Vuelva a intentarlo más tarde.",
      }
    : {};

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className="notFound">
      {err ? (
        <>
          <h1>Error {info.status}</h1>
          <h2>{info.reason}</h2>
          <h4>{info.message}</h4>
        </>
      ) : (
        "Página no encontrada"
      )}

      <Spinner />
    </div>
  );
};

// ################################ STYLES ################################
const NotFoundScreen = styled(_NotFoundScreen)<NotFoundScreenProps>`
    .notFound{
    height: 100vh;
    background-image: url(${ImageProvider.backgroundImages.all});
  }
`;

// ################################ EXPORTS ################################
export default NotFoundScreen;
