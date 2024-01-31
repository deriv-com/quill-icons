import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpSmBoldIcon = (
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
      <path d='M5.965 4.816v.028l4.594 4.812q.383.464 0 .903-.492.383-.93 0L6.156 6.922v9.297q-.054.601-.656.656-.602-.055-.656-.656V6.922l-3.473 3.61q-.437.41-.93.027-.382-.438 0-.93l4.594-4.813a.63.63 0 0 1 .465-.191q.273 0 .465.191' />
    </g>
    <defs>
      <clipPath id='3835af8e748f5c74__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpSmBoldIcon);
export default ForwardRef;
