# Test Task 

### Section 1

##### 1) Explain the difference between an abstract class and an interface.

 Abstract class can have abstract (with body) and non-abstract methods. (without body)
 
    abstract class TestAbstract{
       abstract method_1() 	// a method with no implementation
       method_2() { 		// a method with implementation
          // body
       }
    }
Interface can have only method protocol or abstract method and can’t provide the implementation

    Interface testInterface {
        method_1(): void;
        Method_2: string;
    }

##### 2) What is the purpose of getters and setters in a class?

   Getters and Setters are Javascript Accessor and it’s used to get and set the properties of the class.


### Section 2

##### 3) Explain the purpose of black box testing

It’s type of testing where we will focus on to test functionality of the requirements and validations  for that no need to any internal knowledge of application

##### 4) In your opinion what are the benefits of test cases

It's one time investment :) 
Once we will written test case for application. We can run test suite for unmodified application on every new changes for surety of current working flow. 
So it will reduce human efforts for testing. Also it will take less time to test the application in different scenario. 
Thus It’s quick way to test the quality of software



### Section 3

##### 5) What is an error first callback, and what is the reason for this pattern existing?

I think it’s protocol to use first argument as a error. So reason might be to handle the error very easily in every scenarios like async.
We should have to use it for best practice.


##### 6) Explain the difference between fs.readSync and fs.read (File System module in Nodejs)

Both used to ready file but fs.read returns the callback with error and data after completion of reading a file where fs.readSync doesn’t return anything.

##### 7) What tasks do you feel should be done asynchronously?

When we want to perform task in a flow like, after completion of first task, second should execute at that time, it should be done asynchronously.

### Section 4

`npm install`

`node load_contents.js input.json`

### Section 5

`node app.js input.json`