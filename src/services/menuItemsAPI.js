import axios from "axios";

const fetchMenuItems = async () => {
  try {
    const response = await axios.get("/library/NavbarItem.json");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchMenuItems;