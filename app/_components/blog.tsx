import { FaRegUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Blog(){
    return(
        <>
        <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"}}></div>
          <ul className="details">
            <li className="flex"><FaRegUser className="mr-2"/><a href="#">John Doe</a></li>
            <li className="flex"><MdOutlineDateRange className="mr-2"/>Aug. 24, 2015</li>
            <li className="flex"><IoPricetags/>
              <ul className="flex gap-x-2">
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Learning to Code</h1>
          <h2>Opening a door to the future</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
          <p className="read-more ">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"}}></div>
          <ul className="details">
            <li className="flex"><FaRegUser className="mr-2"/><a href="#">Jane Doe</a></li>
            <li className="flex"><MdOutlineDateRange className="mr-2"/>July. 15, 2015</li>
            <li className="flex"><IoPricetags/>
              <ul className="flex gap-x-2">
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Mastering the Language</h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
        </>
    )
}