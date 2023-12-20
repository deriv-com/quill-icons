import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHouseBlankXlRegularIcon = (
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
        d='M12.984 6.188c.344-.25.688-.25 1.032 0l12.75 11.25c.312.343.328.703.047 1.078-.344.312-.704.328-1.079.047L24 17.016v9.234c-.031 1.063-.39 1.953-1.078 2.672-.719.687-1.61 1.047-2.672 1.078H6.75c-1.062-.031-1.953-.39-2.672-1.078-.687-.719-1.047-1.61-1.078-2.672v-9.234l-1.734 1.547c-.375.28-.735.265-1.078-.047-.282-.375-.266-.735.046-1.078zM4.5 15.703V26.25c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h13.5a2.446 2.446 0 0 0 1.594-.656c.406-.438.625-.969.656-1.594V15.703l-9-7.969z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankXlRegularIcon);
export default ForwardRef;
