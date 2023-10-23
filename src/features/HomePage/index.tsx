import * as React from "react"
import Button from "@mui/material/Button"
import { Root } from "../../Root"
import { useForm } from "react-hook-form"
import { FormControl } from "@mui/base/FormControl"

export const HomePage = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }
  
  return (
    <Root>
      <FormControl defaultValue="" required>
        {/*<CustomInput />*/}
        {/*<ControlStateDisplay />*/}
      </FormControl>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <textarea
            placeholder="Enter text here..."
            {...register("noteText", { required: true })}
          />
        </section>
        <section>
          <Button type={"submit"} variant="contained">Save</Button>;
        </section>
      </form>
    </Root>
  )
}
