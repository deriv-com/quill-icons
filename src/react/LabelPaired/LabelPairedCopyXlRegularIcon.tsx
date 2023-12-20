import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCopyXlRegularIcon = (
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
        d='M18 22.5c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-9.562a.624.624 0 0 0-.234-.516l-3.188-3.188a.624.624 0 0 0-.515-.234H10.5c-.437 0-.797.14-1.078.422C9.14 8.203 9 8.562 9 9v12c0 .438.14.797.422 1.078.281.281.64.422 1.078.422zm2.344-12.656c.437.437.656.969.656 1.594V21c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89h-7.5c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11V9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h5.063a2.17 2.17 0 0 1 1.593.656zM3 12h3v1.5H3c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v12c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h7.5c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-1.5h1.5V27c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyXlRegularIcon);
export default ForwardRef;
