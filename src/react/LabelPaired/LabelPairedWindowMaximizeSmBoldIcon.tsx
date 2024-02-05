import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.21q.055-.354.219-.655.219-.438.656-.684.329-.192.71-.246H12.25q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23V6.211m1.313 3.665v5.25q.027.41.437.438h10.5q.41-.028.438-.438v-5.25z' />
    </g>
    <defs>
      <clipPath id='a7f739bdbc8de5ff8bc9469dc8fb5bd3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeSmBoldIcon);
export default ForwardRef;
