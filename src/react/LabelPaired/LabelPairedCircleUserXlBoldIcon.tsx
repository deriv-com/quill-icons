import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleUserXlBoldIcon = (
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
        d='M19.078 24.75c1.719-1.812 2.61-4.062 2.672-6.75-.062-2.75-1.016-5.047-2.86-6.89-1.843-1.844-4.14-2.797-6.89-2.86-2.75.063-5.047 1.016-6.89 2.86-1.844 1.843-2.798 4.14-2.86 6.89.063 2.688.969 4.938 2.719 6.75a5.767 5.767 0 0 1 2.156-2.719c.969-.656 2.094-1 3.375-1.031h3c1.281.031 2.406.375 3.375 1.031a6.06 6.06 0 0 1 2.203 2.719m-1.922 1.5h.047c-.219-.875-.656-1.594-1.312-2.156-.657-.532-1.453-.813-2.391-.844h-3c-.937.031-1.734.313-2.39.844-.657.562-1.079 1.281-1.266 2.156 1.5.969 3.218 1.469 5.156 1.5 1.938-.031 3.656-.531 5.156-1.5M12 30c-2.187-.031-4.187-.562-6-1.594C4.188 27.344 2.719 25.875 1.594 24 .53 22.094 0 20.094 0 18s.531-4.094 1.594-6C2.719 10.125 4.187 8.656 6 7.594 7.813 6.562 9.813 6.03 12 6c2.188.031 4.188.563 6 1.594 1.813 1.062 3.281 2.531 4.406 4.406C23.47 13.906 24 15.906 24 18s-.531 4.094-1.594 6c-1.125 1.875-2.593 3.344-4.406 4.406-1.812 1.032-3.812 1.563-6 1.594m0-12.75c.719-.031 1.266-.344 1.64-.937.313-.625.313-1.25 0-1.875-.374-.594-.921-.907-1.64-.938-.719.031-1.266.344-1.64.938-.313.624-.313 1.25 0 1.874.374.594.921.907 1.64.938m-4.125-1.875c.063-1.562.75-2.75 2.063-3.562 1.374-.75 2.75-.75 4.124 0 1.313.812 2 2 2.063 3.562-.062 1.563-.75 2.75-2.062 3.563-1.376.75-2.75.75-4.126 0-1.312-.813-2-2-2.062-3.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserXlBoldIcon);
export default ForwardRef;