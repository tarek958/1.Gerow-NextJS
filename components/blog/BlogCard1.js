import Image from "next/image"
import Link from "next/link"

export default function BlogCard1({ item }) {
    return (
        <>
            <div className="col-md-6">
                <div className="blog-post-item-two">
                    <div className="blog-post-thumb-two">
                        <Link href={`/blog/${item.id}`}> <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            src={`/assets/img/blog/${item.img}`} alt="" /></Link>
                        <Link href="/blog" className="tag tag-two">Development</Link>
                    </div>
                    <div className="blog-post-content-two">
                        <h2 className="title"><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                        <p>QUAND FAIRE APPEL À UN CHASSEUR DE TÊTE ? La réussite d’une entreprise passe aujourd’hui majoritairement par les collaborateurs qui la composent, ils construisent son savoir-faire, sa valeur ajoutée, et donc plus [...]</p>
                        <div className="blog-meta">
                            <ul className="list-wrap">
                                
                                <li><i className="far fa-calendar" />MAI, 2020</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
