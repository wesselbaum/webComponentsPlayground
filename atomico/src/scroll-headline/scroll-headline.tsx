import {c, css, Props} from "atomico";

function scrollHeadline({id}: Props<typeof  scrollHeadline>) {
    return (
        <host shadowDom>
            <h1 id={id} className="headline"><a className="link" href={'#' + id}>
                <svg width="30" height="30" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="1" id="_1">
                        <path
                            d="M149.67,393A95.49,95.49,0,0,1,82.11,230l64.7-64.7a95.65,95.65,0,0,1,135.1,0h0a95.65,95.65,0,0,1,0,135.11l-64.69,64.69A95.23,95.23,0,0,1,149.67,393Zm64.69-225.69A65.29,65.29,0,0,0,168,186.49l-64.7,64.7A65.53,65.53,0,0,0,196,343.86l64.7-64.7a65.51,65.51,0,0,0-46.34-111.84Z"/>
                        <path
                            d="M295.9,360.71a95,95,0,0,1-24.13-3.1,15,15,0,0,1,7.6-29,65.52,65.52,0,0,0,62.87-17.08l64.7-64.69a65.53,65.53,0,0,0-92.68-92.68l-64.69,64.7a65.84,65.84,0,0,0-17.08,62.89,15,15,0,0,1-29,7.55,95.92,95.92,0,0,1,24.9-91.65l64.69-64.7A95.53,95.53,0,1,1,428.15,268l-64.69,64.69A94.92,94.92,0,0,1,295.9,360.71Z"/>
                    </g>
                </svg>
            </a>
                <slot></slot>
            </h1>
        </host>
    )
}

scrollHeadline.props = {
    id: {
        type: String,
        value: ""
    }
}

scrollHeadline.styles = css`
    .headline {text-decoration: underline red}
    .link { opacity: 0; display: inline }
    .headline:hover .link {opacity: 1}

`

export const ScrollHeadline = c(scrollHeadline);

customElements.define("scroll-headline", ScrollHeadline);