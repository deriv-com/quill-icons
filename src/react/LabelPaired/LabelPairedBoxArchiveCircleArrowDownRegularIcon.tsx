import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBoxArchiveCircleArrowDownRegularIcon = (
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
        d='M0 6c0-.531.438-1 1-1h14c.531 0 1 .469 1 1v2c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1zm1 0v2h14V6zm0 4h1v7c0 .563.438 1 1 1h7.594c.187.375.406.719.656 1H3c-1.125 0-2-.875-2-2zm4 1.5c0-.25.219-.5.5-.5h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-5a.494.494 0 0 1-.5-.5m6.594 1.75A4.54 4.54 0 0 1 15.5 11a4.49 4.49 0 0 1 3.875 2.25 4.458 4.458 0 0 1 0 4.5C18.594 19.156 17.094 20 15.5 20a4.475 4.475 0 0 1-3.906-2.25 4.458 4.458 0 0 1 0-4.5m.875.5c-.625 1.094-.625 2.438 0 3.5A3.478 3.478 0 0 0 15.5 19c1.25 0 2.406-.656 3.031-1.75.625-1.062.625-2.406 0-3.5A3.544 3.544 0 0 0 15.5 12c-1.25 0-2.406.688-3.031 1.75m.906 1.656a.53.53 0 0 1 .719 0c.281.313.594.594.906.906V13.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v2.813c.281-.313.594-.594.875-.907a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719c-.594.563-1.157 1.156-1.75 1.75a.53.53 0 0 1-.719 0 46.132 46.132 0 0 0-1.75-1.75.53.53 0 0 1 0-.719M14 10h1v.031a5.146 5.146 0 0 0-1 .188z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownRegularIcon);
export default ForwardRef;
