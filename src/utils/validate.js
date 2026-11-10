export const isvalid = (email,password) =>{
  const isEmailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

  if(!isEmailvalid){
    return "Invalid email format!";
  }
  if(!isPasswordValid){
    return "Password not valid!";
  }

  return null;
}