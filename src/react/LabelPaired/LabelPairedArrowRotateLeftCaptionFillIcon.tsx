import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.93 7.25h1.195c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-3A.74.74 0 0 1 .375 8V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v1.219l.398-.422a5.277 5.277 0 0 1 7.43 0 5.277 5.277 0 0 1 0 7.43 5.277 5.277 0 0 1-7.43 0c-.28-.305-.28-.774 0-1.055.305-.305.774-.305 1.055 0a3.79 3.79 0 0 0 5.32 0 3.79 3.79 0 0 0 0-5.32 3.79 3.79 0 0 0-5.32 0z' />
    </g>
    <defs>
      <clipPath id='f6223b35b14b6cd5b9de498394f3d959__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftCaptionFillIcon);
export default ForwardRef;
