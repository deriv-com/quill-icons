import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 6.938v3.093l5.531-3.875A.9.9 0 0 1 15.062 6q.407 0 .657.281a.84.84 0 0 1 .281.657v10.125q0 .406-.281.656a.84.84 0 0 1-.656.281 1 1 0 0 1-.532-.156L9 13.969v3.094q0 .406-.281.656a.84.84 0 0 1-.656.281.9.9 0 0 1-.563-.187l-7.187-5.22A.69.69 0 0 1 0 12q0-.375.313-.594L7.5 6.187A.9.9 0 0 1 8.063 6q.406 0 .656.281A.84.84 0 0 1 9 6.938m0 4.937v.25L14.5 16V8.031zM2.031 12 7.5 15.969V8.03z' />
    </g>
    <defs>
      <clipPath id='053a4e70a4d0d1021101669cc89afd33__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardMdBoldIcon);
export default ForwardRef;
