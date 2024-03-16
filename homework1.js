let result1 = 'number' + 3 + 3;
console.log(result1); //result "number33"
/* Because we have diffent type of operators str and number 
we will concatinate all operators together.
1. "number" and 3 was converted  and we recieved  string "number3"
2. "number3" and 3 was converted and we recieved string "number33"
*/

let result2 = null + 3;
console.log(result2); //result 3
/* Because we have number the next operator will be converted to number too
1. null converted to 0;
2. 0 + 3 is 3
*/

let result3 = 5 && 'qwerty';
console.log(result3); //result "qwerty"
/* Because we have both truthy operatots 
 it returns last truthy operatots  "qwerty"
*/

let result4 = +'40' + +'2' + 'hillel';
console.log(result4); //result "42hillel"
/* We have 2 Unary Pluses they convert string in number 
 1. +'40' will be converted in from string in number '40'
 2.  +'2' will be converted in from string in number '2'
 3. 40 + 2 is 42 becouse they numbers now and we make mathematic adding 
 4. 42 + 'hillel' will be concatinate because thay are number and string 
*/

let result5 = '10' - 5 === 6;
console.log(result5); //result false
/* 
 1. '10' - 5 is 5;('10' will be converted to number and we make mathematic adding )
 2. 5 === 6 will be compered because we have strict equal and will renurn false 
 because they are not same
*/

let result6 = true + false;
console.log(result6); //result 1
/* Becouse we have mathematik + and boolen values, boolen will converted in number  
 1. true becomes 1
 2. false becomes 0
 3. 1 + 0 is 1 and we make mathematic adding becouse now we have numbers 
*/

let result7 = '4px' - 3;
console.log(result7); //result NaN??
/* In this case I an not sure but I suppose that "4px" couldn't be converted to number and 
we recieve NaN 
Becuse we could do nothing with NaN - 3 we have NaN too??
*/

let result8 = '4' - 3;
console.log(result8); //result 1
/* Becouse we have mathematik + and '4' and string will converted in number  
 1. 4 - 3 is 1
*/

let result9 = '6' + 3 ** 0;
console.log(result9); //result "61"
/* 
1. 3 ** 0 is 1 this exprethin will be done first besause of mathematic rules 
2. '6' + 1 will be string of "61" because "6" is string and we make concantination 
*/

let result10 = 12 / '6';
console.log(result10); //result 2
/* In this case we need to make mathematic division and need at first to conver steing to number 
1. '6' will be converted to 6
2. 12 / 6 = 2 
*/

let result11 = '10' + (5 === 6);
console.log(result11); //result "10false"
/* First we need to make comparison due to mathematic rules
1. (5 === 6) since 5 is not equal 6 we recieve false
2. Because we have "10" as string, for concatination 
we need convert false to "false " to string 
3. "10" + "false" became "10false"
*/

let result12 = null == '';
console.log(result12); //result false
/* It could be faulse but I am not sure 
Because to have true we need null == null
 and in case we don't have null it will be false 
*/

let result13 = 3 ** (9 / 3);
console.log(result13); //result 27
/*  
1. (9 / 3) is 3 need to be done first due to to 
mathematic rules expression inside the parentheses
2. 3 ** 3 is 27 
 */

let result14 = !!'false' == !!'true';
console.log(result14); //result false
/* !! conwerted every element in boolen 
 1. !!'false' by first ! became false and by second ! to ture
2. !!'true' by first ! became true and by second ! to false 
3. by comparison true == false we recieve false 
 */

//let result15 = 0 || '0' && 1;
console.log(result15); //result 1
/* 
1. '0' && 1 is 1 because  we return  truthy operator  
2. 0 || 1 is 1 because it  truthy operato
 */

let result16 = (+null == false) < 1;
console.log(result16); //result false
/* 
1. (+null == false) is true because Unary Pluses convert null in  number 
+null becames 0  and 0 == false in comperison will be true 
2. true < 1 is false 
we convert true in number and it is 1 
1 < 1 is false 
 */

//let result17 = false && true || true;
//console.log(result17); //result true
/* 
1. false && true we recieve false 
2 false || true we recieve true 
 */

let result18 = false && (false || true);
console.log(result18); //result true
/* 
1. false || true we recieve true I did it first because it was in parentheses
2. false && true we recieve false
 */

let result19 = (+null == false) < 1 ** 5;
console.log(result19); //result false
/* +null becamed 0 because of Unary Pluses 
1. (+null == false) we recieve true 
 I did it first because it was in parentheses
2. 1 ** 5 is 1
3. true < 1 is false because true was converted in 1 
 */
