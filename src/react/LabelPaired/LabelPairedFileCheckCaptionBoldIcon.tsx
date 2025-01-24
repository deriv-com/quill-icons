import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCheckCaptionBoldIcon = (
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
      <path d='M1.5 14.375h6A.385.385 0 0 0 7.875 14V7.25H6a.74.74 0 0 1-.75-.75V4.625H1.5A.385.385 0 0 0 1.125 5v9c0 .21.164.375.375.375M1.5 3.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m5.273 6.281L4.266 12.29a.58.58 0 0 1-.797 0l-1.242-1.266c-.235-.21-.235-.562 0-.796.21-.211.562-.211.796 0l.844.867 2.11-2.11c.21-.21.562-.21.796 0a.58.58 0 0 1 0 .797' />
    </g>
    <defs>
      <clipPath id='c77be85c6ad49272b74f689020c3ebe5__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCheckCaptionBoldIcon);
export default ForwardRef;
