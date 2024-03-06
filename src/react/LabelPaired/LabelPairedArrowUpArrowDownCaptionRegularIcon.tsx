import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.258 4.367 2.25 2.25q.234.258 0 .516-.258.234-.516 0L4.375 5.539v8.836q-.023.352-.375.375-.352-.023-.375-.375V5.539L2.008 7.133q-.258.234-.516 0-.234-.258 0-.516l2.25-2.25q.258-.234.516 0m8.25 8.016-2.25 2.25q-.258.234-.516 0l-2.25-2.25q-.234-.258 0-.516.258-.234.516 0l1.617 1.594V4.625q.023-.352.375-.375.352.023.375.375v8.836l1.617-1.594q.258-.234.516 0 .234.258 0 .516' />
    </g>
    <defs>
      <clipPath id='174d48fab2d1075a867ecff85ad58456__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownCaptionRegularIcon);
export default ForwardRef;
