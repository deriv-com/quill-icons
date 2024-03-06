import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenMdRegularIcon = (
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
      <path d='M.5 4h17q.47.031.5.5-.03.47-.5.5H.5q-.469-.03-.5-.5.031-.469.5-.5M1 6h1v7q0 .438.281.719A.97.97 0 0 0 3 14h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 16 13V6h1v7q-.03.844-.594 1.406-.562.563-1.406.594H9.5v1.281l2.844 2.875q.312.345 0 .688-.345.312-.688 0L9 17.219l-2.656 2.625q-.345.312-.688 0-.312-.345 0-.688L8.5 16.281V15H3q-.843-.03-1.406-.594Q1.032 13.843 1 13z' />
    </g>
    <defs>
      <clipPath id='53a922cbf4efef1f6849e8b36b247980__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenMdRegularIcon);
export default ForwardRef;
