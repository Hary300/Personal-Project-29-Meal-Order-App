'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type LoginSchema, loginSchema } from './../schemas/loginSchema';
import InputField from './ui/InputField';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { fadeIn } from '@/motions';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-xl lg:gap-2xl'
      variants={fadeIn}
      initial='hidden'
      animate='visible'
    >
      <InputField
        register={register}
        name='email'
        title='Email'
        type='email'
        errorMessage={errors.email?.message}
      />

      <InputField
        register={register}
        type='password'
        name='password'
        title='Password'
        errorMessage={errors.password?.message}
      />

      <Button disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Login'}
      </Button>
    </motion.form>
  );
};

export default LoginForm;
