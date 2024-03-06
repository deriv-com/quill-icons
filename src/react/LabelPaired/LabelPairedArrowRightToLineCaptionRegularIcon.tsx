import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.75 5.375v8.25q-.023.352-.375.375-.352-.023-.375-.375v-8.25q.023-.352.375-.375.352.023.375.375M8.383 9.758l-3 3q-.258.234-.516 0-.234-.258 0-.516l2.344-2.367H.625Q.273 9.852.25 9.5q.023-.352.375-.375H7.21L4.868 6.758q-.234-.258 0-.516.258-.234.516 0l3 3q.234.258 0 .516' />
    </g>
    <defs>
      <clipPath id='9cc19df2e010804c412d95d09768708f__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionRegularIcon);
export default ForwardRef;
