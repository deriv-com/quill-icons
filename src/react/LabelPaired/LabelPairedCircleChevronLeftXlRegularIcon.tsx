import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleChevronLeftXlRegularIcon = (
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
        d='M1.5 18c.031 1.906.5 3.656 1.406 5.25.938 1.594 2.219 2.875 3.844 3.844C8.406 28.03 10.156 28.5 12 28.5c1.844 0 3.594-.469 5.25-1.406 1.625-.969 2.906-2.25 3.844-3.844C22 21.656 22.469 19.906 22.5 18c-.031-1.906-.5-3.656-1.406-5.25-.938-1.594-2.219-2.875-3.844-3.844C15.594 7.97 13.844 7.5 12 7.5c-1.844 0-3.594.469-5.25 1.406-1.625.969-2.906 2.25-3.844 3.844C2 14.344 1.531 16.094 1.5 18M24 18c-.031 2.188-.562 4.188-1.594 6-1.062 1.813-2.531 3.281-4.406 4.406C16.094 29.47 14.094 30 12 30s-4.094-.531-6-1.594C4.125 27.281 2.656 25.813 1.594 24 .563 22.188.03 20.188 0 18c.031-2.187.563-4.187 1.594-6C2.656 10.188 4.125 8.719 6 7.594 7.906 6.53 9.906 6 12 6s4.094.531 6 1.594c1.875 1.125 3.344 2.593 4.406 4.406 1.032 1.813 1.563 3.813 1.594 6m-11.016-5.766c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032L9.328 18l4.688 4.734c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0l-5.25-5.25c-.312-.344-.312-.688 0-1.032z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronLeftXlRegularIcon);
export default ForwardRef;
