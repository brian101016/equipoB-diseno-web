/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/first */

(""); // ################################ BACKGROUND IMAGES ################################
import all from "@theme/images/background-images/all.png";
import home from "@theme/images/background-images/home.png";
import notFound from "@theme/images/background-images/notFound.png";

(""); // ################################ BACKGROUND ################################
import background_buttonClass from "@theme/images/background/buttonClass.png";
import background_buttonClassSVG from "@theme/images/background/buttonClass.svg";
import background_login from "@theme/images/background/login.jpeg";

(""); // ################################ FLOATING ################################
import floating_Inicio from "@theme/images/floating/Inicio.png";
import floating_Buscar from "@theme/images/floating/Buscar.png";
import floating_Calificar from "@theme/images/floating/Calificar.png";
import floating_Comentar from "@theme/images/floating/Comentar.png";
import floating_Mas from "@theme/images/floating/Mas.png";
import floating_Menos from "@theme/images/floating/Menos.png";
import floating_Editar from "@theme/images/floating/Editar.png";
import floating_Eliminar from "@theme/images/floating/Eliminar.png";
import floating_Enviar from "@theme/images/floating/Enviar.png";
import floating_Guardar from "@theme/images/floating/Guardar.png";
import floating_Mensaje from "@theme/images/floating/Mensaje.jpg";
import floating_Notificacion from "@theme/images/floating/Notificacion.png";
import floating_Nuevo from "@theme/images/floating/Nuevo.png";

(""); // ################################ ICON ################################
import icon_calendar_mini from "@theme/images/icon/calendar-mini.png";
import icon_calificar_mini from "@theme/images/icon/calificar-mini.png";
import icon_user_blue from "@theme/images/icon/user-blue.png";
import icon_user_gray from "@theme/images/icon/user-gray.png";
import icon_user from "@theme/images/icon/user.png";

(""); // ################################ LANDING ################################
import landing_icon_calendar from "@theme/images/landing/icon-calendar.png";
import landing_icon_house from "@theme/images/landing/icon-house.png";
import landing_icon_task from "@theme/images/landing/icon-task.png";
import landing from "@theme/images/landing/landing.png";

(""); // ################################ LOGO ################################
import logo_google_mini from "@theme/images/logo/google-mini.png";
import logo_horizontal from "@theme/images/logo/horizontal.png";
import logo_icon from "@theme/images/logo/icon.png";
import logo_vertical from "@theme/images/logo/vertical.png";

(""); // ################################ MISC ################################
import misc_checkbox_active from "@theme/images/misc/checkbox-active.png";
import misc_navbar_class from "@theme/images/misc/navbar-class.svg";
import misc_navbar_home from "@theme/images/misc/navbar-home.svg";
import misc_navbar_user from "@theme/images/misc/navbar-user.svg";
import misc_ojo_off from "@theme/images/misc/ojo-off.png";
import misc_ojo_on from "@theme/images/misc/ojo-on.png";
import misc_spinner from "@theme/images/misc/Spinner.png";

(""); // ################################ CLASES ################################
import icon_avisos from "@theme/images/clase/Avisos.png";
import icon_correo from "@theme/images/clase/Correo.png";
import icon_alumnos from "@theme/images/clase/Alumnos.png";
import bg_class_title from "@theme/images/background/fondo-titulo.png";

(""); // ################################ HOMEWORK ################################
import icon_people from "@theme/images/homework/icon-people.png";
import icon_send from "@theme/images/homework/icon-send.png";
import icon_comments from "@theme/images/homework/icon-comments.png";
import icon_edit from "@theme/images/homework/icon-edit.png";
import icon_menu from "@theme/images/homework/icon-menu.jpg";
import icon_check from "@theme/images/homework/icon-check.png";
import icon_delete from "@theme/images/homework/icon-delete.png";

/** Contiene todas las imágenes del proyecto, basta con simplemente seleccionar alguna y listo. */
const ImageProvider = {
  floating: {
    Inicio: floating_Inicio,
    Buscar: floating_Buscar,
    Calificar: floating_Calificar,
    Comentar: floating_Comentar,
    Mas: floating_Mas,
    Menos: floating_Menos,
    Editar: floating_Editar,
    Eliminar: floating_Eliminar,
    Enviar: floating_Enviar,
    Guardar: floating_Guardar,
    Mensaje: floating_Mensaje,
    Notificacion: floating_Notificacion,
    Nuevo: floating_Nuevo,
  },
  
  backgroundImages: {
    all: all,
    home: home,
    notFound: notFound,
  },

  background: {
    buttonClass: background_buttonClass,
    buttonClassSVG: background_buttonClassSVG,
    login: background_login,
  },

  icon: {
    calendar_mini: icon_calendar_mini,
    calificar_mini: icon_calificar_mini,
    user_blue: icon_user_blue,
    user_gray: icon_user_gray,
    user: icon_user,
  },

  landing: {
    icon_calendar: landing_icon_calendar,
    icon_house: landing_icon_house,
    icon_task: landing_icon_task,
    landing: landing,
  },

  logo: {
    google_mini: logo_google_mini,
    horizontal: logo_horizontal,
    icon: logo_icon,
    vertical: logo_vertical,
  },

  misc: {
    checkbox_active: misc_checkbox_active,
    navbar_class: misc_navbar_class,
    navbar_home: misc_navbar_home,
    navbar_user: misc_navbar_user,
    ojo_off: misc_ojo_off,
    ojo_on: misc_ojo_on,
    spinner: misc_spinner,
  },

  clase: {
    icon_avisos: icon_avisos,
    icon_correo: icon_correo,
    icon_alumnos: icon_alumnos,
    bg_class_title: bg_class_title,
  },
  homework: {
    icon_people: icon_people,
    icon_send: icon_send,
    icon_comments: icon_comments,
    icon_edit: icon_edit,
    icon_menu: icon_menu,
    icon_check: icon_check,
    icon_delete: icon_delete,
  },
};

export default ImageProvider;
