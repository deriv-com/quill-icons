import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowDownMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6c0-.531.438-1 1-1h14c.531 0 1 .469 1 1v2.5c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1zm1 4.5h1.5V17c0 .281.219.5.5.5h7.375c.188.563.5 1.063.875 1.5H3c-1.125 0-2-.875-2-2zm.5-4V8h13V6.5zM5 11.75a.74.74 0 0 1 .75-.75h4.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4.5a.72.72 0 0 1-.75-.75m6 3.75c0-1.594.844-3.094 2.25-3.875a4.46 4.46 0 0 1 4.5 0A4.49 4.49 0 0 1 20 15.5a4.54 4.54 0 0 1-2.25 3.906 4.46 4.46 0 0 1-4.5 0A4.47 4.47 0 0 1 11 15.5m2.375-.094a.53.53 0 0 0 0 .719 46 46 0 0 1 1.75 1.75.53.53 0 0 0 .719 0c.594-.594 1.156-1.187 1.75-1.75a.53.53 0 0 0 0-.719.53.53 0 0 0-.719 0c-.281.313-.594.594-.875.906V13.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v2.813c-.312-.313-.625-.594-.906-.907a.53.53 0 0 0-.719 0' />
    </g>
    <defs>
      <clipPath id='15ea7ac291b992affdf77fb01dbf50fd__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownMdBoldIcon);
export default ForwardRef;
