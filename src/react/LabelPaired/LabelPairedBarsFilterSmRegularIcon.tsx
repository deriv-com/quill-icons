import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 5.938q.027-.411.438-.438h11.375q.41.027.437.438-.027.41-.437.437H.813q-.411-.027-.438-.437m1.75 4.375q.027-.411.438-.438h7.874q.411.027.438.438-.027.41-.437.437H2.561q-.41-.027-.437-.437m6.125 4.374q-.027.411-.437.438H5.188q-.411-.027-.438-.437.027-.411.438-.438h2.625q.41.027.437.438' />
    </g>
    <defs>
      <clipPath id='281de92af29d10160a1847e13d70433b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterSmRegularIcon);
export default ForwardRef;
