import React from 'react'; 
import Post from './post/Post';
import classes from './myPost.module.css'
import {Field, Form} from "react-final-form";



const MyPostForm = (props) => {
    const onSubmit = (event) => {
        props.newPost(event.myPost)
    }
    const validator = (maxNumb) => (value) => (value && value.length >= maxNumb ? `max lenght ${maxNumb}` : undefined )
    const required = value =>  (value ?  undefined : 'Required' )
    const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="myPost" validate={composeValidators(required, validator(5))}>
                        {({ input, meta }) => (
                            <div>
                                <textarea {...input} type="text" placeholder=" my post" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div>
                        <button
                            type="submit"
                            disabled={submitting}>send post</button>
                    </div>
                </form>
            )}
        />
    )
}

const MyPost =  (props) => { 
    let  dataPostN = props.dataPost.map(m =><Post postText={m.postText} like={m.like}/> )

  return (
    <div className={classes.myPost}> 
      <h2>My posts</h2> 
        <MyPostForm newPost={props.newPost}/>
        {dataPostN}
    </div>
  );
}

export default MyPost;
