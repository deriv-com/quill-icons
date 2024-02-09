import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.219 15.125H2.656q-.601-.055-.656-.656.054-.602.656-.656h4.977L1.316 7.496q-.382-.465 0-.93.465-.383.93 0l6.317 6.317V7.906q.054-.601.656-.656.601.054.656.656v6.563q-.054.601-.656.656' />
    </g>
    <defs>
      <clipPath id='7a965d61026056d29e12b962d3d6ce0a__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightSmBoldIcon);
export default ForwardRef;
