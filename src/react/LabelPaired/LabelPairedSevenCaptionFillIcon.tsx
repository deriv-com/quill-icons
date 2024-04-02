import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5c0-.398.328-.75.75-.75h6c.258 0 .516.164.633.398a.72.72 0 0 1 0 .75l-5.25 9a.753.753 0 0 1-1.031.258.753.753 0 0 1-.258-1.031L5.688 5.75H1A.74.74 0 0 1 .25 5' />
    </g>
    <defs>
      <clipPath id='0c3bbaaf8a12354d2a459c851dc10ba0__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenCaptionFillIcon);
export default ForwardRef;
