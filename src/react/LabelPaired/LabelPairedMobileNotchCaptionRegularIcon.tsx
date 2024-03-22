import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.25v.375c0 .422-.352.75-.75.75h-1.5a.74.74 0 0 1-.75-.75V4.25h-.75A.755.755 0 0 0 1.5 5v9c0 .422.328.75.75.75h4.5c.398 0 .75-.328.75-.75V5a.77.77 0 0 0-.75-.75zm-.75 0h-1.5v.375h1.5zM.75 5c0-.82.656-1.5 1.5-1.5h4.5c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-4.5A1.48 1.48 0 0 1 .75 14z' />
    </g>
    <defs>
      <clipPath id='ccdb9c40f22909dade242cea097137fa__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchCaptionRegularIcon);
export default ForwardRef;
