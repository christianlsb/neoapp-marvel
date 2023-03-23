import axios from 'axios';
import md5 from 'md5';

const publicKey = 'b00c558ed1d9824a6aa4c9511f831763';
const privateKey = '4029a0c699e40af7dbe0685b39f3cef2367276fe';
const apiUrl = 'https://gateway.marvel.com/v1/public/comics';

export const getComicById = async id => {
  const timestamp = Date.now().toString();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);

  try {
    const response = await axios.get(`${apiUrl}/${id}`, {
      params: {
        apikey: publicKey,
        ts: timestamp,
        hash,
      },
    });

    return response.data.data.results[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
