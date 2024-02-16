import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightCaptionRegularIcon = (
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
      <path d='m10.633 9.758-4.125 4.125q-.258.234-.516 0-.234-.258 0-.516l3.469-3.492H.625Q.273 9.852.25 9.5q.023-.352.375-.375h8.836L5.992 5.633q-.234-.258 0-.516.258-.234.516 0l4.125 4.125q.234.258 0 .516' />
    </g>
    <defs>
      <clipPath id='96432c7017846dae6eec296615afb48a__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightCaptionRegularIcon);
export default ForwardRef;
