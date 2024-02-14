import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashMdBoldIcon = (
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
      <path d='M1.219 4.156 6 7.906q.063-1.655 1.188-2.75Q8.313 4.031 10 4q1.688.03 2.844 1.156Q13.969 6.312 14 8q-.03 1.406-.844 2.469-.812 1.03-2.125 1.406l8.688 6.781q.5.47.125 1.063-.47.5-1.063.125l-18.5-14.5q-.5-.47-.125-1.063.47-.5 1.063-.125m7.875 6.157q.406.187.906.187 1.062-.03 1.781-.719.688-.719.719-1.781-.03-1.062-.719-1.781Q11.062 5.53 10 5.5q-1.062.03-1.781.719Q7.53 6.938 7.5 8q0 .813.469 1.469zM8.25 13.5l1.906 1.5H8.562Q7 15.03 5.906 16q-1.125.97-1.375 2.5h10.063l1.812 1.438a.9.9 0 0 1-.343.062H3.938a.84.84 0 0 1-.657-.281.84.84 0 0 1-.281-.657q.063-2.28 1.531-3.812 1.47-1.563 3.719-1.75' />
    </g>
    <defs>
      <clipPath id='9c0e2e68e082e98fdc812a6a4de57bca__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashMdBoldIcon);
export default ForwardRef;
