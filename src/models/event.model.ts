export class EventModel{
  public id: number;
  public title: string;
  public description: string;
  public date: string;
  public hidden: boolean;

  constructor(id: number, title: string, description: string, date: string, hidden: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.hidden = hidden;
  }
}
