function strangeMath(n, k){

    const arr = [...Array(n+1).keys()].slice(1);
    
    const lex = arr.sort();
    
    return lex.indexOf(k) +1;
    
    }