# nValidators

## Description

A newer validation library that allows either function chaining or using an object stack to verify any variable is exactly how you want it to be whether its a string, a string of a certain length, etc.

This is an early version that still needs further updates. I want to make it easy as well to add to any other system and am still incorporating that so I do not consider this to be at the final version.

This should ideally work in both TypeScript and JavaScript. In TypeScript it is properly typed. If you do not send a command properly it will completely crash.

## Installation

To install as a node module for your application run:

`npm i @strbjun/nvalidators`

## How to use:

The basic import allows the following to be imported:

#### chain

``chain(param: any, config?: HandlerConfig)``

The parameter is of course the initial variable to test on. HandlerConfig does have multiple options that can be used such as:
- **or**: this allows for the use of or for verifying any validation instead of the default 'and'.
- **setter**: For any sanitizers, this will be the function ran in order to allow any program to reset the variable. The function is in a ``(param: any): void`` format.
The config is optional.
The produces a function chain option. Where after you can add: .isString().notEmpty(), etc. To finalize the result just add in .done() which will then return a boolean. Or, you can use .result() if you just want the sanitized result of the param.

``stack(param: any, stack: StackProcessor, config?: handlerConfig)``

The config option is the same as the above and is also option. Otherwise this doesn't work with function chaining. The StackProcessor is an important data set to tell it what validators and sanitizers to process.

#### StackProcessor

This is the data type which is passed. The format for this is:

```
[
  ["ProcessName", ...args],
]
```

Basically, it is a stack of arrays in an array. The "ProcessName" is the name of the validator, sanitizer, or an operator. Anything after the name is not mandatory and is only passed if there are any arguments for the command. If there aren't then do not add this.

As with chain, param is just the variable to process.


## Function Types

There are four basic types: validator, sanitizer, operator, and finalizer types.

#### Validator

These will allow for validating the current result so can try to see if it is valid for your program function.

These are the available functions for validating:

*Types*
* **isString** ``()`` returns true if it is a string
* **isNumber** ``()`` returns true if it is a number of a number in a string
* **isBoolean** ``()`` returns true if it is a boolean or a proper boolean result in a string
* **isArray** ``()`` returns true if it is an array
* **isObject** ``()`` returns true if it is an object
* **isObject** ``(className: string)`` returns true if it is the given class name

*Strings*

* **notEmpty** ``()`` returns true if the string is not empty
* **minLength** ``(len: number)`` returns true if the string is more than a minimum length
* **maxLength** ``(len: number)`` returns true if the string is under a maximum length
* **betweenLength** ``(min: number, max:number)`` returns true if the length is between or equal to the min or max length
* **isEmail** ``()`` returns true if it is a valid email
* **isUrl** ``()`` returns true if it is a valid url
* **isUuid** ``()`` returns true if it is a valid uuid
* **isDate** ``()`` returns true if it is a valid date in the string
* **isUSPhoneNumber** ``()`` returns true if it is a valid US or Canada phone number
* **isInternationalPhoneNumber** ``()`` returns true if it is a valid international phone number
* **isPhoneNumber** ``()`` will check if valid as either a US/Canada or International Phone number
* **regex** ``(pattern: string)`` will check validity against a given regex

*Numbers*

* **minNumber** ``(num: number)`` will check if the result is greater than or equal to the num
* **maxNumber** ``(num: number)`` will check if the result is less than or equal to the num

*Other*

* **custom** ``(func: CustomFunction)`` will pass a function to allow for a custom validator. The function should be as: ``(param: any): boolean``.

#### Sanitizer

** Note a future change is that it will only sanitize when the current stack result is currently true, but right now it always processes.

These are for modifying the param variable. The following functions are available:

*Conversion*
* **toString**: ``()`` converts to a string if not one already
* **toNumber**: ``()`` converts to a number
* **toBoolean**: ``()`` converts to a boolean type assuming it has true or false in its value
* **toDate**: ``()`` converts to a proper date object assuming it has a date or timestamp value
* **toJson**: ``()`` converts the result to a json object

*Strings*

* **prefix**: ``()`` will add a prefix to the string
* **suffix**: ``()`` will add a suffix to the string
* **insert**: ``(value: string, index: number)`` will insert a string value at a given index
* **trim**: ``()`` will trim all spaces at the start and end
* **toLowerCase**:  ``()`` will lowercase everything
* **toUpperCase**: ``()`` will capitalize everything
* **toCapitalize**: ``()`` will capitalize the first letter in the string
* **toCapitalizeWords**: ``()`` will capitalize the first letter of every word
* **toSlug**: ``()`` will change to a slug case
* **toSnakeCase**: ``()`` will change to a snake case
* **toCamelCase**: ``()`` will change to a camel case
* **replace**: ``(searchValue: string|string[], replaceValue: string)`` will search for the string or list of strings and replace it with the given value
* **escape**: ``()`` will escape all html
* **blacklist**: ``(blacklist: string[])`` will remove the list of words

*Numbers*

* **add** ``(num: number)`` will add the number to the current value
* **subtract** ``(num: number)`` will subtract the number from the current value
* **multiply** ``(num: number)`` will multiple the number with the current value
* **divide** ``(num: number)`` will divide the number to the current value
* **round** ``()`` will round the number to the first digit
* **ceil** ``()`` will return the smallest integer greater than or equal to the current value
* **floor** ``()`` will return the greatest integer less than or equal to the current value
* **abs** ``()`` will return the absolute positive version of the number and if negative will drop the negative symbol.
* **pow** ``(num: number)`` will return the value to the power of the given num
* **sqrt** ``()`` will return the square root
* **root** ``(num: number)`` will return the root of the value to the given num
* **toFixed** ``(digits: number)`` will round to the given number of digits
* **toMoney** ``(currencyPrefix: string = "$ ", currencySuffix: string = "", thousandsSep: string = ",", decimalSep: string = ".", decimalDigits: number = 2)`` will convert the value to a money value as a string. The variables don't have to be passed, but there are defaults based on the above.
* **toPercentage**: ``(decimalDigits: number)`` will return as a percentage string and will round to a given number of decimals. Default value is 2 for if not passed.

*Other*

* **customSanitizer** ``(func: SanitizeFunction)`` this allows for a custom function to be passed to sanitize the param result. Basically the function is as: ``(param: any): any``

#### Operator

These are for handling the stack of booleans that result from the validator. In general the validator leaves the last 2 boolean results on and will apply any default and or / or as needed on them. But there are other operators that you can use such as:

* **not**: this will turn the last false into a true.
* **or** this will use the last two results. If the last one was true then it will change both into true. If in 'or' mode as default, then the last one could be true and the one previous to it could be false... this will still then result in a true.
* **and**: by default every return is processed with an and, but this can be useful in OR mode. If in that mode then it'll see if both are true and if not it'll return a false to the stack.

#### Finalizer

This will just complete the chain and it will only work on chain functions and not stack. When stacks are done it will only return a boolean.

The commands are:

* **done**: finishes it, and returns the final boolean result
* **result**: finishes it, and returns the resulting param after all sanitizers.

## Enhancement

There is the option to add validators, operators, and sanitizers while including this. There are the "add" and "del" options you can include from this module. If you do this, then you can add more options. I'll add more documentation for this in the future.

## Future

* To enhance the documentation for adding more validator/operator/sanitizer options
* Make it so that sanitizers only run if the last option returned true (allow to be changed to have always run in config)
* Allow for ease of incorporation of sub functionality to other areas such as FormData, Express body/params, etc. I will likely make libraries for each as well in the future.