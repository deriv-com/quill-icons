import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.75C.25 5.352.578 5 1 5c.398 0 .75.352.75.75v7.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75zm3.21 4.29a.723.723 0 0 1 0-1.056l3-3a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.055L5.805 8.75H10c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H5.805l1.71 1.734a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0z' />
    </g>
    <defs>
      <clipPath id='e4e47cb87be7c12dad185932f87c75a1__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineCaptionFillIcon);
export default ForwardRef;
