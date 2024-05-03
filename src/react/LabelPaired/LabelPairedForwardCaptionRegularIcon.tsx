import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardCaptionRegularIcon = (
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
      <path d='M11.11 9.5 6 5.797v7.43zM5.952 5c.14 0 .281.047.399.14l5.414 3.915c.14.117.234.28.234.445a.61.61 0 0 1-.234.469l-5.414 3.914a.8.8 0 0 1-.399.117.69.69 0 0 1-.703-.703v-2.414l-4.148 3A.8.8 0 0 1 .703 14 .69.69 0 0 1 0 13.297V5.703C0 5.328.305 5 .703 5c.14 0 .281.047.399.14l4.148 3V5.704c0-.375.305-.703.703-.703M5.25 9.969v-.914L.75 5.797v7.43z' />
    </g>
    <defs>
      <clipPath id='3acca63f57a32fc0d051335c591a94c5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionRegularIcon);
export default ForwardRef;
