import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!!!</h4>
            Are you sure you want to do this?
            </div>
        </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Todat at 4:40PM"
                    content="First Blog Post"
                    imgAvatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Alex" 
            timeAgo="Today at 8:00AM" 
            content="Second Blog Post" 
            imgAvatar={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Jane" 
            timeAgo="Today at 10:00PM" 
            content="Third Blog Post" 
            imgAvatar={faker.image.avatar()}
            />
            </ApprovalCard>
            {/* <CommentDetail />
            <CommentDetail />
            <CommentDetail /> */}
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))