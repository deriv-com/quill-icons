import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoonXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.953 9.14c-2.156.407-3.922 1.422-5.297 3.047C2.25 13.782 1.531 15.72 1.5 18c.063 2.563.938 4.688 2.625 6.375C5.813 26.063 7.938 26.938 10.5 27c1.594-.031 3.063-.422 4.406-1.172-2.562-.25-4.672-1.281-6.328-3.094C6.922 20.954 6.063 18.75 6 16.125c0-1.375.266-2.656.797-3.844a8.816 8.816 0 0 1 2.156-3.14m3.094-1.03c.062.374-.063.656-.375.843a8.613 8.613 0 0 0-3.047 2.953c-.75 1.25-1.125 2.656-1.125 4.219.063 2.344.86 4.281 2.39 5.813 1.563 1.562 3.5 2.375 5.813 2.437.5 0 .969-.047 1.406-.14.375-.032.641.109.797.421.157.313.11.61-.14.89-1.938 1.907-4.36 2.892-7.266 2.954-1.969-.031-3.734-.516-5.297-1.453a9.825 9.825 0 0 1-3.75-3.75C.516 21.734.031 19.969 0 18c.031-1.969.5-3.734 1.406-5.297a10.168 10.168 0 0 1 3.797-3.75c1.563-.937 3.313-1.422 5.25-1.453.313 0 .61.016.89.047.376.031.61.219.704.562'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonXlRegularIcon);
export default ForwardRef;
