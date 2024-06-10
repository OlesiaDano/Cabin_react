import { SubmitBtn } from "./FormButton.style"

function FormButton({onSubmit, name}) {
    return (
        <SubmitBtn type="submit" onClick={onSubmit} variant="text" color="primary">
            {name}
        </SubmitBtn>
    )
}

export default FormButton