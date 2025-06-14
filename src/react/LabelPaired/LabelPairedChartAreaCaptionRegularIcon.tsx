import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaCaptionRegularIcon = (
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
      <path d='M.75 4.625v8.25A1.11 1.11 0 0 0 1.875 14h9.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9.75A1.85 1.85 0 0 1 0 12.875v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375m6.21 3.914L5.25 6.83 3.094 8.96A.35.35 0 0 0 3 9.219v2.531h7.5V9.547c0-.094-.047-.164-.094-.235l-1.453-1.71-.937.937a.73.73 0 0 1-.516.211.74.74 0 0 1-.54-.21m0-1.055L7.5 8l.516-.516.398-.398a.76.76 0 0 1 1.102.047l1.453 1.687c.164.211.281.47.281.727v2.203c0 .422-.352.75-.75.75H3a.74.74 0 0 1-.75-.75V9.219c0-.281.117-.586.328-.797l2.133-2.133a.765.765 0 0 1 1.055 0z' />
    </g>
    <defs>
      <clipPath id='a1a637cc65af948a585a1bd244d83bfc__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaCaptionRegularIcon);
export default ForwardRef;
