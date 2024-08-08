import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18 28.36 9 25.78V7.688l9 2.578zm1.5-.094V10.172l5.953-2.39C26.156 7.5 27 8.015 27 8.811v15.704c0 .468-.281.89-.75 1.03zM.703 10.5 7.5 7.781v18.094l-6 2.39a1.1 1.1 0 0 1-1.5-1.03V11.53c0-.469.281-.89.703-1.031' />
    </g>
    <defs>
      <clipPath id='bc78914a09a9b59daf03a9c36ee284bb__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapXlFillIcon);
export default ForwardRef;
