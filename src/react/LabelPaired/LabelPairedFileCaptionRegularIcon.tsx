import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCaptionRegularIcon = (
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
      <path d='M8.25 14V8H5.625A1.11 1.11 0 0 1 4.5 6.875V4.25h-3A.755.755 0 0 0 .75 5v9c0 .422.328.75.75.75h6c.398 0 .75-.328.75-.75m-.023-6.75c-.024-.047-.047-.117-.094-.164L5.414 4.367c-.047-.047-.117-.07-.164-.094v2.602c0 .21.164.375.375.375zM0 5c0-.82.656-1.5 1.5-1.5h3.656c.282 0 .586.14.797.352l2.695 2.695c.211.21.352.516.352.797V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14z' />
    </g>
    <defs>
      <clipPath id='17f1ecf2722a5b0143a13e4b04f36bc6__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCaptionRegularIcon);
export default ForwardRef;
