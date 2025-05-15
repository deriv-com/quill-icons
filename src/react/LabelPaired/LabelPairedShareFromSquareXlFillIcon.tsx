import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.5 16.5h-2.203c-2.11 0-3.797 1.734-3.797 3.844 0 1.031.469 1.593.89 1.875.329.234.61.562.61.984a.84.84 0 0 1-.844.844h-.14a.9.9 0 0 1-.328-.094C9.844 23.578 6 21.656 6 17.25c0-3.703 3-6.75 6.75-6.75h3.75V7.64c0-.89.703-1.64 1.594-1.64.422 0 .797.188 1.078.422l6.515 5.86c.329.327.563.75.563 1.218 0 .516-.234.938-.562 1.266l-6.516 5.859c-.281.281-.656.375-1.031.375H18a1.48 1.48 0 0 1-1.5-1.5zm-12.75-6c-.422 0-.75.375-.75.75v15c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75V24c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v2.25c0 2.11-1.687 3.75-3.75 3.75h-15C1.64 30 0 28.36 0 26.25v-15C0 9.188 1.64 7.5 3.75 7.5H6c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5z' />
    </g>
    <defs>
      <clipPath id='9bd40b9791201151080fd0a5508f9091__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareXlFillIcon);
export default ForwardRef;
