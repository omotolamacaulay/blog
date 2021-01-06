/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import Axios from 'axios'
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:4000/posts', {
      title
    })
    setTitle('')
  }
  return <div>
    <form onSubmit= {onSubmit}>
      <div className="form-group">
        <label htmlFor="">Title</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control"/>
      </div>
      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  </div>
}