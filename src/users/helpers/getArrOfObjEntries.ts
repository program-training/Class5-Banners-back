import { UserInterface } from "../interface/userInterface";

export const getArrOfObjEntries = (obj: Partial<UserInterface>) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  keys = keys.map((key) => (key = `"${key}"`));
  values = values.map((val) => (val = `'${val}'`));
  return { keys, values };
};
