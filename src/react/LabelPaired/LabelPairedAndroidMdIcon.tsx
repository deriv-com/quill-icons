import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.156 13.438q.657-.063.75-.75-.093-.688-.75-.75-.687.062-.75.75.063.687.75.75m-8.312 0q.687-.063.75-.75-.063-.688-.75-.75-.657.062-.75.75.093.687.75.75m8.562-4.532a8.7 8.7 0 0 1 3.156 2.938Q17.783 13.657 18 16H0q.219-2.344 1.438-4.156a8.7 8.7 0 0 1 3.156-2.938l-1.5-2.594A.34.34 0 0 1 3.063 6a.31.31 0 0 1 .28-.156q.189 0 .282.156l1.531 2.656A9.1 9.1 0 0 1 9 7.812q2 0 3.844.844L14.375 6a.31.31 0 0 1 .281-.156q.188 0 .281.156a.34.34 0 0 1-.03.313z' />
    </g>
    <defs>
      <clipPath id='97c6784cf4f018f42d29c2e6544980c5__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidMdIcon);
export default ForwardRef;
