import axios from 'axios';
import md5 from 'md5';

const privateKey = '4029a0c699e40af7dbe0685b39f3cef2367276fe';
const publicKey = 'b00c558ed1d9824a6aa4c9511f831763';
const baseUrl = 'https://gateway.marvel.com/v1/public/comics';
const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

const getHqList = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getComicById = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/1308/?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getHqList, getComicById };
