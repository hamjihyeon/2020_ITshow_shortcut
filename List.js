import React from 'react';
import Top from './Top';
import './list.css';

class List extends React.Component {
    render() {
        return (
            <div>
                <Top />

                <table>
                    <tr>
                        <td>
                            <ul>
                                <li>
                                    <select name="s1" id="searchOs">
                                        <option selected value="">os선택</option>
                                        <option value="1">mac</option>
                                        <option value="2">window</option>
                                    </select>
                                </li>
                                <li>
                                    <select name="s2" id="searchProg">
                                        <option selected value="">프로그램 선택</option>
                                        <option value="1">엑셀</option>
                                        <option value="2">포토샵</option>
                                        <option value="3">일러스트</option>
                                    </select>
                                </li>
                                <li>
                                    <input type="text" width="30" placeholder="찾으실 단축키이름을 입력하세요" id="searchValue" />
                                </li>
                                    <li>
                                        <button type="submit" id="searchBtn" ><img src="img/11.png" /></button>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
            </div>


        );
    }
}


export default List;