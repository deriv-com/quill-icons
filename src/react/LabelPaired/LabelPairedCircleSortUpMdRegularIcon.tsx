import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortUpMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 12a7.2 7.2 0 0 0-.937-3.5A7.2 7.2 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.2 7.2 0 0 0 1.938 8.5 7.2 7.2 0 0 0 1 12q.03 1.906.938 3.5A7.2 7.2 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.2 7.2 0 0 0 2.563-2.563A7.2 7.2 0 0 0 15 12M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m7.656-4.844q.345-.312.688 0l3 3a.5.5 0 0 1 .125.531A.57.57 0 0 1 11 11H5q-.312 0-.469-.312a.5.5 0 0 1 .125-.532zM6.22 10H9.78L8 8.219zm-1.563 3.844q-.312-.345 0-.688.345-.312.688 0L8 15.781l2.656-2.625q.345-.312.688 0 .312.345 0 .688l-3 3q-.345.312-.688 0z' />
    </g>
    <defs>
      <clipPath id='fd38c2acb8282092__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortUpMdRegularIcon);
export default ForwardRef;
