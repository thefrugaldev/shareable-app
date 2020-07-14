export default interface ListItemModel {
  name: string;
  id: string | null;
  quantity: number;
  imageSource: string;
}

export const NewListItem: ListItemModel = {
  name: "Click to add a new item",
  id: null,
  quantity: 0,
  imageSource: "",
};
