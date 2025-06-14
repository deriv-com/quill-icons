import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelCaptionRegularIcon = (
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
      <path d='M7.5 14.75c.398 0 .75-.328.75-.75V8H5.625A1.11 1.11 0 0 1 4.5 6.875V4.25h-3A.755.755 0 0 0 .75 5v9c0 .422.328.75.75.75zm-1.875-7.5h2.602c-.024-.047-.047-.117-.094-.164L5.414 4.367c-.047-.047-.117-.07-.164-.094v2.602c0 .21.164.375.375.375M1.5 3.5h3.656c.282 0 .586.14.797.352l2.695 2.695c.211.21.352.516.352.797V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m1.992 5.79L4.5 10.741l.984-1.453c.141-.164.375-.21.54-.094a.4.4 0 0 1 .093.54l-1.172 1.64 1.172 1.664c.117.188.07.399-.094.54-.187.116-.398.07-.539-.095L4.5 12.031l-1.008 1.453a.4.4 0 0 1-.539.094c-.164-.14-.21-.375-.094-.539l1.172-1.664-1.172-1.64a.4.4 0 0 1 .094-.54.4.4 0 0 1 .54.094' />
    </g>
    <defs>
      <clipPath id='c58bea8285be12eed54a201208b910f7__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelCaptionRegularIcon);
export default ForwardRef;
