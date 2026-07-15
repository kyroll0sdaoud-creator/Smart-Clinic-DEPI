import axios from "axios";

const BASE_URL = "http://localhost:3001/users";

export async function loginApi(formData) {
  const { data } = await axios.get(BASE_URL);

  const user = data.find(
    (item) =>
      item.email === formData.email &&
      item.password === formData.password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
}