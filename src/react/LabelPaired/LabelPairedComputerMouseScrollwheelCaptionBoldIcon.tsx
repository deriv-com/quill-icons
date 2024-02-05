import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.875 11.75v-4.5q-.024-1.125-.773-1.852-.727-.75-1.852-.773h-1.5q-1.125.024-1.852.773-.75.727-.773 1.852v4.5q.024 1.125.773 1.852.727.75 1.852.773h1.5q1.125-.024 1.852-.773.75-.727.773-1.852M0 7.25q.046-1.593 1.102-2.648Q2.157 3.547 3.75 3.5h1.5q1.594.046 2.648 1.102Q8.953 5.656 9 7.25v4.5q-.046 1.594-1.102 2.648Q6.844 15.453 5.25 15.5h-1.5q-1.593-.046-2.648-1.102Q.047 13.344 0 11.75zm4.5-1.5a.73.73 0 0 1 .54.21q.21.212.21.54v.75a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V6.5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21' />
    </g>
    <defs>
      <clipPath id='cd61a8d750615af8d267e85394ea6334__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelCaptionBoldIcon);
export default ForwardRef;
