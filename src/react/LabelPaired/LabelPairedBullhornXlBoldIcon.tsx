import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBullhornXlBoldIcon = (
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
        d='m20.25 9.469-.516.515a15.25 15.25 0 0 1-4.593 3.094A14.876 14.876 0 0 1 9.75 14.25v6c1.906.063 3.703.453 5.39 1.172 1.72.75 3.25 1.781 4.594 3.094l.516.515zM7.5 12h1.922a12.243 12.243 0 0 0 8.719-3.61l1.78-1.78c.532-.47 1.079-.579 1.642-.329.562.219.875.672.937 1.36v6.797c.438.218.797.578 1.078 1.078.281.5.422 1.078.422 1.734 0 .656-.14 1.234-.422 1.734-.281.5-.64.86-1.078 1.078v6.797c-.062.688-.375 1.141-.937 1.36-.563.25-1.11.14-1.641-.328l-1.781-1.782a12.368 12.368 0 0 0-3.844-2.625A13.165 13.165 0 0 0 9.75 22.5v4.875c-.031.75-.281 1.375-.75 1.875-.5.469-1.125.719-1.875.75h-1.5c-.75-.031-1.375-.281-1.875-.75-.469-.5-.719-1.125-.75-1.875V22.5c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11V15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89zM5.25 22.5v4.875c.031.219.156.344.375.375h1.5c.219-.031.344-.156.375-.375V22.5zM3 14.25c-.469.031-.719.281-.75.75v4.5c.031.469.281.719.75.75h4.5v-6z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornXlBoldIcon);
export default ForwardRef;
