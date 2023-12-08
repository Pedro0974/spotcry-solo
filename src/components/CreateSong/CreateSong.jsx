import React from "react";
import useForm from "../../hooks/useForm";
import { createSong } from "../../services/songs";
const CreateSong = () => {
  const [form, onChange, clear] = useForm({title: "", artist: "", url: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    createSong(form);
    clear();
    };
  

  return <></>;
};

export default CreateSong;
