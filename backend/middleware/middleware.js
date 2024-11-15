// middleware.js

// Define the card model structure
export const cardModel = {
    type: '',          // Type of card (e.g., 'Food', 'Health')
    amount: 0,         // Amount related to the card (should be a positive number)
    description: '',   // Description of the card (e.g., details about the expense)
    createdAt: null,   // Timestamp when the card is created (will be added server-side)
  };
  
  // Middleware to validate card data
  export const validateCardData = (cardData) => {
    // Check if the input matches the card model structure
    const modelKeys = Object.keys(cardModel); // Get the keys from the cardModel
    const dataKeys = Object.keys(cardData); // Get the keys from the incoming cardData
    
    // Check if there are extra fields in cardData that don't match cardModel
    const extraKeys = dataKeys.filter(key => !modelKeys.includes(key));
    if (extraKeys.length > 0) {
      throw new Error(`Unexpected fields: ${extraKeys.join(', ')}`);
    }
  
    // Ensure all fields in the model are present
    const missingKeys = modelKeys.filter(key => !dataKeys.includes(key));
    if (missingKeys.length > 0) {
      throw new Error(`Missing required fields: ${missingKeys.join(', ')}`);
    }
  
    // Perform further checks (e.g., amount should be a positive number)
    if (cardData.amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }
  
    // Additional checks for other fields can be added here if needed
    if (typeof cardData.description !== 'string' || cardData.description.trim() === '') {
      throw new Error('Description must be a non-empty string');
    }
  
    // If all checks pass, return true
    return true;
  };
  

// const checkUser = (req,res,next) => {
//     const user = res.localStorage.getItem("user");
//     const id = user.sub;
//     if(!id){
//         res
//         .status(401)
//         .send({ error: "Please authenticate user using valid token."});
//     }
// };

// module.exports = checkUser;