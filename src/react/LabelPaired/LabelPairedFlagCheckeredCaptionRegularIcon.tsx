import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 3.875v1.008l2.297-.633q1.5-.375 2.883.281.726.375 1.547.352a3.4 3.4 0 0 0 1.546-.422l.352-.211q.399-.21.75 0 .352.188.375.633v6.633a.76.76 0 0 1-.445.68l-.727.304a4.4 4.4 0 0 1-1.828.352 4.1 4.1 0 0 1-1.805-.47 3.7 3.7 0 0 0-2.554-.257L1 12.781v2.344q-.023.352-.375.375-.352-.023-.375-.375V3.875q.023-.352.375-.375.352.023.375.375m0 1.781V7.11l2.25-.468V5.047zm0 2.227v1.664l2.25-.469V7.391zm3-.656V8.89a3.45 3.45 0 0 1 1.594.093L7 9.383v-1.64a1 1 0 0 0-.117-.048l-1.5-.422a2.6 2.6 0 0 0-1.29-.046zm3.75.632v1.688q.539.047 1.055-.07L10 9.195V7.531l-1.008.235a4.2 4.2 0 0 1-1.242.093M7 10.18a1 1 0 0 0-.117-.046l-1.5-.422a2.6 2.6 0 0 0-1.29-.047H4v1.617a4.25 4.25 0 0 1 2.273.446q.352.164.727.257zm.75 1.923a3.56 3.56 0 0 0 1.547-.305l.703-.281V9.969l-1.008.234q-.633.14-1.242.094zm0-4.993q.539.048 1.055-.07L10 6.758V4.906l-.375.188a3.9 3.9 0 0 1-1.875.539zM7 5.586a4 4 0 0 1-1.172-.375A3.36 3.36 0 0 0 4 4.883v1.594a3.25 3.25 0 0 1 1.594.07L7 6.969zM1 10.32v1.688l2.18-.586a.2.2 0 0 1 .07-.024v-1.57z' />
    </g>
    <defs>
      <clipPath id='3b64ceeef784429ec6b027062cbcddb3__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredCaptionRegularIcon);
export default ForwardRef;
