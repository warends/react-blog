import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getPost, deletePost} from '../actions/index';

class PostDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.getPost(this.props.params.id);
  }
  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
    .then(() => {
      this.context.router.push('/');
    });
  }
  render(){
    const post = this.props.post;
    if(!post) return <div>Loading</div>
    return (
      <div>
        <Link to="/" className="btn btn-primary pull-xs-right">Home</Link>
        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete</button>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {post: state.posts.post};
}

export default connect(mapStateToProps, {getPost, deletePost})(PostDetail);
