export class User {
  readonly id = "";
  email = ""; // con estos se hace el login, registrer y todo eso
  name = "";
  password = "";
  myCourses: Course[] = []; // esto es para relacionar, pero todavia no lo pienso bien
  otherCourses: string[] = [];
}

class Course {
  readonly id = "";
  title = "";
  desc = "";
  materia = "";
  homeworks: Homework[] = [];
}

class Homework {
  title = "";
  desc = "";
  date: Date = new Date();
  comments: Comment_[] = [];
  entregas: Entrega[] = [];
}

class Comment_ {
  desc = "";
  userID = "";
  isEdited = false;
  date: Date = new Date();
}

class Entrega extends Comment_ {
  comment = ""; // esto es para que el profe califique
  score = 0;
}
