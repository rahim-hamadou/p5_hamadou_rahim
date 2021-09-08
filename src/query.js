
export default async function retrieveContent() {
    const url = "http://localhost:3000/api/teddies/";
  
    const response = await fetch(url);
    return response.json();
  }
  