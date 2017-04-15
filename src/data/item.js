export default class {
  constructor( summary, description, dueDate, user, isComplete = false){
    this.summary = summary;
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.user = user;
  }
}
