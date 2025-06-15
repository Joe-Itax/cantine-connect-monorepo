import bcrypt from "bcrypt";

const hashValue = async (value: string) => {
  if (!value) throw new Error("Aucune valeur à hasher !");
  return bcrypt.hashSync(value, 10);
};

const compareHash = async (value: string, hashedValue: string) => {
  if (!value || !hashedValue) throw new Error("Valeur ou hash manquant !");
  return bcrypt.compareSync(value, hashedValue);
};

export { hashValue, compareHash };
