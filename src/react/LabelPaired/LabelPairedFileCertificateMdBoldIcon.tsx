import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateMdBoldIcon = (
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
      <path d='M14 18.5c.25 0 .5-.219.5-.5V9H12c-.562 0-1-.437-1-1V5.5H6c-.281 0-.5.25-.5.5v2.125a1.9 1.9 0 0 0-1.312 0c-.063.031-.157.094-.188.094v.031V6c0-1.094.875-2 2-2h5.156c.531 0 1.031.219 1.406.594l2.844 2.843c.375.375.594.875.594 1.407V18c0 1.125-.906 2-2 2H6.906c.063-.156.094-.312.094-.5v-1zM3.406 9.063l.469.187a.27.27 0 0 0 .219 0l.5-.187a.74.74 0 0 1 .875.25l.312.406a.17.17 0 0 0 .157.094l.53.062a.8.8 0 0 1 .657.656l.063.531c0 .063.03.126.093.157l.438.312c.25.219.343.594.218.906l-.187.47c-.031.062-.031.155 0 .187l.188.5c.125.312.03.687-.25.875l-.407.344a.17.17 0 0 0-.093.156l-.063.531a.8.8 0 0 1-.656.656L6 16.22V19.5a.58.58 0 0 1-.281.469.57.57 0 0 1-.5-.032L4 19.126l-1.25.813c-.125.093-.344.093-.5.03A.55.55 0 0 1 2 19.5v-3.281l-.5-.063a.8.8 0 0 1-.656-.656l-.063-.531a.17.17 0 0 0-.094-.156l-.406-.344c-.281-.188-.375-.563-.25-.875l.219-.469v-.219l-.219-.469c-.125-.312-.031-.687.25-.874l.407-.344a.17.17 0 0 0 .093-.156l.094-.532c.031-.344.281-.594.625-.656l.531-.062a.17.17 0 0 0 .156-.094l.344-.406c.188-.282.563-.376.875-.25M2 13c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75 0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 2 13' />
    </g>
    <defs>
      <clipPath id='94c6b8296d5ef3af3dc18b927863798b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateMdBoldIcon);
export default ForwardRef;
