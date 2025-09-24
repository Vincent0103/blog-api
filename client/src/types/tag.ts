export interface TagType {
  id: string;
  name: string;

  // FIXME: add better matching for color
  color?: string;
  isFilter?: boolean;
}
