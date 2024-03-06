import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={36}
    viewBox='0 0 9 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.625 9.375q.047-1.079.938-1.64.937-.47 1.874 0 .891.561.938 1.64-.047 1.079-.937 1.64-.937.47-1.875 0-.891-.561-.938-1.64m-1.875 6q.095-1.03 1.125-1.125H4.5q1.032.095 1.125 1.125V27.75h2.25q1.032.094 1.125 1.125Q8.907 29.907 7.875 30h-6.75Q.095 29.907 0 28.875q.095-1.03 1.125-1.125h2.25V16.5h-1.5Q.845 16.407.75 15.375' />
    </g>
    <defs>
      <clipPath id='de8a9bbefc6b122becb66e08da38a14a__a'>
        <path d='M0 0h9v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoXlBoldIcon);
export default ForwardRef;
