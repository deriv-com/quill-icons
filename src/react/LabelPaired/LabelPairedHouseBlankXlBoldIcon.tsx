import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHouseBlankXlBoldIcon = (
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
        d='m14.25 6.281 12.375 10.5c.469.469.5 1 .094 1.594-.469.469-.985.5-1.547.094L24 17.53v8.719c-.031 1.063-.39 1.953-1.078 2.672-.719.687-1.61 1.047-2.672 1.078H6.75c-1.062-.031-1.953-.39-2.672-1.078-.687-.719-1.047-1.61-1.078-2.672v-8.719l-1.172.938c-.562.406-1.078.375-1.547-.094-.406-.594-.375-1.125.094-1.594l12.375-10.5c.5-.375 1-.375 1.5 0m7.5 9.328L13.5 8.625l-8.25 6.984V26.25c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h13.5c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankXlBoldIcon);
export default ForwardRef;
