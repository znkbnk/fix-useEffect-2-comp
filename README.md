This project provides a code template
for a React component called MyComponent
that intentionally includes mistakes
related to the usage of the useEffect hook.
By identifying and correcting these mistakes,
coders can practice and improve their 
understanding of useEffect in React while
gaining hands-on experience with common
scenarios and best practices.

Mistake 1: Missing dependency array

Issue: The useEffect hook is missing
a dependency array, causing it to run 
on every render instead of only on mount.
Fix: Add an empty dependency array ([])
as the second argument for the initial
useEffect hook.

Mistake 2: Infinite loop by not
specifying dependency array

Issue: An additional useEffect hook is
nested inside the first useEffect hook,
which results in an infinite loop as
it lacks a dependency array.
Fix: Remove the inner useEffect hook
to avoid the infinite loop.

Mistake 3: Incorrect dependency array

Issue: The dependency array in the
third useEffect hook is incorrect 
as it depends on the count state
variable, which is fine, but it 
creates an unnecessary additional
render.
Fix: Remove the dependency array 
([count]) from the third useEffect
hook to make it run only on mount.

Mistake 4: Conditionally running 
useEffect

Issue: The useEffect hook is
conditionally rendered within an
if statement, which is not allowed
and will not work as expected.
Fix: Move the conditional logic
outside of the useEffect hook and
handle the conditional behavior
within the hook's function body.

Mistake 5: Missing cleanup function

Issue: The fifth useEffect hook is
missing a cleanup function, which
could lead to potential memory leaks
or unintended side effects.
Fix: Add a cleanup function that
handles any necessary cleanup tasks
within the fifth useEffect hook.

Mistake 6: Improper cleanup function

Issue: The cleanup function in the
sixth useEffect hook is returning
the count state variable, which is
unnecessary and won't function
as expected.
Fix: Modify the cleanup function
to properly clean up any resources
or subscriptions and remove the
return statement or return a function
that performs the cleanup.

Mistake 7: Incorrect placement
of useEffect

Issue: The seventh useEffect hook is
placed immediately after updating the
count state variable, which is not
in the correct order.
Fix: Move the setCount(count + 1)
line to the correct location, either
before or after the useEffect hooks.

Mistake 8: Invalid dependency type

Issue: The dependency array in the
eighth useEffect hook contains an
invalid dependency type (null),
which will not work as expected.
Fix: Remove the invalid dependency
(null) from the dependency array or
replace it with a valid dependency.

Mistake 9: Asynchronous function
in useEffect

Issue: The ninth useEffect hook 
contains an asynchronous function
(async () => {}), which is not
allowed directly as the effect function.
Fix: Move the asynchronous functionality
inside the useEffect hook by calling 
an asynchronous function from within
the effect function.

Mistake 10: Multiple useEffects
with the same dependency

Issue: The tenth and eleventh useEffect
hooks have the same dependency array 
([count]), resulting in redundant code
execution and potential performance issues.
Fix: Consolidate the logic of the tenth
and eleventh useEffect hooks into a single
useEffect hook to avoid code duplication.

Mistake 11: Incorrect dependency array

Issue: The outermost useEffect hook has
an empty dependency array ([]), which
causes it to run only on mount and not
re-run when any dependencies change.
Fix: If the useEffect hook should 
depend on certain variables, include 
them in the dependency array to trigger
Sre-execution when those variables change.

