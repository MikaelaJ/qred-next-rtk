import { error } from "console";
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  zipcode: string;
  street: string;
  city: string;
  email: string;
  phone: number;
  userId: number;
  error: string;
  
};

export const validationSchema: ZodType<FormData> = z.object({
  email: z.string().email().min(1, { message: "Email is required, just so you know" }),
  zipcode: z.string(),
  street: z.string(),
  city: z.string(),
  phone: z.number(),
  userId: z.number(),
  error: z.string(),

});

export type FormFieldProps = {
  type: string;
  name: keyof FormData;
  label: string;
  htmlFor: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  defaultValue?: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  validationSchema?: { required: string, pattern?: { value: RegExp, message: string }};
};

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UsersApiResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
