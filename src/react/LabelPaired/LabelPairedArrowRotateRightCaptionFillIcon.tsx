import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightCaptionFillIcon = (
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
      <path d='m9.047 7.25-.399-.398a3.79 3.79 0 0 0-5.32 0 3.79 3.79 0 0 0 0 5.32 3.79 3.79 0 0 0 5.32 0c.282-.305.75-.305 1.055 0 .281.281.281.75 0 1.055a5.277 5.277 0 0 1-7.43 0 5.277 5.277 0 0 1 0-7.43 5.277 5.277 0 0 1 7.43 0l.422.422V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v3c0 .422-.352.75-.75.75h-3a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75z' />
    </g>
    <defs>
      <clipPath id='32f8bf1c52e31f219c3376ee22e510de__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightCaptionFillIcon);
export default ForwardRef;
