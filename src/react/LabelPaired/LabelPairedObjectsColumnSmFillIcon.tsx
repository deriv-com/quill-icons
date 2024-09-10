import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnSmFillIcon = (
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
      <path d='M1.688 4.625h2.625c.71 0 1.312.602 1.312 1.313v4.375c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312V5.937c0-.71.574-1.312 1.313-1.312m7 5.25h2.624c.711 0 1.313.602 1.313 1.313v4.374c0 .739-.602 1.313-1.312 1.313H8.687a1.296 1.296 0 0 1-1.312-1.312v-4.376c0-.71.574-1.312 1.313-1.312M.374 14.688c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v.874c0 .739-.602 1.313-1.312 1.313H1.688a1.296 1.296 0 0 1-1.313-1.312zM8.688 4.624h2.624c.711 0 1.313.602 1.313 1.313v.875c0 .738-.602 1.312-1.312 1.312H8.687a1.296 1.296 0 0 1-1.312-1.312v-.875c0-.711.574-1.313 1.313-1.313' />
    </g>
    <defs>
      <clipPath id='cd602365aec56406038da429324e52a6__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnSmFillIcon);
export default ForwardRef;
