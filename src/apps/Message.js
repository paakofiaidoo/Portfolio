import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getStrapiURL } from "../../pages/api";
import styles from "../../styles/apps/Message.module.scss";
import { useForm } from "react-hook-form";

function Message() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const [sending, setSending] = useState(false);
    const onSubmit = (data) => {
        setSending(true);

        axios
            .post(getStrapiURL("/messages"), { ...data })
            .then(() => {
                toast.success("Message sent");
                setValue("name", "");
                setSending(false);
            })
            .catch(() => {
                toast.error("Error sending message");
                setSending(false);
            });
    };
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.message}>
            <Toaster />
            <div className={styles.name}>
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="Paa-Kofi Aidoo" type="text" {...register("name", {})} />
            </div>
            <div className={styles.name}>
                <label htmlFor="email">Email</label>
                <input id="email" {...register("email", { pattern: /^\S+@\S+$/i })} type="email" placeholder="paakofiaidoo17@gmail.com(required if you want a reply)" />
            </div>
            <div className={styles.subject}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" {...register("subject", {})} placeholder="Connect" />
            </div>
            <div className={styles.content}>
                <label htmlFor="content">Content*</label> <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.content?.message}</p>
                <textarea id="content" {...register("content", { required: "Content for message is required" })} placeholder="Wanted to say Hi👋" />
            </div>
            <button disabled={sending}>{!sending ? "Send" : "Sending"}</button>
        </form>
    );
}

export default Message;
