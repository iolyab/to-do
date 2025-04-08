const priorityOptions = ["High", "Medium", "Low"];

localStorage.setItem("priorityOptions", JSON.stringify(priorityOptions));
  
const getPriorityOptions = () => {

  try {
    const retrievedPriorityOptions = localStorage.getItem("priorityOptions")
  
    if(retrievedPriorityOptions) {
      return JSON.parse(retrievedPriorityOptions)
    }
    return priorityOptions;
  } catch (error) {
    console.log("Error loading retrievedPriotityOptions from localStorage:", error);
    return priorityOptions;
  }
}
  
const retrievedPriorityOptions = getPriorityOptions();
export {retrievedPriorityOptions};



    