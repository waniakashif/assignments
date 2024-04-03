//Assignment 1
//Install Node.js Typescript and VSCode on your computer.
//installation completed
//Assignment 2
//Personal Message store a person's name in a varible and print a message to that person . Your message should be simle such as 'hello eric would you like to learn some python today?'
//let personName: string = "Eric";
//console.log(`Hello ${personName} would you like to learn python today?`);
//Assignment 3
//Name cases: store a person's name in a varible and then print that person's name in lowercase uppercase titlecase.
//let personName: string = "Wania kashif"
// in lowercase
//console.log("lowercase:",personName.toLowerCase());
//in uppercase
//console.log("uppercase:",personName.toUpperCase());
//in titlecase
//console.log("titlecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()));
//Assignment 4
//Famous Quote find a quote from a fomous person you admire print the quote and the name of it author your should look something like the following including the quotation marks
//Albert Einstein once said 'A person who never made a mistake never tried anything new
// let quote : string ="A person who never made a mistake never tried anything new.";
// let author : string = "Albert Einstein";
// console.log(`${author} once said , "${quote}"`);
//Assignment 5
//Famous Quote 2 Repeact Excercise 4 but this time store the famous person's name in varible called famous person them compose your message and store it in a new varible called message print your message
//let famous_person : string = "Albert Einstein";
//let quote : string = "A person who never made a mistake never tried anything new.";
//let message : string = `${famous_person} once said,"${quote}"`;
//console.log(message);
//Assignment 6
//Stripping Names : store a person's name and include some whitespace characters at the beginning and end of the name .make sure your use each character combination '\t' and \n' at least once so yhe whitespace around the name is displayed then print the name after stripping the white space.
//let personName: string = "\t\n  Wania Kashif ";
//console.log("Orginal:", personName);
//console.log("Stripped:", personName.trim());
//Assignment 7
//Number Eight write addition subtraction multipication and divison operation that each result in the number eight be sure to enclose your operation in print statement to see the result
//console.log(5+3);
//console.log(10-2);
//console.log(4*2);
//console.log(16/2);
//Assignment 8
//You should create four lines that look like this
//console.log(5+3);
//Your output should be simply be four lines with the number 8 appearing once or each line
//Assignment 9
//Favorite Number store your favorite number in a varible then using that varible create a message that reveal your favorite number print that message
//let favoriteNumber : number = 4
//console.log(`My favorite number is ${favoriteNumber}.`);
//Assignment 10
//Adding comments choose two of the program you,ve written and add at least one comment to each  if you don,t have anything specific to write because your program are too simple at this point just add your name and the current date at the top of each program file then write one sentence describing what the program does
//author:[Wania Kashif]
//date :[Thursday ,March 28, 2024]
//task 9 print my favorite number
//let favoriteNumber = 4
//revelling my favorite number in a message formate
//console.log(`My favorite number is ${favoriteNumber}.`);
//Assignment 11
//Name store the name of a few of your friend in a array called names print each person name by acessing each element in the list one at time.
//let names :string[] =["Wania","Kainat","Shazia","Haniya"];
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);
//Assignment 12
//Greeting with the array you used in exercise 11 but instead of just printing each person's name print a message to them the text of each message should be the same but each message should be personalized witrh the person's name.
//let names : string[] = ["Wania","Kainat","Shazia","Haniya"];
//let message : string = "Do you like cooking?"
//console.log(names[0] + " "+ message )
//console.log(names[1] + " "+ message )
//console.log(names[2] + " "+ message )
//console.log(names[3] + " "+ message )
//Assignment 13
//Your own array think of your favorite mode of transporation such as motorcycle or a car and make a list that store several example use your list to print a series of statement about these item sush as 'I would like to own a honda motorcycle.'
//let transpotation : string [] = ["Honda Motorcycle","Audi","Honda City"];
//transpotation.map((items) => console.log(`I would like to own a ${items}`));
//Assignment 14
//Guest list if you could invite anyone living or deceased to dinner who would you invite ? make a list that include at least three people you'd like to invite to dinner then use your list to print a message to each person inviting them to dinner.
//let guestArr :string[] =["Wania","Kainat","Shazia"];
//guestArr.map((items) => (console.log(`Dear ${items} , You are invited to yhe dinner`)));
//Assignment 15
//Changing guest list you just heard that one of your guests can't make the dinner so you need to send out a new set of invitation you'll have to think of someone else to invite
//let guestArr : string[] = ["Wania","Kainat","Shazia","Haniya"];
//let canNotAttend : string = "Wania"
//console.log(canNotAttend + " " " can not attend the dinner.")
//part 1
//Start wiyh your program from excercise 14 add a print statement at the end of program stating the name of guest who can't make it
//part 2
//Modify your list replacing the name of guest who can't make it with the name of new person you are inviting.
//let newGuest : string = "Alishba"
//guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
//part 3
//Print a second set of invitation messages ones for each person who is still in your list.
//guestArr.map((items) =>
//console.log(`Dear ${items}, you are invited to the dinner.`)
//)
//Assignment 16
//More guest you found a bigger dinner table so now more space is avalaible think of three more guests to invite to dinner.
//part 1
//Start with your program from excercise 15  add a print statement to the end of your program informing people that you found a bigger dinner table
//let guestArr : string[] = ["Alishba","Kainat","Shazia","Haniya"];
//let canNotAttend :string = "Shazia"
//let newGuest : string ="Wania"
//guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
//guestArr.map((items)=>
//console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people.`)
//);
//part 2
//Add one new guest to the beginning of your array.
//let guestBeg : string = "Urooj"
//guestArr.unshift(guestBeg);
//console.log(guestArr);
//part 3
//Add one new guest to the middle of your array.
//let middleGuest :string = "Fatima"
//let middleIndex = guestArr.length/3
//guestArr.splice(middleIndex,0,middleGuest)
//console.log(guestArr)
//part 4
//Use uppend() to add one new guest to the end of your list.
//guestArr.push("Fabiha")
//console.log(guestArr)
//part 5
//print a new set of invitation messages one for each person in your list.
//guestArr.map((items) =>
//console.log(`Dear ${items}, you are invited in the more people list  on dinner`)
//);
//Assignment 17
//Initial lists of guest
//let guests : string[] = ["Ali","Bilal","Carry","Dawood","Hamza"];
//Informing that only two people can be invited
//console.log("Due to limited space,only to people can be invited for dinner.");
//Removing guests until only two names remain
//while (guests.length > 2) {
// const removedGuest = guests.pop(); //Remove the last guest from the list
//console.log(`Sorry,${removedGuest}, you're no longer invited to dinner.`);
//}
//printing invitation to the remaining two guests
//let guests : string[] = ["Ali","Bilal"];
//guests.forEach((guests) =>{
//   console.log(`Dear ${guests}, you're still invited to dinner.`);
//});
//Removing the last two names from the list
//guests.pop();
//guests.pop();
//printing the final list to confirm it's empty
//console.log("Final guest list:",guests);
//Assignment 18
//Store the location in an array
//let placesToVisit: string[] =["Tokyo","Pakistan","America","China","Japan"];
//print the array in its original order
//console.log("Orignal order;",placesToVisit);
//print the array in alphabetical order without modifying the actual list
//console.log("Alphabetical order:",[...placesToVisit].sort());
//Show that the array is still in its orginal order
//console.log("Orginal order after sorting:",placesToVisit);
//print the array in reverse alphabetical order without changing the order of the orginal list
//console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse() );
//Show that the array is still in its orginal order
//console.log("Orginal order after reverse sorting :",placesToVisit);
//Reverse the order of the list
//placesToVisit.reverse();
//console.log("Reversed order :",placesToVisit);
//Reverse the order of the list again to get back to the orginal order
//placesToVisit.reverse();
//console.log("Back to orginal order :",placesToVisit);
//Sort the array in alphabetical order
//placesToVisit.sort();
//console.log("Sorted in alphabetical order:",placesToVisit);
//sort the array in reverse alphabetical order
//placesToVisit.sort((a,b) => b.localeCompare(a));
//console.log("Sorted in reverse alphabetical order:",placesToVisit);
//Assignment 19
//Dinner guest working with one of the program from excercise 14 through 18 print a message indicating the number of people you are inviting to dinner
//let invitation : string[] = ["Ali","Bilal"]
//let count_invitation :number =invitation.length
//console.log(`${count_invitation} people will come to the dinner`)
//Assignment 20
//Think of something you could store in a array for example, you could make a list of mountain,river,countries,cities languages or anything else you'd like write a program that creates a list containing these items.
//let country : string[]= ["Pakistan","India","Newyork","Japan","China"]
//console.log("list of country:");
//console.log(country);
//Assignment 21
//Think of somethingyou could store in a typescript object . Write a program that create object containing these items.
//let person: {name:string, fname:string ,age: number} ={name:"Wania", fname:"female",age:17};
//console.log(person)
//Assignment 22
//Intentional Error if you haven't recived an array index error in one of your program yet , try to make one happen change an index in one of your program produce an index error make sure your correct the error before closing the program
//const days :string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturaday","Sunday"]
//console.log(days{7})
//console.log(days[6])
//Assignment 23
//Condional tests write a series of condional tests print a statement describing each test and your prediction for the result of each test .Your code should look somthing like this
//let car ='subaru';
//console.log("is car == 'subaru'?predict true")
//console.log(car == 'subaru')
//console.log("is car != 'honda city'? predict true")
//console.log(car != 'honda city')
//console.log("is car =='Subaru'? predict false")
//console.log(car =='Subaru')
//console.log("is car =='SUBARU'? predict false")
//console.log(car == 'SUBARU')
//console.log("is car.length ==3? predict false")
//console.log(car.length ==3)
//console.log("is car.length ==10? predict true")
//console.log(car.length != 10)
//console.log("is 10 > 45 ? predict false")
//console.log(10>45)
//console.log("is 3 <= 2 ? predict false")
//console.log(3 <= 2)
//console.log("is 72 >= 63 ? predict false")
//console.log(72 >= 63)
//console.log("is 72 >= 63 ? predict false")
//console.log(72 >= 83)
//console.log("is car 'subaru' && car.length == 6? predict true ")
//console.log(car == 'subaru' && car.length == 6)
//Assignment 24
// More Condional tests you don't have to limmit the number of test you create to 10 if you want to try more camparision write more tests have at least once true and one false result for each of the following
//part 1
// Tests for equality and inequality with string.
//let name_1 : string ="Wania"
//let name_2 : string ="Wania Kashif"
//let name_3 : string =" Miss Wania Kashif"
//if (name_1 == name_3){
//  console.log("names are equal")
//}else{
//  console.log("names are not equal")
//}
//if (name_1 != name_2){
//} else{
//   console.log("names are  equal")
//}
//part 2
//Tests using the lower case function.
//  if (name_1 != name_2){
//console.log("names are equal")
//}
//part 3
//Numerical tests involving equality and inequality .greater than and less than greater than or equal to and less than or equal to.
//let age_1 :number =17
//let age_2 :number = 18
//if ( age_1 == 17){
//  console.log("eligible for vote")
//}
//if ( age_1 != 18){
// console.log("eligible for vote in older category")
//}
//if (age_1 <= age_2){ //less than
//  console.log("younger")
//}
//if (age_2 >= age_1){ //greater
//  console.log("older")
//}
//part 4
// Tests using 'and' 'or' operators.
//if (age_1 == 17 && age_2 == 18){
//  console.log("person is eligible for vote")
//}
//if (age_1 == 17 || age_2 != 18){
//   console.log("person is eligible not for vote")
//}
//part 5
// Tests  whether an items in an array
//let country : string[]= ["Pakistan","India","Japan","China"]
//if (country.indexOf("pakistan")){
//  console.log("pakistan is in country list")
//}
//part6
//Test whether an items is not in a array
//if(country.indexOf ("america")){
//  console.log("america is not include in an array")
//}
//Assignment 25
//Alien color #1 imagine an aline was does shotdown in a game create a varible called alien_color and assign it a value of green yellow or red.
//part 1
//Write an if statement to test wheather the alien's coloris green if its print a message that the player just earned 5 point
//let alien_color: string ="green"
//if (alien_color == "green")
//console.log("you earn 5 points")
//write one version of this program that pases the if test and anothorthat fail the version that fail will have not output
//let alien_color:string = "red"
//if(alien_color ==  "red")
//console.log("no output")
//Assignment 26
//Alien color 2 choose a color for an alien as you did in excercise 25 and write an if -else chain
//part 1
//If the alien color is green print a statement  that the player just earned5 point for shooting the alien.
//let alien_color = "green"
//if ( alien_color == "green"){
// console.log("player just earnet 5 point for shooting the alien")
//If the alien color isn't green print a statement that the player just earned 10 point
//} else{
//console.log("player just earned 10 point")
//}
//Write one version of this program that run the if block and another that runs the else block
//let alien_color = "green"
//if ( alien_color == "green"){
//console.log("player just earnet 5 point for shooting the alien")
//} else{
//console.log("player just earned 10 point")
//}
//Assignment 27
//Alein color #3 turn your if -else chain from excercise 25 and 26 into an if -else chain.
//part1
//If the alien is green print a message that the player earned 5 point.
//let alien_color: string = "red"
//if (alien_color == "green"){
//console.log("player just earned 5 point for shooting the alien")
//part 2
// If the alien is yellow print a message that the player earned 10 points.
//}else if(alien_color =="yellow") {
//console.log("player just earned 10 points for shooting alien")}
//part 3
//If the alien is red print a message that the player earned 15 points
//else{
//console.log("player just earned 15 points for shooting alien")
//}
//Assignment 28
//Stages of life Write an if else chain that determines a person's stage of life set a value for the varible age and then.
//If the person less than 2 years old print a message that the person is a baby.
//If the person is at least 2 year old but less than 4 print a message that the person is a tolddler.
//If the person it at least 4 years old but less than 13 print a message that a person is a kid
//If the person is at least 13 years old but less than 20 print a message that a person is a teenager.
//If the person is at least 20 years old but less than 65 print a message that the person is an adult.
//If the person is age 65 or older .print a message that the person is an elder.
//let age : number = 100
//if (age < 2){
//console.log("you are a baby")
//} else if(age < 4){
//console.log("You are toddler")
//}else if("age < 13"){
//console.log("You are kid")
//}else if("age < 20"){
//console.log("You are teenager")
//}else if("age < 65"){
//console.log("You are adult")
//}else{
//console.log("You are older")
//}
//Assignment 29
//Favorite fruite make a array of your favorite fruits and then write a series of independent if statement that check for certain fruite in your array.
//Make a array of your three favorite fruits and call it favorite_fruite.
//Write five if statement each should check whether a certain kind of fruits is in your array if the fruits in your array the if block should a print a statement such as you really like bananas.
//let favorite_fruits : string [] =["Kivi","orange","apple","berry","peach"]
//if (favorite_fruits.indexOf("kivi")){
// console.log("kivi")
//}
//if (favorite_fruits.indexOf("apple")){
//console.log("apple")
//}
//if (favorite_fruits.indexOf("orange")){
//console.log("orange")
//}
//if (favorite_fruits.indexOf("berry")){
//console.log("You really like bananas")
//}
//if (favorite_fruits.indexOf("peach")){
// console.log("You really like bananas")
//}
//Assignment 30
//Hello admin make a array of five or more username including the name admine imagine you are writting code that with print a greeting to each user after they log into a website loop through the array and print a greeting to each user.
//If the user name is admine print a special greeting such as hello admine  would you like to see a status report.
//Otherwise print a genertic greeting such as hello eric thankyou for looging in again.
//let users : string[] =["admin","eric","wania","kainat","shazia"]
//for(let user of users ){
//if (user === "admin"){
//console.log("Hello admin, would you like to see a status report?")
//}else{
//console.log(` Hello ${user},thankyou for logging in again`)
//}
//Assignment 31
//No users add an if test to excercise 28 to make sure the list of user is not empty.
//if the list is empty print the message we need to find some users.
//Remove all of user names from your array and make sure the correct message is printed.
//let users: string[] =["admin","eric","wania","kainat","shazia"]
//if  (users.length ===0) {
//console.log("We need to find some users!")
//}else {
// for(let user of users){
// if (user === "admin"){
// console.log("Hello admin,would you like to see a status report")
//}else{
//console.log(`Hello ${user}, thankyou for looging in again`)
//}
//}
//}
//users =[]
//if (users.length ===0){
//console.log("We need to find some users!")
//}
//Assignment 32
//Cheaking usernames Do the following to create a program that simulates how websities ensure that everyone has a unique username .
//Make a list of five or more username called current_user.
//Make another list of five user names called new_user make sure one or two of the new user names are also in the current_user list.
//Loop through the new _user list to see if if each new username has already been used If it has , print a message that a person will need to entre a new messge  saying that a username is avalaible.
//let current_users : string [] = ["Wania","kainat","Shazia","Hania","Fatima"]
//let new_users : string [] = ["Admin","Noor","Aliza","Wania","Kainat"]
//let current_user_lower : string [] = current_users.map(user => user.toLowerCase())
//for(let new_user of new_users){
//if ('currrent_users_lower'.indexOf(new_user.toLowerCase())){
//console.log(`Sorry ${new_user}, that name is taken`)
//}else {
//console.log(`Yes ${new_user}, is still in available list`)
//}
//}
//Assignment 33
//Ordinal number : ordinal numbers  indicates their position in a array such a list or 2nd most ordinal numbers end in the except 1,2 and 3.
//Store the number 1 through 9 in a array.
//Loop through the array Use an if else chain inside the loop to print the proper ordinal ending for each number your output should read list 2nd 3rd 4th 5th 6th 7th 8th 9th , and each result should be on a seperate line.
//let numbers : number [] = [1,2,3,4,5,6,7,8,9]
//for (let number of numbers) {
//if (number === 1) {
//console.log(`${number}st`)
//} else  if (number === 2) {
//console.log(`${number}nd`)
//}   else  if (number === 3) {
//console.log(`${number}rd`)
//} else {
//console.log(`${number}th`)
//}
//}
//Assignment 34
//Pizzas think of at least three kind of your favorite pizza names in a array and then use a foor loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead for printing just the name of the pizza for each pizza you should have one line of output containing asimple statement like I like pepperonal pizza.
//Add a line at the end of your program outside the foor loop that states how much you like pizza the output should consist of three or more lines about the kind of pizza you like and then as addional sentence such as I really love pizza!.
//let favorite_pizza : string [] = ["Pepperonal","Chicken","Veg"]
//for (let pizza of favorite_pizza){
//console.log(pizza)
//}
//console.log("\n")
//for (let pizza of favorite_pizza){
//console.log(`I really like ${pizza}pizza!`)
//}
//console.log("nI really love pizza!")
//Assignment 35
//Animals think of at least three different animal that have a common characteristic store the name of these animal in a listand then use a for loop to print out the name of each animal
//Modify your program to print a statement about each animal such as a dog would made a greate pet.
//Add a line at the end of your program stating what yhese animal have in common you could print a sentence such a any of these animal would make a great pet.
//let animals : string [] = ["Cat","Lion","Dog"]
//for (let animal of animals){
//console.log(animal)
//}
//console.log("\n")
//for (let animal of animals){
//console.log(` A ${animal} has a tail`)
//}
//console.log("\n all of these are great pets! but i love cats more")
//Assignment 36
//T shirt write a function called make_shirt () that accept a slize and the text of a message that should be printed on the shirt.
//the function should print a sentence summarizing the size of the shirt and the message printed on it call the function.
//function makeShirt(size: string, text :string): void {
// console.log(`\n you order a ${size} shirt that says ${text}`)
//}
//makeShirt('large' ,'"i love typescript"')
//makeShirt('medium','"i need a big shirt "')
//Assignment 37
//Large shirt Modify the make_shirt () function so that shirt are large by difficult with a message that read I love typescript.
//make a large shirt and a medium shirt with a default message and a shirt of any size with a different mesage.
//function makeShirt(size: string = 'large',text:string = 'I love typescript'): void{
// console.log(`you have order a ${size}, shirt that says ${text}`)
//}
//makeShirt();
//makeShirt('medium')
//makeShirt('small,I need a big shirt to wear')
//Assignment 38
//Cities write a function called described _city () that accept the name of the city and its country  the function should print a simple sentence such as karachi is in pakistan give the parimeter for the country a default value call your function for three different cities at least one of which is not in the default country.
//function describe_city(city: string ,country: string = 'Pakistan'): void{
//console.log(`${city} is in ${country}`)
//}
//describe_city('Karachi')
//describe_city('France','Europe')
//describe_city('lahore', 'punjab')
//Assignment 39
//Cities names write a function called city_country() that takes in the name of a city and its country . The function should return a string formed like this
//Lohore, Pakistan
//Call your function with at least three city_country pairs and print the value that returned
//function cityCountry(city: string, country: string): string  {
//return `${city}, ${country}`
//}
//let c1 = cityCountry('Lahore','Pakistan')
//let c2 = cityCountry('Tokyo','Japan')
//let c3 = cityCountry('Paris','France')
//console.log(c1)
//console.log(c2)
//console.log(c3)
//Assignment 40
//Album write a function called make_album() that builds a object describing a music album  the function should take in artist name an album tittle and it should return object containing these two place informing use the function to make three dictionaries representing different album print each return value to show that object are sorting the album informing correctly add a optional parameter to make album () that allows you to store the number of tracks on an album if the calling line includes a value for the number of tracks and that value to the album object make at least one more function call that includes the number of tracks on an album.
//function makeAlbum (artist: string, title: string): { artist: string; title: string} {
//const dictionaries = {
//artist: artist.charAt(0).toUpperCase() +artist.slice(1),
//title: title.charAt(0).toUpperCase() +title.slice(1)
//};
//return dictionaries;
//}
//let album = makeAlbum("Wania","light")
//console.log(album)
//album = makeAlbum("Kainat","red wave")
//console.log(album)
//album = makeAlbum("hamza","seenbranze")
//console.log(album)
//Assignment 41
//Magicicans make a array of magician's name pass the array to a function called show_magicians() which print the name of each magician in the array
//function show_magicians(magicians: string[]): void {
//for (const magician of magicians) {
//console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//}
//}
//const magician: string[] = ["Wania", "Kainat", "Shazia"];
//show_magicians(magician);
//Assignment 42
//Great magician start with a copy of your program from excercise 39 write a function called make_great() that modifies the array of magician by adding the phease the great to each magician name  call show_magician () to see that a list has actually been modifified
//let magicianNames = ["Wania","Kainat","shazia"];
//function show_magicians(greet: string){
//for(let item of magicianNames){
//console.log(greet, item);
//}
//};
//show_magicians("How are you.");
//show_magicians("Hello")
//Assignment 43
//Unchanged magician start with your work from excercise 40 call the function make_great () with a copy of a array of magician names because the orginal array will be unchanged  return the name array an store an in seperate array call show_magician () with each array to show that you have one array of the orginal names an one array with the great added to each magician names
//let magicianNames2 = ["WaniA","kainat","Shazia"];
//let magicianNamesCopy = [...magicianNames2];
//function show_magicians(greet:string){
//let withGreeting =""
//for (let item of magicianNamesCopy){
//  withGreeting += `${greet} ${item}\n`;
//}
//return  withGreeting;
//};
//let myGreetings  = show_magicians("Hello");
//let makeArray  = myGreetings.split('\n');
//console.log(makeArray);
//console.log(magicianNames2)
//Assignment 44
//Sandwishes write a function that accept an array of item a person want on a sand wish that function should have one parameter that collect as many items as the function call provides and it should print a summary of the sand wish that is being ordered call the funtion three time using a different number of argument each time
//function sandwish(...items: string[]): void{
//console.log("Sandwish order:")
//for (let i = 0; i < items.length; i++){
//console.log(`- ${items[i]}`)
//}
//}
//console.log("enjoy your sandwish wania kashif")
//sandwish('capsicum' , 'tomato' ,'chicken')
//sandwish('beef' , 'cheese')
//sandwish('garlic chicken' , 'mayo sauce')
//Assignment 45
//Cars write a function that stores information about a car in a object the function should always recive a manufacture and a model name  it should then accept an arbitray number of keyboard  argument call the function with the reqriued information and two other name value pair such as a color or an optional feature print the object thats return to make sure all the information  was  stored correctly
//type car = {
//manufacture: string
//model: string
//[key: string]: any;
//}
//function createCar(manufacture: string, model: string, optional: Record<string, any>): car{
//return{
//manufacture,
//model,
//...optional
//}
//}
//const mycar: car = createCar("toyota","corolla", { color: 'silver' , year: "2024"})
//console.log(mycar)
