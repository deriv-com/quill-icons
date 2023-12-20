import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleArrowDownLeftXlRegularIcon = (
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
        d='M12 7.5c-1.906.031-3.656.5-5.25 1.406-1.594.938-2.875 2.219-3.844 3.844C1.97 14.406 1.5 16.156 1.5 18c0 1.844.469 3.594 1.406 5.25.969 1.625 2.25 2.906 3.844 3.844C8.344 28 10.094 28.469 12 28.5c1.906-.031 3.656-.5 5.25-1.406 1.594-.938 2.875-2.219 3.844-3.844.937-1.656 1.406-3.406 1.406-5.25 0-1.844-.469-3.594-1.406-5.25-.969-1.625-2.25-2.906-3.844-3.844C15.656 8 13.906 7.531 12 7.5M12 30c-2.187-.031-4.187-.562-6-1.594C4.188 27.344 2.719 25.875 1.594 24 .53 22.094 0 20.094 0 18s.531-4.094 1.594-6C2.719 10.125 4.187 8.656 6 7.594 7.813 6.562 9.813 6.03 12 6c2.188.031 4.188.563 6 1.594 1.813 1.062 3.281 2.531 4.406 4.406C23.47 13.906 24 15.906 24 18s-.531 4.094-1.594 6c-1.125 1.875-2.593 3.344-4.406 4.406-1.812 1.032-3.812 1.563-6 1.594m2.625-7.5H8.25c-.469-.031-.719-.281-.75-.75V15c.031-.469.281-.719.75-.75.469.031.719.281.75.75v4.922l6.234-6.188c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032L10.078 21h4.547c.469.031.719.281.75.75-.031.469-.281.719-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownLeftXlRegularIcon);
export default ForwardRef;
