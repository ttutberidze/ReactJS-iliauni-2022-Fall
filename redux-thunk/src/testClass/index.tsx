import { connect } from "react-redux";
import { Component } from "react";
import { PostState } from "../redux/types/post";

class TestComponent extends Component<any, {}> {
    
    render() {
        const {state, posts, updateNumer} = this.props;
        console.log(state, posts);
        return (
            <button onClick={() => updateNumer(7)}>
                Hello
            </button>
        )
    }
}

const mapDispatchToProps = (reduxState: PostState) => {
    return {
        state: reduxState.state,
        posts: reduxState.posts
    }
}

const dispatchToProps = (dispatch: any) => {
    return {
        updateNumer: (num: number) => dispatch({type: 'UPDATE_NUMBER', updateBy: num})
    }
}

export default connect(mapDispatchToProps, dispatchToProps)(TestComponent)