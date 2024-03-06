import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.023 13.32-1.875-1.875A2.2 2.2 0 0 1 6 11.75q-.633 0-1.148-.305L2.977 13.32Q4.242 14.352 6 14.375q1.758-.024 3.023-1.055m1.594 0 .281.282q.33.397 0 .796-.397.33-.796 0l-.282-.28Q8.226 15.452 6 15.5q-2.226-.047-3.82-1.383l-.282.281q-.397.33-.796 0-.33-.397 0-.796l.28-.282Q.049 11.727 0 9.5q.046-2.226 1.383-3.82l-.281-.282q-.33-.397 0-.796.397-.33.796 0l.282.28Q3.773 3.548 6 3.5q2.226.046 3.82 1.383l.282-.281q.397-.33.796 0 .33.397 0 .796l-.28.282Q11.952 7.273 12 9.5q-.047 2.226-1.383 3.82m-.797-.797q1.032-1.265 1.055-3.023-.024-1.758-1.055-3.023L7.945 8.352q.305.515.305 1.148t-.305 1.148zM9.023 5.68Q7.758 4.648 6 4.625q-1.758.024-3.023 1.055l1.875 1.875A2.2 2.2 0 0 1 6 7.25q.633 0 1.148.305zm-4.968 4.968A2.2 2.2 0 0 1 3.75 9.5q0-.633.305-1.148L2.18 6.477Q1.148 7.742 1.125 9.5q.024 1.758 1.055 3.023zm.82-1.148q.024.633.563.984.563.282 1.125 0 .538-.351.562-.984a1.17 1.17 0 0 0-.562-.984 1.2 1.2 0 0 0-1.125 0q-.54.351-.563.984' />
    </g>
    <defs>
      <clipPath id='a8ec92e329c936a5ce4aff8af64b47c7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingCaptionBoldIcon);
export default ForwardRef;
