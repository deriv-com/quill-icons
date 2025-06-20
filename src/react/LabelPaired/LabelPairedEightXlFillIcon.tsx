import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightXlFillIcon = (
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
      <path d='M14.25 13.5c0 1.64-.656 3.094-1.687 4.172C14.016 18.797 15 20.532 15 22.5c0 3.328-2.719 6-6 6H6c-3.328 0-6-2.672-6-6 0-1.969.938-3.703 2.438-4.828C1.359 16.594.75 15.14.75 13.5c0-3.281 2.672-6 6-6h1.5c3.281 0 6 2.719 6 6m-6 6H6c-1.687 0-3 1.36-3 3 0 1.688 1.313 3 3 3h3c1.64 0 3-1.312 3-3 0-1.64-1.36-3-3-3zm0-3c1.64 0 3-1.312 3-3 0-1.64-1.36-3-3-3h-1.5c-1.687 0-3 1.36-3 3 0 1.688 1.313 3 3 3z' />
    </g>
    <defs>
      <clipPath id='7ef4bee85c1524092677dede8472b121__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightXlFillIcon);
export default ForwardRef;
