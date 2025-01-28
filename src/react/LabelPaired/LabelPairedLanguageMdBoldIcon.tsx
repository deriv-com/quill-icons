import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6h16c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2m16 1.5h-8v9h8c.25 0 .5-.219.5-.5V8c0-.25-.25-.5-.5-.5m-12.437 2A.65.65 0 0 0 5 9.125c-.25 0-.5.156-.594.375l-2 4.5a.67.67 0 0 0 .313.844c.344.125.687 0 .844-.313l.28-.656h2.282l.281.656a.67.67 0 0 0 .844.313.67.67 0 0 0 .313-.844zm.03 3.125H4.407L5 11.313zm8.657-3.5c.344 0 .625.281.625.625v.125h1.875c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625h-.062l-.063.156a6.2 6.2 0 0 1-1.25 2.031c.031.032.063.032.094.063l.594.344a.68.68 0 0 1 .218.875.68.68 0 0 1-.875.219l-.594-.376c-.124-.062-.25-.156-.406-.25a6 6 0 0 1-1.062.594l-.094.063a.67.67 0 0 1-.844-.313c-.125-.344 0-.687.313-.844l.125-.03c.187-.095.406-.22.594-.313l-.407-.375a.71.71 0 0 1 0-.906.71.71 0 0 1 .906 0l.438.468h.031q.563-.61.938-1.406H12a.627.627 0 0 1-.625-.625c0-.344.281-.625.625-.625h1.625V9.75c0-.344.281-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='b46bf06c8cedf368a34baf77c9ed6b58__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageMdBoldIcon);
export default ForwardRef;
