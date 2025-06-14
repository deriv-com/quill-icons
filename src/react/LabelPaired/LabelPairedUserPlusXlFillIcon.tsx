import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserPlusXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 12a5.95 5.95 0 0 1 3-5.156c1.828-1.078 4.125-1.078 6 0 1.828 1.078 3 3.047 3 5.156 0 2.156-1.172 4.125-3 5.203-1.875 1.078-4.172 1.078-6 0A5.97 5.97 0 0 1 4.5 12M0 28.64c0-4.64 3.703-8.39 8.344-8.39h4.265C17.25 20.25 21 24 21 28.64c0 .75-.656 1.36-1.406 1.36H1.359C.61 30 0 29.39 0 28.64m23.625-8.015v-3h-3c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3v-3c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v3h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3v3a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='e23698c8c5e98cd4089184625b49b4f9__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserPlusXlFillIcon);
export default ForwardRef;
