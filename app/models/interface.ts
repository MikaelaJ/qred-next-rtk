import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  zipcode: number;
  street: string;
  city: string;
  email: string;
  phone: number;
  userId: number;
  error: string;
};

export const validationSchema: ZodType<FormData> = z.object({
  email: z.string().email().min(1),
  zipcode: z.number(),
  street: z.string().min(1),
  city: z.string().min(1),
  phone: z.number().positive(),
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
  defaultValue?: string | number;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export type UpdateUserFormData = {
  zipcode: number;
  street: string;
  city: string;
  email: string;
  phone: number;
  [key: string]: string | number;
};

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UsersApiResponse {
  id: number;
  userId: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
  company: Company;
}
