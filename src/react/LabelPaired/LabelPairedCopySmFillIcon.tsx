import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopySmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.063 3.75h3.39c.328 0 .684.164.93.41l1.832 1.832c.246.246.41.602.41.93v6.016c0 .738-.602 1.312-1.312 1.312h-5.25a1.296 1.296 0 0 1-1.313-1.312V5.062c0-.71.574-1.312 1.313-1.312m-4.375 3.5h2.187V9h-1.75v7h5.25v-.875h1.75v1.313c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312V8.563c0-.711.574-1.313 1.313-1.313' />
    </g>
    <defs>
      <clipPath id='e8dc371059cd6d39a9ababfba6169458__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopySmFillIcon);
export default ForwardRef;
