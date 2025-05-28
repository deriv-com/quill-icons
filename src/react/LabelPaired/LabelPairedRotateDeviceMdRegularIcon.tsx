import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={24}
    viewBox='0 0 15 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 9.594 4.813 8.53l-.22-.219-1.062 1.063zm8.813 3.125c.468.5.468 1.281 0 1.781l-2.844 2.813c-.469.5-1.281.5-1.75 0l-5.656-5.657c-.5-.469-.5-1.281 0-1.75l2.812-2.844a1.304 1.304 0 0 1 1.781 0zM5.187 8.188a.453.453 0 0 1 0 .656L4.063 9.969a.418.418 0 0 1-.625 0l-.25-.25-.53.531c-.313.313-.313.781 0 1.063l5.656 5.656c.28.281.75.281 1.062 0l2.813-2.813c.312-.312.312-.781 0-1.062L6.53 7.438c-.281-.313-.75-.313-1.062 0l-.532.53.25.25zM12.5 7.125a5 5 0 0 0-.781-.656l-.25-.188a6 6 0 0 0-1.031-.468l-.344-.125-.344-.094c-.219-.063-.469-.094-.687-.125l1.28 1.312-.343.344-1.75-1.75-.406-.437h.937c.375.03.719.093 1.063.156l.406.125.375.125c.375.125.75.312 1.094.531l.312.188c.281.218.563.437.813.718a6.23 6.23 0 0 1 1.844 4.407h-.5A5.73 5.73 0 0 0 12.5 7.125M2.344 17.281c.25.219.5.438.781.625l.281.188a4.3 4.3 0 0 0 1 .5l.344.125.375.093c.219.063.438.094.656.125L4.5 17.626l.344-.344 1.75 1.75.437.438h-.625l-.343-.032A4.2 4.2 0 0 1 5 19.282l-.406-.093-.375-.125c-.375-.157-.75-.313-1.094-.532l-.281-.218A4.5 4.5 0 0 1 2 17.625a6.23 6.23 0 0 1-1.844-4.406h.5c0 1.469.563 2.937 1.688 4.062' />
    </g>
    <defs>
      <clipPath id='429475439aa50daf217d421021e381a7__a'>
        <path d='M0 0h15v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceMdRegularIcon);
export default ForwardRef;
