import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightCaptionRegularIcon = (
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
      <path d='M7.875 5.75q.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375V7.039l-6.117 6.094q-.258.234-.516 0-.234-.258 0-.516L6.961 6.5H2.625q-.352-.023-.375-.375.023-.352.375-.375z' />
    </g>
    <defs>
      <clipPath id='fbb61354c108957f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionRegularIcon);
export default ForwardRef;
