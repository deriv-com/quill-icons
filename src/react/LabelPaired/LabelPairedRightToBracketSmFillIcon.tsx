import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketSmFillIcon = (
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
      <path d='m5.934 6.648 3.363 3.364c.191.191.328.465.328.738 0 .3-.137.574-.328.766l-3.363 3.363c-.164.164-.41.246-.657.246a.91.91 0 0 1-.902-.902V12.5h-3.5A.864.864 0 0 1 0 11.625v-1.75C0 9.41.383 9 .875 9h3.5V7.305c0-.492.41-.93.902-.93.246 0 .493.11.657.273m3.691 8.477h1.75a.88.88 0 0 0 .875-.875v-7a.9.9 0 0 0-.875-.875h-1.75A.864.864 0 0 1 8.75 5.5c0-.465.383-.875.875-.875h1.75A2.626 2.626 0 0 1 14 7.25v7a2.626 2.626 0 0 1-2.625 2.625h-1.75A.864.864 0 0 1 8.75 16c0-.465.383-.875.875-.875' />
    </g>
    <defs>
      <clipPath id='3877f764aeff072b5a67d7df2a0ff15c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketSmFillIcon);
export default ForwardRef;
