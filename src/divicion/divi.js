function division(n1, n2){
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        
        return NaN;
      }
    
      return n1 / n2;
}

module.exports = division;