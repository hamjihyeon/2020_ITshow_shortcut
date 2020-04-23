import React from 'react';
import './r2.css'

class R2 extends React.Component {
    

    render() {
        var oTbl;
        //Row 추가
        function insRow() {
            oTbl = document.getElementById("regSynValue");
            placeholder = "수행할 작업 대표값 입력(예: 복사하기)"
            var oRow = oTbl.insertRow();
            
            var oCell = oRow.insertCell();
    
            var frmTag = "<input type=text name=addText style=width:900px; height:50px;> ";
            frmTag += "<input type=button value='x' onClick='removeRow()' style='cursor:hand'>";
            oCell.innerHTML = frmTag;
        }
        //Row 삭제
        function removeRow() {
            oTbl.deleteRow(oTbl.clickedRowIndex);
        }
    

        return (

            <div>
                
                {/* <script language="javascript" src="js/r2.js"></script> */}
                
                <form action="r2.html">
                    <p>
                        <table>
                            <tr>
                                <td>

                                    <select name="s1" id="regOs">
                                        <option selected value="">os선택</option>
                                        <option value="1">mac</option>
                                        <option value="2">window</option>
                                    </select>

                                    <select name="s2" id="regProg">
                                        <option selected value="">프로그램 선택</option>
                                        <option value="1">엑셀</option>
                                        <option value="2">포토샵</option>
                                        <option value="3">일러스트</option>
                                    </select>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="text" placeholder="수행할 작업 대표값 입력(예: 복사하기)" id="regRepValue" />
                                    <input name="addButton" type="button" style="cursor:hand" onClick="insRow()" value="+" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table id="regSynValue" width="50" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF"
                                        border="0">
                                        <tr>
                                            <td>
                                                <input type="text" name="regSynValue" style="width:900px; height:50px;"
                                                    placeholder="위에서 입력한 값의 동의어를 입력하세요(예:복제하기, 똑같이 만들기...)" />
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                    <input type="text" placeholder="해당 작업의 단축키 입력(예: 컨드롤 C 입니다)" id="regShortValue" />

                                </td>
                            </tr>
                        </table>
                        <input type="reset" id="cancelBtn" value="취소" />
                        <input type="submit" id="ApplyBtn" value="등록신청" />
                    </p>
                </form>
            </div>
        );
    }
}

export default R2;