import Link from 'next/link'

const Custom404 = () => {
    return (
        <main className="box box--404">
            <h1 className="tac">אוי לא, הגעת לסוף האלבום</h1>
            <h2 className="tac">
                <Link href="/">
                        נוסטלגיה יכולה להיות מתעתעת
        ,<br /> אולי בעמוד הבית תמצא את האלבום שחיפשת
                </Link>
            </h2>
            <div className="flex">
                <img className=" margin-auto" src={`/90s-party.jpg`} alt="מסיבה בתחילת שנות ה2000" />
            </div>
        </main>
    );
}

export default Custom404;