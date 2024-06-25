export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true){
      resolve("successful")
    }else{
      reject("failed")
    }
  })
}