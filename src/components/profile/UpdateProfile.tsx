'use client';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  useProfile,
  useUpdateProfile,
} from '@/features/profile/hook/useProfile';
import { useForm } from 'react-hook-form';
import { UpdateProfileBody } from '@/features/profile/types';
import { useEffect, useState } from 'react';

const UpdateProfile = () => {
  const [open, setOpen] = useState(false);
  const { data: profile } = useProfile();
  const { mutate, isPending } = useUpdateProfile();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isDirty },
  } = useForm<UpdateProfileBody>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      avatar: undefined,
    },
  });

  useEffect(() => {
    if (!open || !profile) return;
    reset({
      name: profile.data.name,
      email: profile.data.email,
      phone: profile.data.phone,
    });
  }, [open, profile, reset]);

  const onSubmit = (data: UpdateProfileBody) => {
    if (!isDirty) return;
    console.log(data);
    console.log(data.avatar);
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Update Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-100'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' {...register('name')} />
            </Field>
            <Field>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' {...register('email')} />
            </Field>
            <Field>
              <Label htmlFor='phone'>Phone</Label>
              <Input id='phone' {...register('phone')} />
            </Field>
            <Field>
              <Label htmlFor='avatar'>Avatar</Label>
              <Input
                id='avatar'
                type='file'
                onChange={(e) =>
                  setValue('avatar', e.target.files?.[0], {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button type='submit' disabled={isPending}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfile;
