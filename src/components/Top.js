import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

class Top extends React.Component{
    render() {
        return (
            <div>
                <img src="https://placeimg.com/136/36/any" alt="logo"/>
                
                <ul id="menu" style={{listStyle: 'none', float: 'right'}}>
                    <li style={{display: 'inline-block'}}><Link component={RouterLink} to="/">홈</Link></li>
                    <li style={{display: 'inline-block', marginInlineStart: '20px'}}><Link component={RouterLink} to="/list">목록보기</Link></li>
                    <li style={{display: 'inline-block', marginInlineStart: '20px'}}><Link component={RouterLink} to="/register">등록하기</Link></li>
                </ul>
            </div>
        );
    }
}

export default Top;