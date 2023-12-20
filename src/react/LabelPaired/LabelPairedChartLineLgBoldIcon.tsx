import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.875 7.688v13.75c.052.572.365.885.938.937h16.25c.572.052.885.365.937.938-.052.572-.365.885-.937.937H2.813c-.808-.026-1.472-.3-1.993-.82-.52-.521-.794-1.185-.82-1.992V7.688c.052-.573.365-.886.938-.938.572.052.885.365.937.938m16.602 4.414-5.313 5.312c-.443.365-.885.365-1.328 0L8.75 14.328l-3.086 3.086c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l3.75-3.75a.904.904 0 0 1 .664-.274c.26 0 .482.092.664.274l3.086 3.086 4.648-4.649c.443-.364.886-.364 1.329 0 .364.443.364.886 0 1.329'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineLgBoldIcon);
export default ForwardRef;
