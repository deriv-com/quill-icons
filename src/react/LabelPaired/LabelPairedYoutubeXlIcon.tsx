import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedYoutubeXlIcon = (
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
        d='M25.781 11.813c.157.718.282 1.546.375 2.484.063.969.11 1.828.14 2.578V19.172c-.03.75-.077 1.594-.14 2.531a22.057 22.057 0 0 1-.375 2.531c-.375 1.157-1.14 1.907-2.297 2.25-.75.157-1.906.282-3.468.375-1.563.063-3.016.11-4.36.141h-4.312a261.308 261.308 0 0 1-4.36-.14c-1.562-.094-2.718-.22-3.468-.376-1.157-.343-1.922-1.093-2.297-2.25a22.079 22.079 0 0 1-.375-2.53 102.67 102.67 0 0 1-.14-2.532V16.875c.03-.75.077-1.61.14-2.578a22.21 22.21 0 0 1 .375-2.485c.375-1.156 1.14-1.921 2.297-2.296.75-.157 1.906-.282 3.468-.375C8.547 9.078 10 9.03 11.344 9h4.312c1.344.031 2.797.078 4.36.14 1.562.094 2.718.22 3.468.376 1.157.375 1.922 1.14 2.297 2.297m-14.906 10.03L17.578 18l-6.703-3.797z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeXlIcon);
export default ForwardRef;
