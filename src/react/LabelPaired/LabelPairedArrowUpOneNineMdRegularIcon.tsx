import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineMdRegularIcon = (
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
      <path d='M14 5.5V10h1q.47.031.5.5-.03.47-.5.5h-3q-.469-.03-.5-.5.031-.469.5-.5h1V6.188l-.844.28q-.437.095-.625-.312-.093-.437.313-.625l1.5-.5q.25-.093.437.063Q14 5.25 14 5.5m-8.656-.344 3 3q.312.345 0 .688-.345.312-.688 0L5.5 6.719V18.5q-.03.47-.5.5-.469-.03-.5-.5V6.719L2.344 8.844q-.345.312-.688 0-.312-.345 0-.688l3-3q.345-.312.688 0m8.031 11.094q.906-.031 1.406-.812.438-.813 0-1.626-.5-.78-1.406-.812-.906.03-1.406.813-.438.812 0 1.624.5.782 1.406.813m-2.625-1.625q.03-1.125.781-1.844.72-.75 1.844-.781 1.125.03 1.844.781.75.72.781 1.844v.125q0 1.032-.656 1.813l-1.969 2.28q-.312.315-.687.032-.344-.312-.063-.687l.781-.938h-.031q-1.125-.03-1.844-.781-.75-.72-.781-1.844' />
    </g>
    <defs>
      <clipPath id='e352e956bd622d61916e3223bd5dc166__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineMdRegularIcon);
export default ForwardRef;
