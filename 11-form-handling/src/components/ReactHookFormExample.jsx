import React from "react";
import { useForm } from "react-hook-form";

function ReactHookFormExample() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Name" />
      {errors.name && <p>Name is required</p>}

      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <p>Email is required</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHookFormExample;
