import { Link, LinkProps } from 'react-router-dom'
const OrangeLink = (props: LinkProps) => {
    return (
        <Link {...props} style={{ color: 'orange' }}>
            {props.children}
        </Link>
    )
}
export default OrangeLink