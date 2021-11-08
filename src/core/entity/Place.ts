export interface Place {
  id: string;
  name: string;
  address: string;
  tel: string;
  url: string;
  floor: number;
  floorlist: Array<Object>;
  floormap: Array<String>;
  images: Array<String>;
  description: Text;
}
