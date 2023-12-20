import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignXlBoldIcon = (
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
        d='M2.297 17.25H1.125C.438 17.188.063 16.813 0 16.125c.063-.687.438-1.062 1.125-1.125h1.547c.687-2.219 1.937-4.016 3.75-5.39C8.234 8.233 10.344 7.53 12.75 7.5h1.125c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H12.75c-1.781.031-3.344.516-4.687 1.453a8.34 8.34 0 0 0-3 3.797h7.312c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H4.547a6.04 6.04 0 0 0 0 1.5h7.828c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H5.063a8.34 8.34 0 0 0 3 3.797c1.343.937 2.906 1.422 4.687 1.453h1.125c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H12.75c-2.406-.031-4.516-.734-6.328-2.11-1.813-1.374-3.063-3.171-3.75-5.39H1.125C.438 20.938.063 20.563 0 19.875c.063-.687.438-1.062 1.125-1.125h1.172a6.04 6.04 0 0 1 0-1.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignXlBoldIcon);
export default ForwardRef;
