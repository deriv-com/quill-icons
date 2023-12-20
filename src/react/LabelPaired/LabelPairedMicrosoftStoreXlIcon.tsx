import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMicrosoftStoreXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 29 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.79 12V9.328c0-1.64.843-2.156 2.437-2.531 2.39-.563 2.53.984 2.53 1.969v2.25l.61-.094v-2.11c0-1.874-.61-3.234-3.234-2.624-1.453.28-2.906.656-2.906 3.093v2.86zm6.14-3.703c-.047-.235-.094-.422-.094-.61 1.828-.234 2.156.282 2.156 2.344v.375l-.562.094v-.563c0-1.265 0-1.874-1.5-1.64m-3.516 2.297c0-1.875.75-2.156 1.688-2.485.046.188.093.375.093.61-.843.375-1.172.61-1.172 1.875v.797l-.609.093zm-7.594 3.14L20.898 10.5l3.235 1.172v15.75l-3.235 1.172L4.82 25.406zM8.29 22.5l3.562.469v-3.422H8.289zm0-3.422h3.562v-3.234l-3.563.515zm4.03 3.938 4.5.656v-4.125h-4.5zm0-3.938h4.5v-3.89l-4.5.656z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h29v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftStoreXlIcon);
export default ForwardRef;
