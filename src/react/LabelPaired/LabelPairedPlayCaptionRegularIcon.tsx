import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayCaptionRegularIcon = (
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
      <path d='M1.313 5.047a.4.4 0 0 0-.375 0 .37.37 0 0 0-.188.328v8.25q0 .21.188.328.188.095.375 0l6.75-4.125A.37.37 0 0 0 8.25 9.5q0-.21-.187-.328zM.586 4.39q.562-.305 1.125.023L8.46 8.54q.515.329.539.961-.023.633-.54.96l-6.75 4.126q-.562.328-1.124.023A1.12 1.12 0 0 1 0 13.625v-8.25q.023-.656.586-.984' />
    </g>
    <defs>
      <clipPath id='7e6da3b75c2fe4aa32e8cb9d45ab5e9e__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionRegularIcon);
export default ForwardRef;
