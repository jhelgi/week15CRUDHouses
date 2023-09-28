const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";
// this class defines all the CRUD operations 
class HousesApi {
  
  get = async () => {
    try {
      const resp = await fetch(HOUSES_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Error occurred in HousesApi get method.", e);
    }
  };
  
  put = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
      
    } catch (e) {
      console.log("Error occurred in HousesApi put method.", e);
    }
  };
  
  post = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
      
    } catch (e) {
      console.log("Error occurred in HousesApi post method.", e);
    }
  }; 
  
  delete = async (id) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
      return await resp.json();
      
    } catch (e) {
      console.log("Error occurred in HousesApi delete method.", e);
    }
  };

}

export const housesApi = new HousesApi();
