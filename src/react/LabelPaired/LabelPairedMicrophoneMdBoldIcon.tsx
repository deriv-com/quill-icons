import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 7c0-.812-.687-1.5-1.5-1.5A1.5 1.5 0 0 0 4.5 7v5c0 .844.656 1.5 1.5 1.5A1.5 1.5 0 0 0 7.5 12zM3 7a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0zm-1 3.75V12c0 2.219 1.781 4 4 4 2.188 0 4-1.781 4-4v-1.25a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75V12c0 2.813-2.094 5.094-4.75 5.469V18.5h1.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.5v-1.031A5.5 5.5 0 0 1 .5 12v-1.25a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='70df94cf78e3a0be84b5fa5a973063a5__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneMdBoldIcon);
export default ForwardRef;
