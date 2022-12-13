function Banner (){
    return(
        <div>
         <div className="hero">
            
                <video autoPlay loop muted>
                    <source src="https://comm.v.easebar.com/nie/2022/1128/4cc9d2bcdc47368775020c63de1ccd28qt.mp4" type="video/mp4"></source>

                </video>
                <div className="content">
                <nav className='navbar  p-md-3 navbar-expand-lg navbar-dark navbar-inverse shadow-5-strong'>
            <div className="container-fluid ">
                
                
                    <a  className='navbar-brand ms-5' href='#brand'>dextergames!!</a>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#examplenavbar"><span className="navbar-toggler-icon"></span></button>

                 <div className="navbar-collapse collapse" id="examplenavbar">
                    <ul className="navbar-nav ms-auto m-2 p-2 me-5">
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#Adventure" className="nav-link">Adventure</a></li>
                        <li className="nav-item"><a href="#Racing" className="nav-link">Racing</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href ="#emply" role="button">Contact</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#register">Registration</a></li>
                                <li><a className="dropdown-item" href="#form">Form</a></li>
                            </ul>

                        </li>
                        <li className="nav-item dropdown">
                            <a href="#login" className="nav-link dropdown-toggle" dats-bs-toggle="dropdown" role="button">Login</a>
                            <ul className="dropdown-menu">
                                <li><a href="#login" className="dropdown-item">Login</a></li>
                                <li><a href="#login" className="dropdown-item">Gallery's</a></li>
                            </ul>
                        </li>
                    </ul>
                 </div>
                 
                
            </div>
            </nav>
                </div>

                

                </div>
        
        </div>
    )
}
export default Banner;