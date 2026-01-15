import { useActionState } from 'react';
import { authenticate } from '../../lib/actions';

 
export default function Page() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
 
  return (
    <form action={formAction}>
      <input type="text" name="name" />
      <input type='email' name="email" required/>
      <input type="password" name="password" required />
      <input type="hidden" name="redirectTo" value={"/blog/home"} />
      <button type="submit">Submit</button>
    </form>
  )
}