// ################################################################ _AUTO
/**
 * Clase extensible que coloca props automáticamente.
 * 1. {@link id} - ***readonly*** `string`.
 */
abstract class _setup {
  /**
   * Coloca todos los props automáticamente.
   * @param ini Objeto de donde obtener los datos iniciales.
   *
   * Puede estar vacío y puede omitir algunos campos para que se tome los valores por defecto.
   */
  protected setup(ini?: any) {
    for (const prop in this) this[prop] = ini?.[prop as string] || this[prop];
  }

  /** Marca un ID alfanumérico aleatorio de 16 caracteres. */
  readonly id: string = ""; // WIP
}

// ################################################################ USER
/**
 * Interfaz para modelar a los usuarios de la aplicación.
 *
 * Solamente se incluye la siguiente información básica:
 * 1. {@link id} - ***readonly*** `string`.
 * 1. {@link email} - `string` -> `""`.
 * 1. {@link name} - `string` -> `""`.
 * 1. {@link password} - `string` -> `""`.
 */
export class User extends _setup {
  /** Información adicional del usuario para que los demás usuarios le identifiquen. */
  name = "";
  /** Representa una dirección Email válida del usuario para iniciar sesión (login). */
  email = "";
  /** Contraseña para iniciar sesión en la aplicación (login). */
  password = "";

  /**
   * @param ini similar a {@link _setup.setup}
   */
  constructor(ini?: Partial<User>) {
    super();
    this.setup(ini);
  }
}

// ################################################################ COURSE
/**
 * Interfaz para modelar los cursos que crean los usuarios.
 *
 * Toda la información es básica para dar un ejemplo:
 * 1. {@link id} - ***readonly*** `string`.
 * 1. {@link teacherID} - ***readonly*** `string`.
 * 1. {@link title} - `string` -> `""`.
 * 1. {@link desc} - `string` -> `""`.
 * 1. {@link subject} - `string` -> `""`.
 * 1. {@link color} - `string` -> `"#000000"`.
 * 1. {@link students} - `string[]` -> `[]`.
 * 1. {@link homeworks} - `Homework[]` -> `[]`.
 */
export class Course extends _setup {
  /** Relación con el usuario que creó el curso, solo guarda su {@link User.id}. */
  readonly teacherID: string = "";
  /** Título del curso. */
  title = "";
  /** Descripción del curso. */
  desc = "";
  /** Materia o tema del curso, para establecer cursos similares. */
  subject = "";
  /** Color del curso, será en formato #RRGGBB. */
  color = "#000000";
  /** Lista de estudiantes que se inscribieron al curso, solo guarda los {@link User.id}. */
  students: string[] = [];
  /** Lista de tareas creadas dentro del curso. */
  homeworks: Homework[] = [];

  /**
   * @param ini similar a {@link _setup.setup}
   */
  constructor(ini?: Partial<User>) {
    super();
    this.setup(ini);
  }
}

// ################################################################ HOMEWORK
/**
 * Interfaz para modelar las tareas contenidas en los cursos.
 *
 * La tarea contará con lo mínimo para facilitar el desarrollo de la app.
 * 1. {@link id} - ***readonly*** `string`.
 * 1. {@link title} - `string` -> `""`.
 * 1. {@link desc} - `string` -> `""`.
 * 1. {@link dueDate} - `Date` -> `new Date()`.
 * 1. {@link comments} - `Comment_[]` -> `[]`.
 * 1. {@link submissions} - `Submission[]` -> `[]`.
 */
export class Homework extends _setup {
  /** Título / nombre de la tarea. */
  title = "";
  /** Descripción de la tarea. */
  desc = "";
  /** Fecha límite de entrega. */
  dueDate: Date = new Date();
  /** Lista de comentarios colocados en la tarea. */
  comments: Comment_[] = [];
  /** Lista de entregas realizadas en la tarea. */
  submissions: Submission[] = [];

  /**
   * @param ini similar a {@link _setup.setup}
   */
  constructor(ini?: Partial<User>) {
    super();
    this.setup(ini);
  }
}

// ################################################################ COMMENT
/**
 * Interfaz para modelar los comentarios de las tareas.
 *
 * Se trata de información básica para comentar (sin respuestas):
 * 1. {@link id} - ***readonly*** `string`.
 * 1. {@link authorID} - ***readonly*** `string`.
 * 1. {@link title} - `string` -> `""`.
 * 1. {@link content} - `string` -> `""`.
 * 1. {@link isEdited} - `boolean` -> `false`.
 * 1. {@link date} - `Date` -> `new Date()`.
 */
export class Comment_ extends _setup {
  /** Relación con el usuario que creó el comentario, solo guarda su {@link User.id}. */
  readonly authorID: string = "";
  /** Título del comentario. */
  title = "";
  /** Contenido del comentario (el comentario en sí). */
  content = "";
  /** Indica si acaso el comentario fue editado o no por su autor. */
  isEdited = false;
  /** Fecha de creación del comentario. */
  date: Date = new Date();

  /**
   * @param ini similar a {@link _setup.setup}
   */
  constructor(ini?: Partial<User>) {
    super();
    this.setup(ini);
  }
}

// ################################################################ SUBMISSION
/**
 * Interfaz para modelar los entregables de las tareas.
 *
 * Extiende de un comentario e incluye calificación:
 * 1. {@link id} - ***readonly*** `string`.
 * 1. {@link authorID} - ***readonly*** `string`.
 * 1. {@link title} - `string` -> `""`.
 * 1. {@link content} - `string` -> `""`.
 * 1. {@link isEdited} - `boolean` -> `false`.
 * 1. {@link date} - `Date` -> `new Date()`.
 * 1. {@link comment} - `string` -> `""`.
 * 1. {@link score} - `number` -> `-1`.
 */
export class Submission extends Comment_ {
  /** Representa un comentario del profesor sobre la tarea. */
  comment = "";
  /** Calificación del entregable. Marcar `-1` representa `Sin calificar`. */
  score = -1;

  /**
   * @param ini similar a {@link _setup.setup}
   */
  constructor(ini?: Partial<User>) {
    super();
    this.setup(ini);
  }
}

// ################################################################ DB MODEL
/**
 * Tipo de dato para modelar la base de datos completa.
 * 1. {@link users}
 * 1. {@link courses}
 */
export type _DB = {
  /** Todos los usuarios de la DB. */
  users: User[];
  /** Todos los cursos de la DB. */
  courses: Course[];
  /** Usuario actual iniciado sesión. Si es `null` no hay nadie. */
  currentUser: null | User;
  /** */
  showAlerts: (color: number)=> void; 
};

// ################################################################ MISCELLANEOUS
/** Provides basic prop structure for functional components */
export type Base = {
  /** Overrides any other `className` passed */
  className?: string;
  /** Overrides any other `style` passed */
  _style?: import("react").CSSProperties;
};
