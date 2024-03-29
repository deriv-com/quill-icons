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
      <path d='M.25 4.625c0-.187.164-.375.375-.375h6.75c.117 0 .258.094.328.21a.42.42 0 0 1-.023.376l-6 9.75a.37.37 0 0 1-.516.117c-.164-.117-.234-.328-.117-.515L6.695 5H.625a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='532f84c49b5284ceb77b653f3357feb0__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenCaptionRegularIcon);
export default ForwardRef;
