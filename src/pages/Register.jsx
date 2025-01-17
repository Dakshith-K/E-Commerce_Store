import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import signup from "../assets/signup.svg"

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || 'please check your credentials';
    toast.error(errorMessage);
    return null;
  }
}

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <div className="hidden md:flex w-full">
        <div className="grid flex-grow place-items-center">
          <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
            <h4 className='text-center text-3xl font-bold'>Register</h4>
            <FormInput type='text' label='username' name='username' />
            <FormInput type='email' label='email' name='email' />
            <FormInput type='password' label='password' name='password' />
            <div className='mt-4'>
              <SubmitBtn text='Register' />
            </div>
            <p className='text-center'>
              Already a member?
              <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>
                login
              </Link>
            </p>
          </Form>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="visible md:grid h-20 flex-grow place-items-center">
          <img src={signup} alt="login" className="h-2/3" />
        </div>
      </div>

      <div className="md:hidden flex w-full flex-col">
        <div className="grid place-items-center">
          <img src={signup} alt="login" className="h-2/3" />
        </div>

        <div className="grid place-items-center">
          <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
            <h4 className='text-center text-3xl font-bold'>Register</h4>
            <FormInput type='text' label='username' name='username' />
            <FormInput type='email' label='email' name='email' />
            <FormInput type='password' label='password' name='password' />
            <div className='mt-4'>
              <SubmitBtn text='Register' />
            </div>
            <p className='text-center'>
              Already a member?
              <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>
                login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Register