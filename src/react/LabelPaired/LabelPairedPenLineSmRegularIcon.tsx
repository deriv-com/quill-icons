import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineSmRegularIcon = (
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
      <path d='M11.883 4.844q-.465-.383-.93 0L9.45 6.32l2.106 2.106 1.476-1.504q.383-.465 0-.93zm-9.488 8.531q-.301.328-.438.766l-.738 2.515 2.515-.738q.438-.137.766-.437l6.426-6.426L8.82 6.949zm7.93-9.16q.465-.438 1.093-.438.602 0 1.066.438L13.66 5.39q.438.465.438 1.066 0 .63-.438 1.094l-8.558 8.558a2.6 2.6 0 0 1-1.094.657l-3.309.957q-.273.081-.437-.11-.191-.164-.11-.41l.957-3.308q.192-.657.684-1.122zm-3.637 12.66h8.75q.41.027.437.438-.027.41-.437.437h-8.75q-.411-.027-.438-.437.027-.411.438-.438' />
    </g>
    <defs>
      <clipPath id='832fc2be40b0d18d5051a62e4645fb56__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineSmRegularIcon);
export default ForwardRef;
