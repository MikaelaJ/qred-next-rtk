import {FieldError, UseFormRegister} from "react-hook-form";
import {FormData} from "@/app/components/formProfile/Form";

export type FormFieldProps = {
    type: string;
    name: keyof FormData;
    label: string;
    htmlFor: string;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    defaultValue?: string | number;
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  type,
  label,
  name,
  htmlFor,
  defaultValue,
  register,
  error,
}) => (
  <>
    <div className="flex flex-col">
        <label
            htmlFor={htmlFor}
            className="text-sm font-medium text-gray-700 uppercase"
        >
            {label}
        </label>
        <input
            className="px-2 py-2 w-full border-black-qred-lighter border-2 rounded-md"
            type={type}
            id={htmlFor}
            defaultValue={defaultValue}
            {...register((name), { required: true })}
        />
    </div>
    {error && <span className="text-red-500 text-xs">{error.message}</span>}
  </>
);

export default FormField;
