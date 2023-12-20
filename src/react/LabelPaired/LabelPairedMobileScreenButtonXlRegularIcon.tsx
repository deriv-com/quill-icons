import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileScreenButtonXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.5 7.5h-9c-.437 0-.797.14-1.078.422C3.14 8.203 3 8.562 3 9v12h12V9c0-.437-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422m1.5 15H3V27c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h9c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078zM4.5 6h9c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v18c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89h-9c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11V9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89m2.25 19.5c.031-.469.281-.719.75-.75h3c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-3c-.469-.031-.719-.281-.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonXlRegularIcon);
export default ForwardRef;
