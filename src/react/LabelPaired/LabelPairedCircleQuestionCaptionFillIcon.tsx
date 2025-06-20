import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M3.96 7.39v.024a.585.585 0 0 0 .353.727.55.55 0 0 0 .703-.352l.023-.023a.18.18 0 0 1 .164-.118h1.36c.21 0 .375.141.375.352 0 .117-.07.234-.188.305l-1.031.586c-.188.093-.282.28-.282.492v.305c0 .328.235.562.563.562.305 0 .54-.234.563-.54l.75-.444c.445-.258.75-.75.75-1.266 0-.82-.68-1.5-1.5-1.5h-1.36a1.31 1.31 0 0 0-1.242.89m1.29 4.36c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 6 11a.755.755 0 0 0-.75.75' />
    </g>
    <defs>
      <clipPath id='3739b47c936a8ac57d7e463b533812e2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionCaptionFillIcon);
export default ForwardRef;
