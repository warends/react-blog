import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostNew extends Component{
  static contextTypes = {
    router: PropTypes.object
  }
  onSubmit(props){
    this.props.createPost(props)
      .then(()=>{
        //after post submit, navigate to index
        this.context.router.push('/');
      });
  }
  render(){
    // const handleSubmit = this.props.handleSubmit;
    const { fields: {title, categories, content}, handleSubmit} = this.props;  // equal to above context

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
          <label>Title</label>
          <input className="form-control" type="text" {...title}/>
          <div className="text-help">{title.touched ? title.error : ''}</div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`}>
          <label>Categories</label>
          <input className="form-control" type="text" {...categories}/>
          <div className="text-help">{categories.touched ? categories.error: ''}</div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>
          <label>Content</label>
          <textarea className="form-control" rows="8" {...content}/>
          <div className="text-help">{content.touched ? content.error: ''}</div>
        </div>
        <button type="submit" className="btn btn-primary">Save Post</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }

}

function validate(values){
  const errors = {};
  if(!values.title) errors.title = 'Enter a Title';
  if(!values.categories) errors.categories = 'Enter a Category';
  if(!values.content) errors.content = 'Enter Some Conent';
  return errors;
}


export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostNew);
