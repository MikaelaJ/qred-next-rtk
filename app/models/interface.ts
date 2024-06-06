import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  zipcode: string;
  street: string;
  city: string;
  email: string;
  phone: number;
  userId: number;
};

export const UserSchema: ZodType<FormData> = z.object({
  email: z.string().email(),
  zipcode: z.string(),
  street: z.string(),
  city: z.string(),
  phone: z.number(),
  userId: z.number(),
});

export type FormFieldProps = {
  type: string;
  name: ValidFieldNames;
  label: string;
  htmlFor: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  defaultValue?: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  validationSchema?: { required: string };
};

export type ValidFieldNames =
  | "street"
  | "city"
  | "zipcode"
  | "email"
  | "phone";

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
