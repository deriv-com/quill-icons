import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 6.813v7.875H2.75V6.812zm-1.313 0c0-.711.574-1.313 1.313-1.313H2.75c.71 0 1.313.602 1.313 1.313v7.875C4.063 15.426 3.46 16 2.75 16H1.438a1.296 1.296 0 0 1-1.313-1.312zm6.125 0v7.875h1.313V6.812zm-1.312 0c0-.711.574-1.313 1.312-1.313h1.313c.71 0 1.312.602 1.312 1.313v7.875c0 .738-.602 1.312-1.312 1.312H6.25a1.296 1.296 0 0 1-1.312-1.312z' />
    </g>
    <defs>
      <clipPath id='4d3345e76e59f68d19d571b8a18a9d53__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmBoldIcon);
export default ForwardRef;
