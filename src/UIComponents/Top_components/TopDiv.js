import "./TopDiv.css";
import SearchBar from "./searchComponent.js";
import "../Bottom_components/BottomDiv.css";
import IMAGE from "../Images/Capture.PNG";
function TopDiv() {
  return (
    <div>
      <div className="flex-container">
        <div className="flex-item">
          <div className="inner-flexitem">
            <div className="inner-flexitem_child1">36</div>
            <div className="inner-flexitem_child2">ABANDON CALLS</div>
          </div>
        </div>
        <div className="flex-item">
          <div className="inner-flexitem">
            <img className="image_resize" src={IMAGE} alt={"current_picture"} />
          </div>
        </div>
        <div className="flex-item">
          <div className="inner-flexitem">
            <div className="makesidebyside">
              <div className="inner-flexitem_child1">04</div>
              <div className="sec_style">sec</div>
            </div>
            <div className="inner-flexitem_child2">AVG. CALL DURATION</div>
          </div>
        </div>
        <div className="flex-item">
          <div className="inner-flexitem">
            <div className="makesidebyside">
              <div className="inner-flexitem_child1">28</div>
              <div className="sec_style">sec</div>
            </div>
            <div className="inner-flexitem_child2">AVG. CALL DURATION</div>
          </div>
        </div>
        <div className="flex-item">
          <div className="inner-flexitem">
            <div className="inner-flexitem_child1">32</div>
            <div className="inner-flexitem_child2">CHATS ANSWERED</div>
          </div>
        </div>
      </div>
      <div class="flex-container2">
        <div className="flex-item2">
          <button className="button1">PHONE</button>
          <button className="button2">CHAT</button>
        </div>
        <div class="flex-item21">
      <div className="inner_flex-item21">
          <button className="button11">CONTACT</button>
          <button className="button21">CONTACT DETAILS</button>
      </div>
          
          <div className="SearchBar">
          <SearchBar> </SearchBar>
          </div>
  <div className="table_class">
 <table>
  <tr>
    <th>NAME</th>
    <th>PHONE</th>
    <th>EMAIL</th>
    <th>POLICY#</th>
    <th>INTERACTIONS HISTORY</th>
  </tr>
  <tr>
    <td>MICKEY MOUSE</td>
    <td>6141234567</td>
    <td>mickey.m@gmail.com</td>
    <td>A6944567</td>
    <td>9/1/21-<a href={"#"}>Chat</a><td>9/12-21-<a href={"#"}>Voice</a></td></td>
  </tr>
  <tr>
    <td>DONALD DUCK</td>
    <td>6147674567</td>
    <td>donald.d@gmail.com</td>
    <td>A6998567</td>
    <td>9/1/21-<a href={"#"}>Chat</a><td>9/12-21-<a href={"#"}>Voice</a></td></td>
  </tr>
  <tr>
   <td>MICKEY MOUSE</td>
    <td>6141234567</td>
    <td>mickey.m@gmail.com</td>
    <td>A6944567</td>
    <td>9/1/21-<a href={"#"}>Chat</a><td>9/12-21-<a href={"#"}>Voice</a></td></td>
  </tr>
    <tr>
   <td>MICKEY MOUSE</td>
    <td>6141234567</td>
    <td>mickey.m@gmail.com</td>
    <td>A6944567</td>
   <td>9/1/21-<a href={"#"}>Chat</a><td>9/12-21-<a href={"#"}>Voice</a></td></td>
  </tr>
</table>
</div>
         </div>
      </div>
    </div>
  );
}
export default TopDiv;
