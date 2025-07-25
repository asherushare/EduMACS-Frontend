import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative border-[2px] p-5 shadow-md rounded-md w-fit">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button inside the box */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Contact Us</h3>

            <div className="mt-4 space-y-2">
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 border rounded-md py-1"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md py-1"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <label>Message</label>
              <br />
              <input
                type="text"
                placeholder="Type your message"
                className="w-80 h-30 px-3 border rounded-md py-1"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-500 rounded-md btn px-3 hover:bg-blue-700 duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
