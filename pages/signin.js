import AuthForm from '@/components/Auth/Signin/signin';
import Layout from "@/components/layout/Layout";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import React, { useEffect } from 'react';

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    const confirmationStatus = query.confirmation;

    if (confirmationStatus === 'success') {
      toast.success('Votre compte a été confirmé!');
    } else if (confirmationStatus === 'resend') {
      toast.info('Un e-mail de confirmation a été envoyé à votre compte. Veuillez vérifier votre e-mail pour confirmer votre compte.');
    }
  }, [router.query]);

  return (
    
    <Layout headerStyle={2} footerStyle={3}>

        <AuthForm type="signin" />
    </Layout>
    
  );
}
