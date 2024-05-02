import Link from "next/link";

export default function BlogCard({title, author, coverPhoto, datePublished, slug, id}) {
    return (
        <div>
            <Link href={"/posts/" + slug}>
                <div className="">
                    <img src={coverPhoto.url} alt="cover photo" />
                </div>
            </Link>
        </div>
    )
}