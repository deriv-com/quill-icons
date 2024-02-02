import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 14.375q.14.023.445-.21.305-.212.68-.915.305-.633.516-1.5H4.359q.211.867.516 1.5.375.703.68.914.304.235.445.211m-1.805-3.75h3.633q.047-.54.047-1.125 0-.586-.047-1.125H4.195q-.07.54-.07 1.125 0 .586.07 1.125M4.36 7.25h3.282a7.6 7.6 0 0 0-.516-1.5q-.375-.703-.68-.914-.304-.234-.445-.211-.14-.023-.445.21-.305.212-.68.915a7.6 7.6 0 0 0-.516 1.5m4.594 1.125Q9 8.915 9 9.5q0 .586-.047 1.125h1.781q.141-.54.141-1.125 0-.586-.14-1.125zm1.383-1.125a4.9 4.9 0 0 0-2.32-2.18q.492.915.773 2.18zm-7.125 0q.258-1.266.773-2.18a4.9 4.9 0 0 0-2.32 2.18zM1.266 8.375A4.4 4.4 0 0 0 1.125 9.5q0 .586.14 1.125h1.782Q3 10.085 3 9.5q0-.586.047-1.125zm6.75 5.555a4.9 4.9 0 0 0 2.32-2.18H8.789q-.258 1.265-.773 2.18m-4.032 0q-.492-.914-.773-2.18H1.664a4.9 4.9 0 0 0 2.32 2.18M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797' />
    </g>
    <defs>
      <clipPath id='09540b9a4af5b1d9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeCaptionBoldIcon);
export default ForwardRef;
