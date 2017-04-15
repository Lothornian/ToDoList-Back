export default class {
  constructor( id, summary, description, dueDate, user, isComplete = false){
    this.id = id;
    this.summary = summary;
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.user = user;
  }
}
