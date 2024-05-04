import style from "./css_nav.module.css"

function Nav(){
    return (
        <div>
          <h2 style={{color:" rgb(179, 26, 77)",marginLeft:"10px"}}>Family Wellenss</h2>
          <h5 style={{marginLeft:"10px"}}>MASSAGE THERAPY</h5>
          <br />
          
          <section className={style.navList}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>FAQ</li>
            <li>CONTACT</li>
          </section>
        </div>
    )
}

export default Nav;