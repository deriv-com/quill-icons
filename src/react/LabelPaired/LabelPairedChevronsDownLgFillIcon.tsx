import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.86 23.898a1.205 1.205 0 0 1-1.758 0l-7.5-7.5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0L10 21.242l6.602-6.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757zm7.5-15-7.5 7.5a1.205 1.205 0 0 1-1.758 0l-7.5-7.5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0L10 13.742l6.602-6.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' />
    </g>
    <defs>
      <clipPath id='2f386959322510305d2eba56b13d90b3__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownLgFillIcon);
export default ForwardRef;
