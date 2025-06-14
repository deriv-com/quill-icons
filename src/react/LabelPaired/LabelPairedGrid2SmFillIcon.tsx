import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2SmFillIcon = (
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
      <path d='M6.125 5.938v2.625c0 .738-.602 1.312-1.312 1.312H2.188A1.296 1.296 0 0 1 .875 8.563V5.937c0-.71.574-1.312 1.313-1.312h2.625c.71 0 1.312.602 1.312 1.313m0 7v2.624c0 .739-.602 1.313-1.312 1.313H2.188a1.296 1.296 0 0 1-1.313-1.312v-2.626c0-.71.574-1.312 1.313-1.312h2.625c.71 0 1.312.602 1.312 1.313m1.75-7c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v2.625c0 .738-.602 1.312-1.312 1.312H9.187a1.296 1.296 0 0 1-1.312-1.312zm5.25 7v2.624c0 .739-.602 1.313-1.312 1.313H9.187a1.296 1.296 0 0 1-1.312-1.312v-2.626c0-.71.574-1.312 1.313-1.312h2.624c.711 0 1.313.602 1.313 1.313' />
    </g>
    <defs>
      <clipPath id='f3274760b0f9638fbd2c9093c9b82da7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2SmFillIcon);
export default ForwardRef;
