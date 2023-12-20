import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBoxArchiveCircleArrowDownBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 6c0-.531.438-1 1-1h14c.531 0 1 .469 1 1v2.5c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1zm1 4.5h1.5V17c0 .281.219.5.5.5h7.375c.188.563.5 1.063.875 1.5H3c-1.125 0-2-.875-2-2zm.5-4V8h13V6.5zM5 11.75a.74.74 0 0 1 .75-.75h4.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4.5a.722.722 0 0 1-.75-.75m6 3.75c0-1.594.844-3.094 2.25-3.875a4.458 4.458 0 0 1 4.5 0A4.49 4.49 0 0 1 20 15.5a4.54 4.54 0 0 1-2.25 3.906 4.458 4.458 0 0 1-4.5 0A4.475 4.475 0 0 1 11 15.5m2.375-.094a.53.53 0 0 0 0 .719 46.132 46.132 0 0 1 1.75 1.75.53.53 0 0 0 .719 0c.594-.594 1.156-1.187 1.75-1.75a.53.53 0 0 0 0-.719.53.53 0 0 0-.719 0c-.281.313-.594.594-.875.906V13.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v2.813c-.312-.313-.625-.594-.906-.907a.53.53 0 0 0-.719 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownBoldIcon);
export default ForwardRef;
