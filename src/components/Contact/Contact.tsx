"use client";
import { addToast, Button, Form, Input, Textarea } from "@heroui/react";
import { SendHorizontal } from "lucide-react";
import { useActionState, useEffect } from "react";
import sendContactMail from "./actions";

// bg-gradient-to-t from-foreground-50 via-stone-950 to-black
const Contact = () => {
  const [state, action, isPending] = useActionState(sendContactMail, {});

  useEffect(() => {
    if (state.message) {
      addToast({
        title: "Toast title",
        description: state.message,
        color: state.success ? "success" : "danger",
      });
    }
  }, [state.message]);

  return (
    <div
      id="contact"
      className=" pt-4   "
    >
      <div className="relative container pt-12 pb-24">
        <h3 className="text-center font-bold text-5xl xls:text-7xl text-gradient-br from-foreground-700  to-foreground-200 mb-12">
          Contact Me
        </h3>
        <Form
          className=" w-full  xls:w-[90%] sm:w-[80%] md:w-2/3 lg:w-[60%] xl:w-1/2 mx-auto "
          action={action}
        >
          <div className="w-full flex flex-col xs:flex-row gap-2">
            <Input
              errorMessage={() => (
                <>
                  {state.error?.name?.map((err, i) => (
                    <span key={"err_name_" + i}>{err}</span>
                  ))}
                </>
              )}
              isInvalid={
                state.error?.name !== undefined && state.error.name?.length > 0
              }
              label="Name"
              type="text"
              size="sm"
              name="name"
              defaultValue=""
            />
            <Input
              size="sm"
              errorMessage={() => (
                <>
                  {state.error?.email?.map((err, i) => (
                    <span key={"err_email_" + i}>{err}</span>
                  ))}
                </>
              )}
              isInvalid={
                state?.error?.email !== undefined &&
                state?.error.email?.length > 0
              }
              label="Email"
              type="email"
              name="email"
              defaultValue=""
            />
          </div>
          <Input
            size="sm"
            errorMessage={() => (
              <>
                {state?.error?.subject?.map((err, i) => (
                  <span key={"err_subject_" + i}>{err}</span>
                ))}
              </>
            )}
            isInvalid={
              state?.error?.subject !== undefined &&
              state?.error.subject?.length > 0
            }
            label="Subject"
            type="text"
            name="subject"
            defaultValue=""
          />
          <Textarea
            size="sm"
            errorMessage={() => (
              <>
                {state?.error?.description?.map((err, i) => (
                  <span key={"err_description_" + i}>{err}</span>
                ))}
              </>
            )}
            isInvalid={
              state?.error?.description !== undefined &&
              state?.error.description?.length > 0
            }
            label="Description"
            maxLength={300}
            minLength={15}
            minRows={60}
            name="description"
            defaultValue=""
          />
          <Button
            type="submit"
            color="primary"
            variant="shadow"
            endContent={<SendHorizontal />}
            size="lg"
            className="ms-auto font-semibold"
            isLoading={isPending}
          >
            Send
          </Button>
        </Form>
        <div className="absolute h-px   left-0 w-full bg-gradient-to-r from-slate-600 to-zinc-700 bottom-0 shadow-[0_0_4px_2px_#d5d9dd60]" />
      </div>
    </div>
  );
};

export default Contact;
