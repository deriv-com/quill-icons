import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.688 22.922a3.989 3.989 0 0 1 1.078-1.735l14.25-14.296c.625-.563 1.328-.844 2.109-.844.813 0 1.516.281 2.11.844l1.874 1.875.375.468a3 3 0 0 1 .47 1.922c-.063.688-.345 1.297-.845 1.828L8.86 27.234l-.187.188c-.469.406-1 .703-1.594.89l-3.656 1.079-1.969.562c-.437.125-.812.031-1.125-.281-.312-.313-.406-.688-.281-1.125l.562-1.969zm2.156.61-.281 1.124-.797 2.578 2.578-.75 1.125-.328c.281-.093.547-.25.797-.468l10.687-10.735-2.906-2.906L4.359 22.734l-.046.047-.047.047a2.341 2.341 0 0 0-.422.703'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenXlBoldIcon);
export default ForwardRef;
