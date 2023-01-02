import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../actions/DeleteAction";

class Post extends Component {

  handleClick =()=>{
    this.props.deletePost(this.props.post.id);
  }




  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <Link to='/'>
          <button onClick={this.handleClick} className="btn grey">
            Delete post
          </button>
          </Link>
        </div>
      </div>
    ) : (
      <div className="center">Loading post..</div>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  
  const id = window.location.href.split('/')[3]
  return { post: state.posts.find(post=>post.id == id) };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
      deletePost : (id)=>{
        dispatch(deletePost(id))  
      }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Post);
