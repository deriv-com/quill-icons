import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashMdBoldIcon = (
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
      <path d='M1.219 4.156 5.75 7.72Q6.875 5.937 9 5.562V5q0-.437.281-.719A.97.97 0 0 1 10 4q.438 0 .719.281A.97.97 0 0 1 11 5v.563q1.75.313 2.844 1.593Q14.969 8.437 15 10.25v1.031q.031 2.188 1.375 3.906l.469.594q.25.344.125.719l2.75 2.156q.5.47.125 1.063-.47.5-1.063.125l-18.5-14.5q-.5-.47-.125-1.063.47-.5 1.063-.125m5.719 4.469 7.156 5.625a7.6 7.6 0 0 1-.594-2.969V10.25q-.03-1.375-.937-2.312Q11.625 7.03 10.25 7h-.5q-.906 0-1.656.438-.75.468-1.156 1.187M12.688 17H3.75a.79.79 0 0 1-.687-.437.81.81 0 0 1 .093-.782l.469-.594Q4.969 13.47 5 11.314v-.376l1.469 1.157A8 8 0 0 1 5.25 15.5h5.531zM12 18q0 .813-.594 1.406A1.92 1.92 0 0 1 10 20q-.812 0-1.406-.594A1.92 1.92 0 0 1 8 18h4' />
    </g>
    <defs>
      <clipPath id='8913619c56f4b08d5b6f22cf6c023ff7__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashMdBoldIcon);
export default ForwardRef;
