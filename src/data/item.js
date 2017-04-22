/*
 * item.js
 * Definition of the item object
 * Author: Kyle Hunt
 * Created Date: 4/15/17
 * Last Updated: 4/15/17
 */
export default class {
  constructor(
    id,
    summary,
    description,
    dueDate,
    user,
    isComplete = false
  ) //end constructor params
  {
    this.id = id;
    this.summary = summary;
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.user = user;
  }// end constructor method
}
