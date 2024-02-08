import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineCaptionRegularIcon = (
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
      <path d='M.375 14.75q-.352-.023-.375-.375.023-.352.375-.375h8.25q.352.023.375.375-.023.352-.375.375zm4.383-2.367q-.258.234-.516 0l-3-3q-.234-.258 0-.516.258-.234.516 0l2.367 2.344V4.625q.023-.352.375-.375.352.023.375.375v6.585l2.367-2.343q.258-.234.516 0 .234.258 0 .516z' />
    </g>
    <defs>
      <clipPath id='09e1e73572975fb6b952135bc1a42aff__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineCaptionRegularIcon);
export default ForwardRef;
