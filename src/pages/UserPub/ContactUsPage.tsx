import { Input, Textarea } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonComponent from "../../components/ButtonComponent";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: number;
  message: string;
}

export default function ContactUsPage() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="flex h-[820px] w-full flex-col items-center justify-center gap-10 overflow-x-auto">
      <div className="mx-8 w-full max-w-2xl px-8">
        <div className="flex flex-col gap-3">
          <div className="text-md w-full text-center font-semibold">
            Contact Our Team
          </div>
          <div className="flex w-full items-center justify-center text-center">
            <div className="w-[580px] text-sm opacity-[0.6] md:text-sm">
              Got any question about the product or scaling on our platform?
              We're here to help.
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-full justify-center">
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-row gap-6">
                <Input
                  isRequired
                  type="text"
                  label="Firstname"
                  className="w-full"
                  {...register("firstName")}
                />
                <Input
                  isRequired
                  type="text"
                  label="Lastname"
                  className="w-full"
                  {...register("lastName")}
                />
              </div>
              <div>
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  className="w-full"
                  {...register("email")}
                />
              </div>
              <div>
                <Input
                  isRequired
                  type="number"
                  label="Phone Number"
                  className="w-full"
                  {...register("phoneNo")}
                />
              </div>
              <div>
                <Textarea
                  label="Message"
                  placeholder="Enter your description"
                  className="w-full"
                  {...register("message")}
                />
              </div>
              <div>
                <ButtonComponent Text="Submit" LinkURL="#" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
