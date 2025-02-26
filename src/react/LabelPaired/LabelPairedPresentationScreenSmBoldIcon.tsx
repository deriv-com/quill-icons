import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.781 3.75H15.22c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H.78a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656M1 5.938h1.313v5.906c0 .136.082.219.218.219H13.47c.11 0 .219-.083.219-.22V5.939H15v5.906c0 .847-.71 1.531-1.531 1.531h-4.84v1.285l1.996 1.996a.6.6 0 0 1 0 .903c-.246.273-.656.273-.93 0l-1.722-1.723-1.723 1.723a.6.6 0 0 1-.902 0 .6.6 0 0 1 0-.903l1.996-1.996v-1.285H2.53A1.53 1.53 0 0 1 1 11.844z' />
    </g>
    <defs>
      <clipPath id='4381b9742a0f68f5c1a6fd9d537281eb__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenSmBoldIcon);
export default ForwardRef;
