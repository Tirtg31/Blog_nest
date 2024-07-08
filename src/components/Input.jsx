import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;

/*
In a login form:
1. There is an input field which is only the component and doesnot have anything related to its state.
2. There is a login page where the state of the input field is being changed.
=> So i need to have a referrence of the input component in the login page.
=> The react hook : forwardRef is used


_____________                                 _____________
|           |                                 |           |
|           |         reference               |           |
|           |     <-------------------        |           |
|           |                                 |           |
|___________|                                 |___________|
   Login Page                                    input component
=> Has access to change                       => To be used in username, password, everywhere
the state of the input                      
component                                  
----------------------------------------------------------------------------------------------------

For this, a reference needs to be passed

*/
