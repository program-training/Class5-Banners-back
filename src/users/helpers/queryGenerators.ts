type entriesType = { keys: string[]; values: (string | number | boolean)[] };

export const insertQGenerator = ({ keys, values }: entriesType) => {
  const stringKeys = "(" + keys.toString() + ")";
  const stringValues = "(" + values.toString() + ")";
  const query = `INSERT INTO users ${stringKeys} VALUES ${stringValues} RETURNING *`;
  return query;
};

export const updateQGenerator = (id: string, { keys, values }: entriesType) => {
  const update = keys.map((key, i) => `${key}=${values[i]}`);
  const query = `UPDATE users SET ${update} WHERE user_id = ${id} RETURNING *`;
  return query;
};
