import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 5.5c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5h6.875a5.4 5.4 0 0 0 1.406 1.5H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h8c1.094 0 2 .906 2 2v4.219c-.562.156-1.062.375-1.5.687V6c0-.25-.25-.5-.5-.5zM3.75 8h4.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4.5A.72.72 0 0 1 3 8.75.74.74 0 0 1 3.75 8m0 3h4.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m0 3h1.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-1.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75M18 15.5a4.54 4.54 0 0 1-2.25 3.906 4.46 4.46 0 0 1-4.5 0A4.47 4.47 0 0 1 9 15.5c0-1.594.844-3.062 2.25-3.875a4.46 4.46 0 0 1 4.5 0c1.375.813 2.25 2.281 2.25 3.875m-2.406-1.344a.53.53 0 0 0-.719 0L13 16.062l-.906-.906a.53.53 0 0 0-.719 0 .53.53 0 0 0 0 .719l1.25 1.25a.53.53 0 0 0 .719 0l2.25-2.25a.53.53 0 0 0 0-.719' />
    </g>
    <defs>
      <clipPath id='ab8e8c416452b4fa48aed4073acfd67f__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckMdBoldIcon);
export default ForwardRef;
