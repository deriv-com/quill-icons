import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 10.5v15q.046.704.75.75h15q.704-.046.75-.75V14.016a.77.77 0 0 0-.234-.563l1.593-1.594q.891.891.891 2.157V25.5q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89h11.531q1.22 0 2.11.89l3.468 3.47-1.593 1.593-3.47-3.469L15 9.938v4.687q-.093 1.032-1.125 1.125h-9q-1.03-.093-1.125-1.125V9.75H3q-.703.047-.75.75M6 9.75v3.75h6.75V9.75zM7.5 21q.047-1.687 1.5-2.578 1.5-.844 3 0 1.453.89 1.5 2.578-.047 1.687-1.5 2.578-1.5.845-3 0-1.453-.89-1.5-2.578' />
    </g>
    <defs>
      <clipPath id='fb14d068c4bbf331d9f1147a05cf865f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskXlBoldIcon);
export default ForwardRef;
