/*
  XMath library for supplemental math functions (outside of JS Math class) built for projecteuler questions.
  These are the ones I deemed have both common and useful implementations.
  Usage:
    - Sequence Generators
      - XMath.factorial(n);               // returns the factorial of `n`
      - XMath.eSieve(n);                  // finds primes up to `n` using the sieve of eratosthenes
      - XMath.fibonacci(n);               // finds the `n`th fibonacci sequence term
      - XMath.findCombos(arr [, str]);    // returns all permutations of `arr`'s values, starting with optional string `str`
    - Testers
      - XMath.isPrime(n);                 // checks if a number `n` is prime using trial division
      - XMath.isPalindrome(n);            // checks if a number or string `n` is a palindrome
    - Modifiers
      - XMath.merge(arr1, arr2, mergeBy)  // returns an array of all possibilities of `arr1` and `arr2` values merged together when the last `mergeBy` characters of the `arr1` values equal the first `mergeBy` characters of the `arr2` values
      - XMath.pad(n, pad, length, before) // pads a number or string `n` with `pad` characters. `before` is an optional variable determing whether to prepend ("true", default) or append ("false") 
*/
"use strict"
var XMath = class {
  static factorial(n) {
    if(n == 0) return 1;
    for(var i = n-1, result = n; i > 0; result *= i, i--);
    return result;
  }
  static eSieve(n) {
    for(var i = 2, composites = [1,1]; i <= Math.sqrt(n); i++)
      if(!composites[i])
        for(var j = Math.pow(i, 2); j <= n; j += i)
          composites[j] = 1;
    for(var i = 2, primes = []; i < n; i++)
      if(!composites[i])
        primes.push(i);
    return primes;
  }
  static fibonacci(n) {
    if(n == 0) return 0;
    if(n == 1 || n == 2) return 1;
    for(var last = 1, current = 1, sum = 0, tmp = 0, i = 0; i < n; sum += current % 2 == 0 ? current : 0, tmp = current, current += last, last = tmp, i++);
    return current;
  }
  static findCombos(arr, str) {
    str = str || "";
    if(arr.length == 0)
      return str;
    for(var i = 0, combos = []; i < arr.length; combos = combos.concat(XMath.findCombos(arr.slice(0, i).concat(arr.slice(i+1, arr.length)), str + arr[i])), i++);
    return combos;
  };
  static factor(n) {
    for(var i = 2, factors = [0,0]; i <= n; i++, factors[i-1] = factors[i-1] || 0)
      if(n % i == 0)
        n /= i,
        factors[i---1]++;
    return factors;
  };
  static isPrime(n) {
    if(n == 2) return true;
    if(n % 2 == 0 || n == 1 || n == 0) return false;
    for(var i = 3; i <= Math.sqrt(n); i += 2)
      if(n % i == 0)
        return false;
    return true;
  }
  static isPalindrome(n) {
    for(var i = 0, n = n.toString(); i < n.length/2+1; i++)
      if(n.charAt(i) != n.charAt(n.length-1-i))
        return false;
    return true;
  }
  static pad(n, pad, length, before) {
    for(var i = 0, padding = "", before = before == undefined ? true : before; i < length-n.toString().length; padding += pad, i++);
    return before ? padding + n : n + padding;
  }
  static merge(arr1, arr2, mergeBy) {
    for(var i = 0, result = []; i < arr1.length; i++)
      for(var j = 0; j < arr2.length; arr1[i].substring(arr1[i].length-mergeBy) == arr2[j].substring(0, mergeBy) ? result.push(arr1[i] + arr2[j].substring(mergeBy)) : {}, j++);
    return result;
  }
}
