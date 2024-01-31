import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.813 8.703q-.39.625-1.094.43-1.368-.39-2.461.625-1.016 1.094-.625 2.46.195.704-.43 1.095-1.25.702-1.328 2.187.078 1.485 1.328 2.188.625.39.43 1.093-.39 1.368.625 2.461 1.094 1.016 2.46.625.704-.195 1.095.43.702 1.25 2.187 1.328 1.485-.078 2.188-1.328.39-.625 1.093-.43 1.368.352 2.461-.625 1.016-1.094.625-2.46-.195-.704.469-1.094 1.21-.704 1.289-2.188-.078-1.485-1.29-2.187-.663-.391-.468-1.094.39-1.368-.625-2.461-1.094-1.016-2.46-.625-.705.195-1.094-.43-.704-1.25-2.188-1.328-1.485.078-2.187 1.328M10 5.5q2.187.078 3.438 1.68 2.031-.235 3.632 1.25 1.485 1.6 1.25 3.633 1.602 1.25 1.68 3.437-.078 2.187-1.68 3.438.235 2.031-1.25 3.632-1.6 1.485-3.633 1.25-1.25 1.602-3.437 1.68-2.187-.078-3.437-1.68-2.033.235-3.633-1.25-1.485-1.6-1.25-3.633Q.078 17.688 0 15.5q.078-2.187 1.68-3.437-.235-2.032 1.25-3.633 1.6-1.485 3.633-1.25Q7.813 5.578 10 5.5m4.414 8.164-5 5q-.664.547-1.328 0l-2.5-2.5q-.548-.664 0-1.328.664-.548 1.328 0l1.836 1.836 4.336-4.336q.664-.548 1.328 0 .548.664 0 1.328' />
    </g>
    <defs>
      <clipPath id='b3ce9e94207e303f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckLgBoldIcon);
export default ForwardRef;
