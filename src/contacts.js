import { promises as fs } from "fs";

const contactsPath = "./db/contacts.json";

export const listContacts = async () => {
  // ...твій код. Повертає масив контактів.
};

export const getContactById = async (contactId) => {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
};

export const removeContact = async (contactId) => {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
};

export const addContact = async (name, email, phone) => {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
};
