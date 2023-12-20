import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenXlBoldIcon = (
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
        d='M1.125 6h24.75c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H1.125C.438 8.188.063 7.813 0 7.125.063 6.438.438 6.063 1.125 6M1.5 9.75h2.25v10.125c.031.219.156.344.375.375h18.75c.219-.031.344-.156.375-.375V9.75h2.25v10.125c-.031.75-.281 1.375-.75 1.875-.5.469-1.125.719-1.875.75h-8.25v2.156l3.422 3.422c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0L13.5 26.719l-2.953 2.953c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l3.422-3.422V22.5h-8.25c-.75-.031-1.375-.281-1.875-.75-.469-.5-.719-1.125-.75-1.875z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenXlBoldIcon);
export default ForwardRef;
