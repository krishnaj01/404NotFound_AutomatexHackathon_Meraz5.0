function validateFormData(formData) {
    if (typeof formData.email !== 'string') return false;
    if (typeof formData.name !== 'string') return false;
    if (typeof formData.contact !== 'number') return false;
    if(!(Object.values(Form.Types).includes(formData.type))) return false;
    if (typeof formData.title !== 'string') return false;
    if (!(formData.date instanceof firebase.firestore.Timestamp)) return false;
    if (typeof formData.description !== 'string') return false;
    if (typeof formData.location !== 'string') return false;
    return true;
  };
  
module.exports = validateFormData;