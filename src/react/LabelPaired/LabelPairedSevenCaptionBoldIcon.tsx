import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenCaptionBoldIcon = (
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
      <path d='M.25 4.813c0-.305.234-.563.563-.563h6.375c.187 0 .375.117.468.305a.49.49 0 0 1 0 .562l-5.625 9.375a.564.564 0 0 1-.773.188c-.258-.164-.352-.516-.188-.774l5.11-8.531H.813a.54.54 0 0 1-.563-.562' />
    </g>
    <defs>
      <clipPath id='b9570c1581b2cfa399ad0c0dd5315134__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenCaptionBoldIcon);
export default ForwardRef;
