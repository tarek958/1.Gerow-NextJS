// pages/signup.js
import AuthForm from '@/components/Auth/Signup/signup';
import Layout from "@/components/layout/Layout"

export default function SignUp() {
  return (
   
    <Layout headerStyle={2} footerStyle={3}>
      
      <AuthForm type="signup" />
    </Layout>
  );
}
