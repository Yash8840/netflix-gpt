export const isvalid = (email,password, name) =>{
  const isEmailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  const isNameValid = /^[a-zA-Z\s]{2,}$/.test(name);

  if(!isEmailvalid){
    return "Invalid email format!";
  }
  if(!isPasswordValid){
    return "Password not valid!";
  }
  if(!isNameValid){
    return "Invalid name format!";
  }

  return null;
}