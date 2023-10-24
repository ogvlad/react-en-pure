import * as React from "react"
import Button from "@mui/material/Button"
import { Root } from "../../Root"
import { useForm } from "react-hook-form"
import { FormControl } from "@mui/base/FormControl"
import Draggable from "react-draggable"

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
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        // onStart={this.handleStart}
        // onDrag={this.handleDrag}
        // onStop={this.handleStop}
      >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
      
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
