import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.305 8.371a.92.92 0 0 1-.657.492l-3.746.547 2.707 2.707c.22.192.301.492.246.766l-.628 3.828 3.335-1.805a.93.93 0 0 1 .848 0l3.336 1.805-.629-3.828a.81.81 0 0 1 .246-.766L14.07 9.41l-3.746-.547c-.3-.054-.547-.218-.656-.492L7.973 4.926zm5.414 9.324h.027L8 15.672l-3.746 2.023a.74.74 0 0 1-.711-.054c-.191-.164-.3-.41-.246-.657l.71-4.238L.974 9.738a.64.64 0 0 1-.164-.683c.082-.22.273-.41.52-.438l4.183-.629 1.886-3.855c.11-.219.329-.383.575-.383.273 0 .492.164.601.383l1.887 3.855 4.184.63c.246.027.437.218.52.437a.64.64 0 0 1-.165.683l-3.035 3.008.71 4.238c.055.246-.054.493-.245.657a.73.73 0 0 1-.711.054' />
    </g>
    <defs>
      <clipPath id='f21a7b433d0d0e185b46f6f40b80a5eb__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmRegularIcon);
export default ForwardRef;
