import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelCaptionRegularIcon = (
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
      <path d='M8.25 11.75v-4.5q-.024-1.266-.867-2.133-.868-.843-2.133-.867h-1.5q-1.266.024-2.133.867Q.774 5.985.75 7.25v4.5q.024 1.266.867 2.133.868.843 2.133.867h1.5q1.266-.024 2.133-.867.843-.868.867-2.133M0 7.25q.046-1.593 1.102-2.648Q2.157 3.547 3.75 3.5h1.5q1.594.046 2.648 1.102Q8.953 5.656 9 7.25v4.5q-.046 1.594-1.102 2.648Q6.844 15.453 5.25 15.5h-1.5q-1.593-.046-2.648-1.102Q.047 13.344 0 11.75zm4.875-1.125v1.5Q4.852 7.977 4.5 8q-.352-.023-.375-.375v-1.5q.023-.352.375-.375.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='ea75f0935e13e0ff1005a898cb9ce722__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelCaptionRegularIcon);
export default ForwardRef;
