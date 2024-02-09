import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldSmBoldIcon = (
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
      <path d='M1.875 16.438h6.754q.438.6 1.066 1.093-.355.219-.82.219h-7q-.738-.027-1.23-.52-.493-.492-.52-1.23V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258V9.41l-1.312.52V8.125H7.124a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H1.875q-.41.027-.437.437V16q.027.41.437.438m9.816-6.508a.58.58 0 0 1 .493 0l3.28 1.312q.384.165.411.602.027.902-.3 2.023-.302 1.122-1.094 2.16-.82 1.04-2.297 1.668a.58.58 0 0 1-.493 0q-1.477-.628-2.296-1.668Q8.6 14.99 8.3 13.867 7.972 12.746 8 11.844q.027-.437.41-.602zm2.844 2.351-2.597-1.039v5.14q1.366-.737 1.968-1.886.575-1.121.63-2.215' />
    </g>
    <defs>
      <clipPath id='bfff72b7639147b0ae05c6a93b8aed12__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldSmBoldIcon);
export default ForwardRef;
