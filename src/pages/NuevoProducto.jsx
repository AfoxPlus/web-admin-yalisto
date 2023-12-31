import { navLinkState } from "../helpers/navLinkState";
import { ButtonLogout, FormProducto } from "../ui/components";

export const NuevoProducto = () => {
  navLinkState("#link_productos");

  return (
    <>
      <div className="flex-space-between">
        <div className="ruta">
          <p>
            Productos / <span>Agregar</span>
          </p>
        </div>
        <ButtonLogout />
      </div>
      <div className="flex-space-between">
        <h1>Nuevo Producto</h1>
      </div>
      <FormProducto textButton={'Guardar'}/>
    </>
  );
};
