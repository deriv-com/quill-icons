import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 7.125c0-.61.469-1.125 1.125-1.125h7.453a1.11 1.11 0 0 1 1.125 1.125v7.5c0 .656-.469 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125V9.844L11.25 20.297a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594L20.156 8.25h-4.781c-.656 0-1.125-.469-1.125-1.125M3.375 7.5h6c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 9.375 9.75h-6a1.11 1.11 0 0 0-1.125 1.125v15.75c0 .656.469 1.125 1.125 1.125h15.75a1.11 1.11 0 0 0 1.125-1.125v-6c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v6C22.5 28.5 20.953 30 19.125 30H3.375A3.36 3.36 0 0 1 0 26.625v-15.75C0 9.047 1.5 7.5 3.375 7.5' />
    </g>
    <defs>
      <clipPath id='19c2a37b6092929c5061104c61145ae2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareXlBoldIcon);
export default ForwardRef;
