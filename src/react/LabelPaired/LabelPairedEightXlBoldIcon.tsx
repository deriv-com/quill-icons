import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 13.313a5.83 5.83 0 0 1-2.062 4.453A5.73 5.73 0 0 1 15 22.688 5.81 5.81 0 0 1 9.188 28.5H5.812A5.78 5.78 0 0 1 0 22.688c0-2.063 1.078-3.938 2.766-4.922C1.5 16.688.75 15.094.75 13.313A5.81 5.81 0 0 1 6.563 7.5h1.875c3.187 0 5.812 2.625 5.812 5.813m-5.812 5.812H5.813a3.56 3.56 0 0 0-3.563 3.563 3.56 3.56 0 0 0 3.563 3.562h3.375a3.56 3.56 0 0 0 3.562-3.562 3.56 3.56 0 0 0-3.562-3.563zm0-2.25A3.56 3.56 0 0 0 12 13.313 3.56 3.56 0 0 0 8.438 9.75H6.562A3.56 3.56 0 0 0 3 13.313a3.56 3.56 0 0 0 3.563 3.562z' />
    </g>
    <defs>
      <clipPath id='1748523c068b63bb050176d1bd5a7ef3__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightXlBoldIcon);
export default ForwardRef;
