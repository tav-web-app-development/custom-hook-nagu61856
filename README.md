# Clock

You will create a simple app that shows the current time

1. Create a custom hook called `useTime` that will return the current time every second
   1. Use `useInterval` and `new Date()` to get the current time and update it every second
   1. When the component is unmounted you must cancel `useInterval` function (See MDN documentation)
   1. Store the functionId from `useInterval` in a ref for canceling `useInterval`
1. Create a component called `Clock` that will show the time with AM/PM
