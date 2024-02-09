import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchLgRegularIcon = (
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
      <path d='M15 13.625q0-1.875-.937-3.437a6.77 6.77 0 0 0-2.5-2.5Q9.922 6.75 8.124 6.75t-3.437.938a6.77 6.77 0 0 0-2.5 2.5 6.56 6.56 0 0 0-.938 3.437q0 1.875.938 3.438a6.77 6.77 0 0 0 2.5 2.5q1.64.937 3.437.937t3.438-.937a6.77 6.77 0 0 0 2.5-2.5A6.56 6.56 0 0 0 15 13.625m-1.602 6.172q-2.187 1.874-5.273 1.953-3.438-.078-5.742-2.383Q.079 17.063 0 13.625q.078-3.438 2.383-5.742Q4.687 5.579 8.125 5.5q3.438.078 5.742 2.383 2.305 2.304 2.383 5.742-.078 3.086-1.953 5.273l5.508 5.547q.39.43 0 .86-.43.39-.86 0z' />
    </g>
    <defs>
      <clipPath id='c6d8b6969f812e21776ebbf92b20abf8__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchLgRegularIcon);
export default ForwardRef;
