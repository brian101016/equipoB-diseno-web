// ################################ INTERFACES & PROPS ################################

import { useRouteError } from "react-router-dom";

// NotFoundScreen => Rename all instances to use
type NotFoundScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const NotFoundScreen = (props: NotFoundScreenProps) => {
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
    <div>
      {err ? (
        <>
          <h1>Error {info.status}</h1>
          <h2>{info.reason}</h2>
          <h4>{info.message}</h4>
        </>
      ) : (
        <>Página no encontrada</>
      )}
    </div>
  );
};

// ################################ EXPORTS ################################
export default NotFoundScreen;
