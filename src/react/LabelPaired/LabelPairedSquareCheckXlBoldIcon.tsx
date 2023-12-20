import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSquareCheckXlBoldIcon = (
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
        d='M3 9.75c-.469.031-.719.281-.75.75v15c.031.469.281.719.75.75h15c.469-.031.719-.281.75-.75v-15c-.031-.469-.281-.719-.75-.75zm-3 .75c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11zm15.797 5.297-6 6c-.531.437-1.063.437-1.594 0l-3-3c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0L9 19.406l5.203-5.203c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckXlBoldIcon);
export default ForwardRef;
