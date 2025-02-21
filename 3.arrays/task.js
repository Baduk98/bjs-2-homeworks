function compareArrays(arr1, arr2) { 
  
    if (arr1.length !== arr2.length) { 
      return false; 
    } 
    
    return arr1.every((element, index) => element === arr2[index]); 
  }
  

  function getUsersNamesInAgeRange(users, gender) {

    const filteredGender = users.filter((user) => user.gender === gender);
    if (filteredGender.length === 0) {
        return 0;
    }

    const ageSum = filteredGender.reduce((sum, user) => sum + user.age, 0);
    return ageSum / filteredGender.length;
}