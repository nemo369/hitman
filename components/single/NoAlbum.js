const NoAlbum = () => {
    return (  
        <section className="box">
        <h1 className="tac"> אוי לא, אין אלבום כזה</h1> 
        <h2 className="tac"> 
        <Link href="/">
            <a>
        נוסטלגיה יכולה להיות מתעתעת
        ,<br /> אולי בעמוד הבית תמצא את האלבום שחיפשת
            </a>
            </Link>
        </h2> 
    </section>
    );
}
 
export default NoAlbum;