import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTiktokXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M21 15.844c-2.125 0-4.047-.61-5.766-1.828v8.343c0 1.625-.453 3.078-1.359 4.36C13 28 11.813 28.937 10.313 29.53c-1.532.532-3.047.61-4.547.235-1.5-.375-2.797-1.172-3.891-2.391a7.764 7.764 0 0 1-1.828-4.172c-.156-1.531.14-3.015.89-4.453.782-1.406 1.86-2.469 3.235-3.187 1.406-.688 2.906-.938 4.5-.75v4.218c-.75-.218-1.469-.203-2.156.047-.688.219-1.266.64-1.735 1.266a3.518 3.518 0 0 0-.656 2.062c0 .719.219 1.407.656 2.063a3.53 3.53 0 0 0 1.782 1.218c.687.25 1.406.25 2.156 0a3.548 3.548 0 0 0 1.734-1.265c.438-.594.656-1.281.656-2.063V6h4.125c0 .344.032.688.094 1.031.344 1.594 1.188 2.844 2.531 3.75a6.002 6.002 0 0 0 3.141.985z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokXlIcon);
export default ForwardRef;
