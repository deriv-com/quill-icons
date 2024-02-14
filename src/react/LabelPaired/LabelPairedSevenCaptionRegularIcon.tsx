import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 4.625q.023-.352.375-.375h6.75q.21 0 .328.188a.4.4 0 0 1 0 .375l-6 9.75q-.21.28-.516.14-.28-.21-.117-.515L6.695 5H.625Q.273 4.977.25 4.625' />
    </g>
    <defs>
      <clipPath id='ba5f2a93700c8cac49ff644b8ad1e487__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenCaptionRegularIcon);
export default ForwardRef;
