import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 9a4.5 4.5 0 0 0-4.5 4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-3.281 2.672-6 6-6h1.5c3.281 0 6 2.719 6 6a5.26 5.26 0 0 1-2.11 4.219l-2.859 2.156c-.656.469-1.031 1.266-1.031 2.063v.562c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-.562c0-1.266.61-2.485 1.64-3.282l2.86-2.156a3.7 3.7 0 0 0 1.5-3c0-2.484-2.016-4.5-4.5-4.5zm-.375 18c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.5 28.125c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='5f1bc23c251b6ab0c68cf546900e2cff__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionXlRegularIcon);
export default ForwardRef;
