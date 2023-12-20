import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTwoXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.938 9.75c-1.313.031-2.422.484-3.329 1.36l-1.687 1.687c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l1.688-1.64C3.359 8.219 5 7.53 6.938 7.5h.328c1.875.063 3.437.703 4.687 1.922 1.219 1.25 1.86 2.812 1.922 4.687-.031 1.907-.734 3.516-2.11 4.829l-7.78 7.312h9.89c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H1.125c-.5-.031-.844-.266-1.031-.703-.156-.469-.063-.875.281-1.219l9.89-9.281c.876-.875 1.329-1.938 1.36-3.188-.031-1.218-.453-2.25-1.266-3.093-.843-.813-1.875-1.235-3.093-1.266z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoXlBoldIcon);
export default ForwardRef;
