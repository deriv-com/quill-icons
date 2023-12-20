import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedNineXlRegularIcon = (
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
        d='M1.5 15c.031 1.688.61 3.11 1.734 4.266C4.391 20.39 5.813 20.969 7.5 21c1.688-.031 3.094-.594 4.219-1.687 1.094-1.125 1.687-2.516 1.781-4.172V15c-.031-1.687-.61-3.11-1.734-4.266C10.609 9.61 9.188 9.031 7.5 9c-1.687.031-3.11.61-4.266 1.734C2.11 11.891 1.531 13.313 1.5 15m7.547 7.36c-.5.093-1.016.14-1.547.14-2.125-.062-3.89-.797-5.297-2.203C.797 18.89.063 17.125 0 15c.063-2.125.797-3.89 2.203-5.297C3.61 8.297 5.375 7.563 7.5 7.5c2.125.063 3.89.797 5.297 2.203C14.203 11.11 14.937 12.875 15 15v.281c-.094 1.813-.734 3.422-1.922 4.828l-7.265 8.157c-.344.312-.704.328-1.079.047-.312-.344-.328-.704-.046-1.079z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineXlRegularIcon);
export default ForwardRef;
