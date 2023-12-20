import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImagePolaroidUserXlBoldIcon = (
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
        d='M2.25 25.5c.031.469.281.719.75.75h15c.469-.031.719-.281.75-.75v-2.25H2.25zM15.656 21h3.094V10.5c-.031-.469-.281-.719-.75-.75H3c-.469.031-.719.281-.75.75V21h3.094a3.091 3.091 0 0 1 1.031-1.594c.531-.437 1.156-.656 1.875-.656h4.5c.719 0 1.344.219 1.875.656.5.407.844.938 1.031 1.594M21 10.5v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11M7.5 14.25c.031-1.125.531-1.984 1.5-2.578 1-.563 2-.563 3 0 .969.594 1.469 1.453 1.5 2.578-.031 1.125-.531 1.984-1.5 2.578-1 .563-2 .563-3 0-.969-.594-1.469-1.453-1.5-2.578'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserXlBoldIcon);
export default ForwardRef;
