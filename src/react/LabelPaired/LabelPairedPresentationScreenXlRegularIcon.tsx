import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenXlRegularIcon = (
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
        d='M.75 6h25.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75C.281 7.469.031 7.219 0 6.75c.031-.469.281-.719.75-.75m.75 3H3v10.5c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h18c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V9h1.5v10.5c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89h-8.25v1.922l4.266 4.312c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0L13.5 25.828l-3.984 3.938c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l4.266-4.312V22.5H4.5c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenXlRegularIcon);
export default ForwardRef;
