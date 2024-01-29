import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54q0 .328.21.54.212.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21M1.5 8Q.657 7.976.21 7.25q-.42-.75 0-1.5Q.658 5.024 1.5 5q.844.024 1.29.75.42.75 0 1.5-.446.726-1.29.75m6 3.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54q0 .328.21.54.212.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21m0 2.25q-.843-.024-1.29-.75-.42-.75 0-1.5.447-.726 1.29-.75.844.024 1.29.75.42.75 0 1.5-.446.726-1.29.75m1.383-8.367-8.25 8.25q-.258.234-.516 0-.234-.258 0-.516l8.25-8.25q.258-.234.516 0 .234.258 0 .516' />
    </g>
    <defs>
      <clipPath id='8123f73c465e0987b164f01a878aaa29__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentCaptionRegularIcon);
export default ForwardRef;
