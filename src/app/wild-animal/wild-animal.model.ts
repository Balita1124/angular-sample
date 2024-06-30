export class WildAnimal {
  name?: string;
  category?: string;
  area?: string;

  constructor(name: string, category: string, area: string) {
    this.name = name;
    this.category = category;
    this.area = area;
  }

  mapping(): Column[] {
    return [
      new Column('name', 'Name', 'text', ''),
      new Column('category', 'Category', 'text', ''),
      new Column('area', 'Area', 'text', ''),
    ];
  }
}

export class Column {
  columnName?: string;
  columnLabel?: string;
  columnType?: string;
  columnFormat?: string;

  constructor(
    columnName: string,
    columnLabel: string,
    columnType: string,
    columnFormat: string,
  ) {
    this.columnName = columnName;
    this.columnLabel = columnLabel;
    this.columnType = columnType;
    this.columnFormat = columnFormat;
  }
}
