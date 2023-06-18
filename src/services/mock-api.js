import axios from 'axios';

axios.defaults.baseURL = 'https://648f252d75a96b664444c09c.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async item => {
  const { name, number, id } = item;
  const newContact = { name, number, id };
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
