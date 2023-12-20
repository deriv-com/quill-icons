import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpAZXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M19.5 7.5c.469 0 .813.203 1.031.61l3.75 7.5c.219.656.047 1.171-.515 1.546-.657.219-1.157.047-1.5-.515l-.657-1.266h-4.218l-.657 1.266c-.343.593-.843.765-1.5.515-.593-.375-.765-.89-.515-1.547l3.75-7.5c.25-.375.593-.578 1.031-.609m-.984 5.625h1.968l-.984-1.969zM6.703 7.828c.531-.437 1.063-.437 1.594 0l4.5 4.5c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0l-2.578-2.578v16.031c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V11.344l-2.578 2.578c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594zM16.5 19.5h6c.469.031.813.25 1.031.656.188.438.125.844-.187 1.219l-4.36 4.875H22.5c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-6c-.469-.031-.812-.25-1.031-.656-.188-.438-.125-.844.187-1.219l4.36-4.875H16.5c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZXlBoldIcon);
export default ForwardRef;
