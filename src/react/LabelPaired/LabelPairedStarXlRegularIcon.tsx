import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarXlRegularIcon = (
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
        d='M10.64 13.922c-.25.469-.64.75-1.171.844l-6.422.937 4.687 4.64c.344.345.485.782.422 1.313l-1.125 6.516 5.766-3.047c.469-.25.937-.25 1.406 0l5.766 3.047-1.125-6.516c-.063-.531.078-.968.422-1.312l4.687-4.64-6.469-.938c-.5-.094-.875-.375-1.125-.844L13.5 7.969zm9.282 15.937L13.5 26.437 7.078 29.86c-.406.22-.797.188-1.172-.093-.375-.282-.531-.641-.468-1.078l1.218-7.313-5.203-5.156c-.312-.313-.406-.688-.281-1.125.156-.438.469-.688.937-.75l7.172-1.078 3.188-6.61c.219-.406.562-.625 1.031-.656.469.031.813.25 1.031.656l3.188 6.61 7.172 1.03c.468.095.78.36.937.798.125.437.031.812-.281 1.125l-5.203 5.156 1.218 7.313c.063.437-.093.796-.468 1.078-.375.28-.766.312-1.172.093'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarXlRegularIcon);
export default ForwardRef;
