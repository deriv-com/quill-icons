import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24 9.75H6q-.703.047-.75.75V21H3V10.5q.047-1.266.89-2.11.844-.843 2.11-.89h18q1.266.047 2.11.89.843.844.89 2.11V21h-2.25V10.5q-.046-.703-.75-.75M4.5 26.25h21q1.546-.093 2.11-1.5H2.39q.564 1.407 2.11 1.5M0 24q0-.656.422-1.078Q.843 22.5 1.5 22.5h27q.657 0 1.078.422Q30 23.343 30 24q-.047 1.922-1.312 3.188-1.266 1.264-3.188 1.312h-21q-1.922-.047-3.187-1.312Q.046 25.922 0 24' />
    </g>
    <defs>
      <clipPath id='a6c6a2211a5087d13262a74c938cdd53__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopXlBoldIcon);
export default ForwardRef;
