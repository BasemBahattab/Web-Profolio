import Link from 'next/link'

export default function nav() {
    return (
        <nav>
            <ul>
                <Link href="/">
                    <button id='Home'>Home</button>
                </Link>
                <Link href="/aboutMe">
                    <button className='About Me'>About Me</button>
                </Link>
                <Link href="/projects">
                    <button className='Projects'>Projects</button>
                </Link>
                <Link href="/contactMe">
                    <button className='contactMe'>Contact Me</button>
                </Link>
            </ul>
        </nav>
    )
}