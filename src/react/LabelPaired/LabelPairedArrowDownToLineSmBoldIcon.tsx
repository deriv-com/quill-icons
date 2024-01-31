import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineSmBoldIcon = (
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
      <path d='M10.094 16.875H.906q-.601-.055-.656-.656.054-.602.656-.657h9.188q.601.056.656.657-.055.601-.656.656m-5.059-3.719v.028l-3.5-3.72q-.383-.49.028-.929.465-.383.93.027l2.35 2.516V5.281q.056-.601.657-.656.602.054.656.656v5.797l2.38-2.515q.435-.41.929-.028.383.438.027.902l-3.5 3.72a.68.68 0 0 1-.492.218.6.6 0 0 1-.465-.219' />
    </g>
    <defs>
      <clipPath id='1d164e8ff19817b4__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineSmBoldIcon);
export default ForwardRef;
