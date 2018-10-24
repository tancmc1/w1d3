# DAY THREE LECTURE NOTES

## Morning Lecture : **Objects in JS** *by Roy Bao*

```javascript
function add(a, b) {
  return console.log(a + b);
}
```
returning console.log would result in _undefined_
*literals:
  1. strings
  2. numbers

* Simple values (aka primitives)
  * are immutable
* Containers (i.e. arrays)
  * are mutable
  *expressions can contain any number of literals, variables, operators and smaller expressions*
* Assigning new values to variables pointing to elements of an array changes that value, but assigning new values to a variable creates a new array

* Review on scope
  * inner scope can see outer scope but outer scope cannot see inner scope
    * after inner scope runs, the data is "thrown out"

* **OBJECTS**
  * Collection of key/value pairs (Hash, Dictionary)
  * Can be accessed two ways:
    * A dot notation (if you know what your looking for, can only be a literal inside the object)
    * Square brackets (can contain expressions)
  * Keys are treated as strings while values can be anything
## Breakout Session :