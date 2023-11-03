// ################################ INTERFACES & PROPS ################################

import { useRouteError } from 'react-router-dom';
import RowList from '@components/RowList';

// NotFoundScreen => Rename all instances to use
type NotFoundScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const NotFoundScreen = (props: NotFoundScreenProps) => {
    const err = useRouteError() as any;

    const info = err
        ? {
              status: err.status || 'inesperado',
              reason: err.data || 'Algo salió mal...',
              message:
                  err.statusText ||
                  err.message ||
                  'Vuelva a intentarlo más tarde.',
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
                // Pruebas temporales [Eliminar todo el codigo de prueba aqui]
                <>
                    Página no encontrada
                    <h1>Lista de Tareas</h1>
                    <RowList
                        svgStatus={0}
                        numActivity={1}
                        titulo={'Tarea de prueba'}
                        fecha="10/11/2023"
                        hora="23:59:00"
                        calificacion={85}
                    />
                    <RowList
                        svgStatus={1}
                        numActivity={2}
                        titulo={'Resumen libro del gabacho'}
                        fecha="12/11/2023"
                        hora="23:59:00"
                        calificacion={50}
                    />
                    <RowList
                        svgStatus={3}
                        numActivity={2}
                        titulo={'Practica codigo HTML'}
                        fecha="29/10/2023"
                        hora="23:59:00"
                        calificacion={100}
                    />
                    <RowList
                        svgStatus={3}
                        numActivity={2}
                        titulo={'Practica codigo HTML'}
                        fecha="29/10/2023"
                        hora="23:59:00"
                        calificacion={0}
                    />
                    <RowList
                        svgStatus={3}
                        numActivity={2}
                        titulo={'Practica codigo HTML'}
                        fecha="03/11/2023"
                        hora="23:59:00"
                    />
                    <h2>termina la lista de tareas</h2>
                </>

                // Aqui termina el codigo de prueba
            )}
        </div>
    );
};

// ################################ EXPORTS ################################
export default NotFoundScreen;
