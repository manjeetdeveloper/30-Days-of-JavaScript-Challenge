/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {

    //yaha pe agar ham ye logic laga de to 

    if (this.length>0){
        return this[this.length-1];
    }
    
    else{
        return -1;
    }

    // ye lagae se wrong ans ayega but this logic is e\write 
    
   // return this.at(-1) ?? -1;
  
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */