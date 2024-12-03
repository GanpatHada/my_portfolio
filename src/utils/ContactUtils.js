import validator from "validator";

const initialMessage=
    {
        clientName:'',
        clientEmail:'',
        clientNumber:'',
        clientMessageText:'',
      }



function checkEmptyFields(message) {
  const { clientName, clientEmail, clientMessageText } = message;
  if (
    clientName.trim().length === 0 ||
    clientEmail.trim().length === 0 ||
    clientMessageText.trim().length === 0
  )
    return true;
  return false;
}
function checkValidEmail(clientEmail) {
  if (validator.isEmail(clientEmail.trim())) return true;
  return false;
}

export { checkEmptyFields, checkValidEmail,initialMessage };
