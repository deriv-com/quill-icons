import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUnlockXlRegularIcon = (
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
        d='M6 12v3h11.25c1.063.031 1.953.39 2.672 1.078.687.719 1.047 1.61 1.078 2.672v7.5c-.031 1.063-.39 1.953-1.078 2.672-.719.687-1.61 1.047-2.672 1.078H3.75c-1.062-.031-1.953-.39-2.672-1.078C.391 28.203.031 27.312 0 26.25v-7.5c.031-1.062.39-1.953 1.078-2.672.719-.687 1.61-1.047 2.672-1.078h.75v-3c.031-1.687.61-3.11 1.734-4.266C7.391 6.61 8.813 6.031 10.5 6c1.375.031 2.578.438 3.61 1.219 1.03.781 1.75 1.812 2.156 3.093.093.438-.078.735-.516.891-.469.094-.781-.062-.937-.469a4.406 4.406 0 0 0-1.594-2.343c-.781-.563-1.688-.86-2.719-.891-1.281.031-2.344.469-3.187 1.313C6.469 9.656 6.03 10.719 6 12m-4.5 6.75v7.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h13.5a2.446 2.446 0 0 0 1.594-.656c.406-.438.625-.969.656-1.594v-7.5a2.446 2.446 0 0 0-.656-1.594 2.446 2.446 0 0 0-1.594-.656H3.75a2.446 2.446 0 0 0-1.594.656A2.447 2.447 0 0 0 1.5 18.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockXlRegularIcon);
export default ForwardRef;
