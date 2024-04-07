
function Header() {
    /* if you want javascript inside the return 
    statment you need use curly brackets {} , outside 
    the return statement you use javascript directly */
    /* we can't add two element inside a component 
    if you want to add more than one element it wrapped in a single 
    fragement (<></>) or nested in single element ***/
    const list = ["hello", "bro", "this is", "me","have a good day😊"]
    return(
        <>
        <header>
            <h1>
                this is my website😊
            </h1>
            <div>
                <ul>
                    {list.map((element, index) => 
                    (<li key={index}> <a href="#"> {element} </a> </li>))}
                </ul>
            </div>
        </header>
        <hr></hr>
        </>
    );
}

export default Header




