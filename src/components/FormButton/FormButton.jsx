import { SubmitBtn } from "./FormButton.style"

function FormButton({onSubmit, name, disabled}) {
    return (
        <SubmitBtn type="submit" onClick={onSubmit} disabled={disabled} variant="text" color="primary">
            {name}
        </SubmitBtn>
    )
}

export default FormButton