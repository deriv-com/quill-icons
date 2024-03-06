import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.563 26.672 13.5 19.969V16.03l8.063-6.703q.703-.562 1.593-.187.798.42.844 1.359v15q-.046.937-.844 1.36-.89.375-1.593-.188M12 22.5v3q-.046.937-.844 1.36-.89.375-1.594-.188l-9-7.5Q0 18.703 0 18q0-.704.563-1.172l9-7.5q.703-.562 1.593-.187.797.42.844 1.359v12' />
    </g>
    <defs>
      <clipPath id='36cc46b855b16d0ac55fb175a72171f5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlFillIcon);
export default ForwardRef;
