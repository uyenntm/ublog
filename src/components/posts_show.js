import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import { Link } from "react-router-dom";
class PostsShow extends React.Component {
    
    componentWillMount(){
        this.props.fetchPost(this.props.match.params.id);
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    onDeleteClick(){
        this.props.deletePost(this.props.match.params.id,() =>{
            this.props.history.push("/");
        });  
    }
    render() {
        console.log(this.props.data);
        console.log("this.props",this.props);
        const {post} = this.props;
        if(!post){
            return <div>Loading....</div>
        }
        return (
            <div> 
                <Link to="/" className="navbar-default">Back to Index</Link>
                <button onClick={this.onDeleteClick.bind(this)} to="/" className="btn btn-danger pull-xs-right">Delete Post</button>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

PostsShow.propTypes = {
   
};

function mapStateToProps(state){
    return {post:state.posts.post};
}

export default connect(mapStateToProps, {fetchPost,deletePost})(PostsShow);
