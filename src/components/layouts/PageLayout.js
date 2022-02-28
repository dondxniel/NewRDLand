import NavBar from '../presentational/NavBar';
import Footer from '../presentational/Footer';

export default function PageLayout({children}){
    return(
        <div>
            <NavBar />
            <div className="header">
                {children}
            </div>
            <Footer />
        </div>
    )
}