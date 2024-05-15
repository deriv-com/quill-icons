import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.313 8.82-2.5 2.97c3.28.155 5.937 2.89 5.937 6.21a6.243 6.243 0 0 1-6.25 6.25A6.22 6.22 0 0 1 .25 18v-.156c.04-1.446.547-2.852 1.484-3.946l5.664-6.68c.43-.546 1.25-.585 1.758-.155.547.43.586 1.25.156 1.757M10.25 18c0-1.328-.742-2.54-1.875-3.242-1.172-.664-2.617-.664-3.75 0C3.453 15.46 2.75 16.672 2.75 18c0 1.367.703 2.578 1.875 3.281 1.133.664 2.578.664 3.75 0 1.133-.703 1.875-1.914 1.875-3.281' />
    </g>
    <defs>
      <clipPath id='2b66126ba39801a30fbc9e3b8c675daa__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixLgFillIcon);
export default ForwardRef;
