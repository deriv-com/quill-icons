import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayCaptionFillIcon = (
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
      <path d='M1.71 4.414 8.46 8.54q.517.351.54.961-.023.633-.54.96l-6.75 4.126q-.562.328-1.124.023A1.12 1.12 0 0 1 0 13.625v-8.25q.023-.656.586-.984.562-.305 1.125.023' />
    </g>
    <defs>
      <clipPath id='d257fc19d15606c6__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionFillIcon);
export default ForwardRef;
