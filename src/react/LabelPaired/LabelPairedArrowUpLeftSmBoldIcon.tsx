import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftSmBoldIcon = (
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
      <path d='M1.781 6.375v.027h6.563c.355 0 .656.274.656.657 0 .355-.3.656-.656.656H3.34l6.316 6.316a.6.6 0 0 1 0 .903.6.6 0 0 1-.902 0L2.438 8.617v4.977c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656V7.03c0-.355.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='1f19f7da5a11062452a169349debbdc4__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmBoldIcon);
export default ForwardRef;
