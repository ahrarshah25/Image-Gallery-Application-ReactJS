import axios from "axios";

const getImages = async (index) => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);

    const data = response.data;

    return data;
}

export default getImages;