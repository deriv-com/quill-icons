import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.625 11.75q-1.758-.04-2.695-1.562-.86-1.563 0-3.126Q3.867 5.54 5.625 5.5q1.758.039 2.695 1.563.86 1.562 0 3.125-.937 1.523-2.695 1.562m14.375 0q-1.758-.04-2.695-1.562-.86-1.563 0-3.126Q18.242 5.54 20 5.5q1.758.039 2.695 1.563.86 1.562 0 3.125Q21.758 11.71 20 11.75M0 17.18q.04-1.797 1.21-2.97Q2.384 13.04 4.18 13h1.64q.938 0 1.758.39a5 5 0 0 0-.078.86q.078 2.305 1.68 3.75H.82q-.741-.078-.82-.82m15.82.82q1.602-1.445 1.68-3.75 0-.43-.078-.86A4 4 0 0 1 19.18 13h1.64q1.797.04 2.97 1.21 1.17 1.173 1.21 2.97-.079.742-.82.82zm-3.32-5.625q-1.055.038-1.64.938-.47.937 0 1.874.585.9 1.64.938 1.055-.039 1.64-.937.47-.938 0-1.876-.585-.898-1.64-.937m0 5.625a3.6 3.6 0 0 1-1.875-.508A3.759 3.759 0 0 1 8.75 14.25a3.76 3.76 0 0 1 1.875-3.242A3.6 3.6 0 0 1 12.5 10.5q1.015 0 1.875.508a3.759 3.759 0 0 1 1.875 3.242 3.76 3.76 0 0 1-1.875 3.242A3.6 3.6 0 0 1 12.5 18m-2.305 3.125q-1.171.039-2.03.703a3.2 3.2 0 0 0-1.173 1.797h11.016a3.2 3.2 0 0 0-1.172-1.797q-.86-.664-2.031-.703zm0-1.875h4.61q2.187.04 3.672 1.523Q19.96 22.258 20 24.445q-.078.977-1.055 1.055H6.055Q5.078 25.422 5 24.445q.04-2.187 1.523-3.672 1.485-1.484 3.672-1.523' />
    </g>
    <defs>
      <clipPath id='4ddc02efeea1357eb3fdf9cae4eec428__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersLgBoldIcon);
export default ForwardRef;
