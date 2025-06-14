import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageMdFillIcon = (
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
      <path d='M0 8c0-1.094.875-2 2-2h16c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm10 0v8h8V8zM5.563 9.5A.65.65 0 0 0 5 9.125c-.25 0-.5.156-.594.375l-2 4.5a.67.67 0 0 0 .313.844c.344.125.687 0 .844-.313l.28-.656h2.282l.281.656a.67.67 0 0 0 .844.313.67.67 0 0 0 .313-.844zM5 11.313l.594 1.312H4.406zm9-2.188c.344 0 .625.281.625.625v.125H16.5c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625h-.062l-.063.156c-.281.75-.687 1.469-1.25 2.031.031.032.063.032.094.063l.594.344a.68.68 0 0 1 .218.875.68.68 0 0 1-.875.219l-.562-.376c-.156-.062-.281-.156-.438-.25a5 5 0 0 1-1.062.594l-.094.063a.67.67 0 0 1-.844-.313.67.67 0 0 1 .344-.844l.094-.03c.219-.095.406-.22.594-.313l-.376-.375a.64.64 0 0 1 0-.906c.22-.25.626-.25.876 0l.437.468h.031q.563-.61.938-1.406H11.75a.627.627 0 0 1-.625-.625c0-.344.281-.625.625-.625h1.625V9.75c0-.344.281-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='6db537762229c27076c32ac0e160cb2f__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageMdFillIcon);
export default ForwardRef;
