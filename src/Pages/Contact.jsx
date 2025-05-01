import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "../Components/ui/Input";
import { Textarea } from "../Components/ui/Textarea";
import { Label } from "../Components/ui/Label";
import { toast } from "react-toastify";


const ContactForm = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_l0hqwxe',
            'template_7qezw95',
            form.current,
            'EF5mwqdRXvu8ko0jc'
        ).then(() => {
            toast.success("Message sent successfully! ✅");
            form.current.reset(); // Clears the form
        }).catch((error) => {
            toast.error("Oops! Something went wrong ❌");
            console.error("Email Error:", error.text);
        });
    };

    return (
        <>

            <form
                ref={form}
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto p-6 space-y-6 bg-zinc-900 rounded-lg shadow-md"
                id="contact"
            >
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-700 text-white py-2 px-4 cursor-pointer rounded-md hover:bg-sky-700 transition duration-300"

                >
                    Send Message
                </button>
            </form>

        </>
    );
};

export default ContactForm;
