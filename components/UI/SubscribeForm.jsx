import ButtonDark from './ButtonDark';
import { bookDemo } from '@/lib/actions';

export default function SubscribeForm() {

  return (
    <form className="input-sub flex" action={bookDemo}>
      <label className="flex flex-nowrap w-full">
        <input type="email" name="email" placeholder="Write your email" required />
      </label>
      <ButtonDark type="submit">Book demo</ButtonDark>
    </form>
  );
}
