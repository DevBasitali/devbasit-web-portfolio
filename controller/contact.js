import Contact from '../model/contact';

// Save a new contact message
export const createContact = async (data) => {
  try {
    const contact = new Contact(data);
    await contact.save();
    return { success: true, message: 'Message saved successfully!' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
