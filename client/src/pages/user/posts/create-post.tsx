import React from 'react'
import { useForm } from 'react-hook-form';
import { SERVER_URL } from '../../../types/variables';
import axios from "axios"


const CreatePosts = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    const formData= new FormData();
    
    formData.append('avatar', data.avatar[0])

    axios.post(SERVER_URL+ "/upload", formData)
      .then(res => { 
        console.log(res)
      })


  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input {...register('avatar')} type="file" name="avatar" id="" />
      <button type='submit'>submit</button>
    </form>
  )
}

export default CreatePosts;