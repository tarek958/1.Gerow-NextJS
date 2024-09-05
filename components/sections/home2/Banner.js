
import Link from "next/link"
import { useState, useEffect, useRef } from "react";
export default function Banner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [regions, setRegions] = useState([]);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");
    const contactRef = useRef(null); 
    const handleOnClick = (index) => {
        setActiveIndex(index);
        fetchPosts(index, searchKeyword);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        fetchPosts(activeIndex, searchKeyword);
    };
  
    const fetchRegions = async () => {
        try {
            const res = await fetch('http://148.113.194.169:5000/api/postss/regions');
            const data = await res.json();
            setRegions(data);
            if (data.length > 0) {
                setActiveIndex(1);
            }
        } catch (error) {
            console.error("Failed to fetch regions:", error);
        }
    };

    const fetchPosts = async (regionIndex, keyword) => {
        setLoading(true);
        try {
            const region = regions[regionIndex - 1];
            const query = new URLSearchParams({ region, page: currentPage, limit: 10, keyword }).toString();
            const res = await fetch(`http://148.113.194.169:5000/api/postss/by-region?${query}`);
            const data = await res.json();
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRegions();
    }, []);
    
    useEffect(() => {
        if (regions.length > 0) {
            fetchPosts(activeIndex, searchKeyword);
        }
    }, [activeIndex, currentPage, searchKeyword]);

    const scrollToContact = (company) => {
        localStorage.setItem("selectedCompany", company); 
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }

    };
    return (
        <>
            <section className="banner-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9 order-0 order-lg-2">
                            <div className="banner-img-three" data-aos="fade-left" data-aos-delay={300}>
                                <img src="/assets/img/banner/h3_banner_img01.jpg" alt="" className="main-img" />
                                <img src="/assets/img/banner/h3_banner_img02.jpg" alt="" className="img-two" data-parallax="{&quot;y&quot; : 100 }" />
                                <img src="/assets/img/banner/h3_banner_img03.jpg" alt="" className="img-three" data-parallax="{&quot;x&quot; : -100 }" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-content-three">
                                <h2 className="title" data-aos="fade-right" data-aos-delay={0}>trouvez le poste qui vous correspond.</h2>
                                
                            </div>
                            <div >
                                <div>
                                    <select className="form-select" value={activeIndex} onChange={(e) => handleOnClick(parseInt(e.target.value))}>
                                        {regions.length > 0 ? (
                                            
                                            regions.map((region, index) => (
                                                <option key={index} value={index + 1}>
                                                    {region}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No regions available</option>
                                        )}
                                    </select>

                                    
                                    <form onSubmit={handleSearch} className="d-flex mt-4">
                                        <input 
                                            type="text" 
                                            placeholder="Recherche par mot-clé..." 
                                            value={searchKeyword} 
                                            onChange={(e) => setSearchKeyword(e.target.value)} 
                                            className="form-control me-2"
                                        />
                                        <button type="submit" className="btn btn-primary">Recherche</button>
                                    </form>

                                    <div className="tab-content" id="myTabContent">
                                        {regions.map((region, index) => (
                                            <div key={index} className={activeIndex === index + 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                                <div className="table-responsive mt-4">
                                                    {loading ? (
                                                        <p>Loading...</p>
                                                    ) : (
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Title</th>
                                                                    <th>Description</th>
                                                                    <th>Conditions</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {Array.isArray(posts) && posts.length > 0 ? (
                                                                    posts.map((post, postIndex) => (
                                                                        <tr key={postIndex}>
                                                                            <td>{post.conditionsEtAvantages.length > 15 ? post.conditionsEtAvantages.substring(0, 15) + '...' : post.conditionsEtAvantages}</td>
                                                                            <td>{post.descriptionDuPoste.length > 15 ? post.descriptionDuPoste.substring(0, 15) + '...' : post.descriptionDuPoste}</td>
                                                                            <td>{post.presentationDeLEntreprise.length > 15 ? post.presentationDeLEntreprise.substring(0, 15) + '...' : post.presentationDeLEntreprise}</td>
                                                                            <td>
                                                                                <Link 
                                                                                    href={`/${post._id}`} 
                                                                                    style={{ color: 'white', backgroundColor: '#0055FF', borderRadius: '5px', padding: '5px 10px', textDecoration: 'none' }}>
                                                                                    Voir Détails
                                                                                </Link>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                ) : (
                                                                    <tr>
                                                                        <td colSpan="4">No posts available</td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="banner-shape-wrap-three">
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" />
                    <img src="/assets/img/banner/h3_banner_shape02.png" alt="" />
                </div>
            </section>
        </>
    )
}
