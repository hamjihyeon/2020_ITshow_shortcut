import React from 'react';
import Top from './Top';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Top/>
                <img src="https://placeimg.com/1000/360/any" style={{width: '100%', margin: '20px 0'}} alt="메인 이미지"/>
                <div style={{width: '600px', display: 'inline-block'}}>
                    새로 등록된 단축키
                    <div style={{backgroundColor: 'gray'}}>dfdf</div>
                </div>
                <div style={{width: '600px', display: 'inline-block', float: 'right'}}>
                    단축키 검색
                    <div style={{backgroundColor: 'gray'}}>dfdfd</div>
                </div>
            </div>
        );
    }
}

export default Home;