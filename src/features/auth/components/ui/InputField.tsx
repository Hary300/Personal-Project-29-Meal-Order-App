import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputFieldProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  type: 'text' | 'email' | 'password' | 'tel';
  name: Path<T>;
  title: 'Name' | 'Email' | 'Phone Number' | 'Password' | 'Confirm Password';
  errorMessage?: string;
};

const InputField = <T extends FieldValues>({
  register,
  type,
  name,
  title,
  errorMessage,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex rounded-xl border relative h-6xl lg:h-14'>
        <input
          id={name}
          type={type}
          placeholder=' '
          {...register(name)}
          className='peer w-full px-4 pt-5 pb-2 outline-0'
        />
        <label
          htmlFor={name}
          className='pointer-events-none absolute left-4 bg-white text-neutral-500 transition-all peer-focus:top-1 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-base   peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs'
        >
          {title}
        </label>
      </div>
      {errorMessage && (
        <p className='font-semibold text-primary-100 lg:text-sm'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
