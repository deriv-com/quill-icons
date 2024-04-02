import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpRightCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5M8.625 11V7.438a.57.57 0 0 0-.562-.563h-3.75a.555.555 0 0 0-.563.563c0 .328.234.562.563.562l2.39.023-3.164 3.165a.513.513 0 0 0 0 .773c.211.234.563.234.797 0L7.5 8.797V11c0 .328.234.563.563.563A.555.555 0 0 0 8.625 11' />
    </g>
    <defs>
      <clipPath id='f46845b790341345a8fa69159b0b44d7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightCaptionFillIcon);
export default ForwardRef;
