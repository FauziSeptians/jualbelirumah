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
    <div className="w-full h-[820px] overflow-x-auto  flex flex-col gap-10 ">
      <div className="flex flex-col gap-3">
        <div className="w-full text-center text-[24px] font-semibold ">
          Contact Our Team
        </div>
        <div className="w-full text-center  flex justify-center items-center">
          <div className="w-[580px]  opacity-[0.6]">
            Got any question about the product or scaling on our platform? We're
            here to help. Chat to our friendly team 24/7 and get onboard in less
            than 5 minutes
          </div>
        </div>
      </div>
      <div className=" flex w-full justify-center mt-6 ">
        <div className="w-[40%] ">
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
              <div>
                <ButtonComponent Text="Submit" LinkURL="#" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
