'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

type AuthTabsProps = {
  value: 'signIn' | 'signUp';
  onValueChange: (tab: 'signIn' | 'signUp') => void;
};

const AuthTabs = ({ value, onValueChange }: AuthTabsProps) => {
  return (
    <Tabs
      value={value}
      onValueChange={(val) => onValueChange(val as 'signIn' | 'signUp')}
      className='w-full'
    >
      <TabsList className='w-full p-md'>
        <TabsTrigger value='signIn'>Sign in</TabsTrigger>
        <TabsTrigger value='signUp'>Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value='signIn'>
        <LoginForm />
      </TabsContent>
      <TabsContent value='signUp'>
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
