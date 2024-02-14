import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardCaptionRegularIcon = (
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
      <path d='M11.11 9.5 6 5.797v7.406zM5.952 5q.234 0 .422.14l5.39 3.915Q12 9.22 12 9.5a.52.52 0 0 1-.234.445L6.375 13.86a.7.7 0 0 1-.422.141.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493v-2.414l-4.125 2.976A.7.7 0 0 1 .703 14a.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493V5.703q0-.305.21-.492Q.4 5 .704 5q.234 0 .422.14L5.25 8.118V5.703q0-.305.21-.492Q5.65 5 5.954 5M5.25 9.945v-.89L.75 5.797v7.406z' />
    </g>
    <defs>
      <clipPath id='ab481013eca41d106332ca0cd001f4ee__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionRegularIcon);
export default ForwardRef;
