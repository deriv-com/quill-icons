import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.25 5.375q.023-.352.375-.375.352.023.375.375v8.25q-.023.352-.375.375-.352-.023-.375-.375v-3.187l-4.195 3.421a.6.6 0 0 1-.399.141.64.64 0 0 1-.468-.187.64.64 0 0 1-.188-.47V5.657q0-.28.188-.468A.64.64 0 0 1 1.656 5q.236 0 .399.14L6.25 8.564zm-4.5.492v7.266L6.227 9.5z' />
    </g>
    <defs>
      <clipPath id='49b446ab49150ade42990073c7e4555e__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionRegularIcon);
export default ForwardRef;
