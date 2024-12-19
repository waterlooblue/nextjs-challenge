import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PageModel } from "@/models/Page";
import { validateEmail } from "@/util/disify";

interface Props {
  data?: PageModel;
}

type EmailFormInputs = {
  email: string;
};

const Hero = ({ data }: Props) => {
  const { 
    title,
    subtitle,
    inputLabel,
    buttonCopy,
    heroBackground,
    heroImage
  } = data || {};
  const { register, formState: { errors, isValid }, handleSubmit } = useForm<EmailFormInputs>();
  const router = useRouter()
  const onSubmit: SubmitHandler<EmailFormInputs> = async (data) => {
    if (isValid) {
      const validation = await validateEmail(data.email);
      if (validation.disposable) {
        alert(`REQUEST FAILED: ${data.email} is invalid!`)
      } else if (!validation.disposable && validation.format) {
        router.push('/success');
      }
    }
  };
  return (
    <section className="relative px-5 text-center pb-5 mb-5">
      <Image
        className="absolute -z-0 -top-[25%] left-[20%] min-w-[1480px]"
        src={heroBackground?.url || ''}
        width={heroBackground?.width}
        height={heroBackground?.height}
        alt=''
      />
      <h1 className="relative text-3xl md:text-4xl text-[#202b36] font-bold mb-8 z-10">{title}</h1>
      <p className="relative text-lg text-[#5b6f82] font-medium px-5 mx-auto max-w-[600px] mb-8 z-10">{subtitle}</p>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="relative z-10 mb-[75px]">
        <label htmlFor='email' className='relative block sm:inline-block'>
          <input 
            id='email'
            type='email'
            placeholder={inputLabel}
            aria-invalid={!!errors.email}
            className="min-w-[250px] placeholder-gray-300 shadow appearance-none border invalid:border-red-500 invalid:focus:ring-red-500 focus:outline-none focus:shadow-outline py-3 px-3 mx-1 mb-3 sm:mb-0 w-full sm:w-[initial] rounded"
            required
            {...register('email', { required: 'An E-mail address is required', pattern: /\S+@\S+\.\S+/ })}
          />
          {(errors.email && errors.email.type === 'required') &&
            <p className='absolute text-red-500 -bottom-[85px] sm:-bottom-[30px] left-[8px]'>This field is required</p>
          }
          {(errors.email && errors.email.type === 'pattern') &&
            <p className='absolute text-red-500 -bottom-[85px] sm:-bottom-[30px] left-[8px]'>Invalid email address</p>
          }
        </label>
        <button
          type='submit'
          className="bg-gradient-to-r from-[#1676ed] to-[#4590f0] hover:from-blue-700 hover:to-blue-600 text-white text-xs font-bold uppercase py-4 px-5 mx-1 w-full sm:w-[initial] rounded"
        >
          {buttonCopy}
        </button>
      </form>
      <div className="flex flex-wrap justify-center mb-12">
        <div className="relative mb-[80px]">
          <Image
            className="relative shadow-xl z-10"
            src={heroImage?.url || ''}
            width={heroImage?.width}
            height={heroImage?.height}
            alt=''
          />
          <Image
            className="absolute max-w-[210px] md:max-w-max -left-[44px] -bottom-[60px] md:-left-[100px] md:-bottom-[80px] -z-0"
            src={'/bubble-1.svg'}
            width={286}
            height={427}
            alt=''
          />
          <Image
            className="absolute max-w-[150px] md:max-w-max -right-[90px] -top-[40px] md:-right-[100px] -z-0"
            src={'/bubble-2.svg'}
            width={230}
            height={235}
            alt=''
          />
          <Image
            className="absolute max-w-[50px] md:max-w-max -top-[20px] left-[70px] md:-left-[30px] md:top-[100px] z-10"
            src={'/bubble-3.svg'}
            width={61}
            height={52}
            alt=''
          />
          <Image
            className="absolute max-w-[100px] md:max-w-max -bottom-[20px] -right-[50px] md:-right-[75px] md:-bottom-[15px] z-10"
            src={'/bubble-4.svg'}
            width={176}
            height={126}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
