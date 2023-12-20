import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFloppyDiskPenXlBoldIcon = (
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
        d='M2.25 10.5v15c.031.469.281.719.75.75h9.703l-.562 2.25H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h11.531c.813 0 1.516.297 2.11.89l3.468 3.47-1.593 1.593-3.47-3.469L15 9.938v4.687c-.062.688-.437 1.063-1.125 1.125h-9c-.687-.062-1.062-.437-1.125-1.125V9.75H3c-.469.031-.719.281-.75.75m17.86 1.36c.593.593.89 1.312.89 2.156v3.047l-2.25 2.25v-5.297a.767.767 0 0 0-.234-.563zM6 9.75v3.75h6.75V9.75zM7.5 21c.031-1.125.531-1.984 1.5-2.578 1-.563 2-.563 3 0 .969.594 1.469 1.453 1.5 2.578-.031 1.125-.531 1.984-1.5 2.578-1 .563-2 .563-3 0-.969-.594-1.469-1.453-1.5-2.578m18.281-3.937.657.656c.375.406.562.843.562 1.312 0 .5-.187.953-.562 1.36l-1.36 1.359-3.328-3.328 1.36-1.36c.406-.375.843-.562 1.312-.562.5 0 .953.188 1.36.563m-11.156 8.484 6.047-6.047L24 22.828l-6.047 6.047a1.766 1.766 0 0 1-.703.422L14.438 30a.816.816 0 0 1-.704-.234.816.816 0 0 1-.234-.703l.703-2.813c.094-.281.235-.516.422-.703'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenXlBoldIcon);
export default ForwardRef;
