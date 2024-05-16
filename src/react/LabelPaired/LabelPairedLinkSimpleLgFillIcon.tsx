import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 15.5A6.243 6.243 0 0 1 6.5 9.25H9c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H6.5a3.751 3.751 0 0 0 0 7.5H9c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H6.5A6.22 6.22 0 0 1 .25 15.5m22.5 0a6.243 6.243 0 0 1-6.25 6.25H14c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h2.5a3.751 3.751 0 0 0 0-7.5H14c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h2.5c3.438 0 6.25 2.813 6.25 6.25m-15-1.25h7.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-7.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='d9d283f10b46f5684a75399313d412bc__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleLgFillIcon);
export default ForwardRef;
