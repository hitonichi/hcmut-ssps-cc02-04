import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const getPrinter = async () => {
  try {
    const { data } = await axios.get(baseUrl + '/printers');
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addPrinter = async (newData) => {
  try {
    await axios.post(baseUrl + '/printers', newData);
    alert('Success');
  } catch (error) {
    alert(error);
  }
};

export const ModifyPrinter = async (newData) => {
  try {
    await axios.patch(baseUrl + '/printers/updateStatus', newData);
    alert('Update status success');
  } catch (error) {
    alert(error);
  }
};
