function decimalToBinary(num) {
  //Write you code here
	if (num === 0) {
    return '0';
  }

  let binary = '';

  while (num > 0) {
    // Get the remainder when dividing by 2
    let remainder = num % 2;

    // Prepend the remainder to the binary string
    binary = remainder + binary;

    // Update the number by dividing it by 2
    num = Math.floor(num / 2);
  }
  
}

window.decimalToBinary = decimalToBinary;
