import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineMdRegularIcon = (
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
      <path d='M14 5.5V10h1q.47.031.5.5-.03.47-.5.5h-3q-.469-.03-.5-.5.031-.469.5-.5h1V6.188l-.844.28q-.437.126-.625-.312-.093-.437.313-.625l1.5-.5a.53.53 0 0 1 .437.063Q14 5.25 14 5.5M5.344 18.844q-.345.312-.688 0l-3-3q-.312-.345 0-.688.345-.312.688 0L4.5 17.281V5.5q.031-.469.5-.5.47.031.5.5v11.781l2.156-2.125q.345-.312.688 0 .312.345 0 .688zM13.375 13q-.906.03-1.406.813-.438.812 0 1.624.5.782 1.406.813.906-.031 1.406-.812.438-.813 0-1.626-.5-.78-1.406-.812m-2.625 1.625q.03-1.125.781-1.844.72-.75 1.844-.781 1.125.03 1.844.781.75.72.781 1.844v.125q0 1.032-.656 1.813l-1.969 2.25q-.344.344-.687.062-.344-.344-.063-.687l.781-.938h-.031q-1.125-.03-1.844-.781-.75-.72-.781-1.844' />
    </g>
    <defs>
      <clipPath id='0831839896e240636ede02baeb8c464e__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineMdRegularIcon);
export default ForwardRef;
