import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnSmBoldIcon = (
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
      <path d='M1.688 5.938v4.375h2.625V5.937zm-1.313 0c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v4.375c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312zm8.313 5.25v4.374h2.624v-4.374zm-1.313 0c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v4.374c0 .739-.602 1.313-1.312 1.313H8.687a1.296 1.296 0 0 1-1.312-1.312zm-3.062 2.624H1.688v1.75h2.625zM1.688 12.5h2.625c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312v-1.75c0-.711.574-1.313 1.313-1.313m7-6.562v1.75h2.624v-1.75zm-1.313 0c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.312 1.312H8.687a1.296 1.296 0 0 1-1.312-1.312z' />
    </g>
    <defs>
      <clipPath id='2691923ed4879654617bb231ec8b354f__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnSmBoldIcon);
export default ForwardRef;
