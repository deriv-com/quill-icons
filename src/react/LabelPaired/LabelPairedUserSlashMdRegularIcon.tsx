import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashMdRegularIcon = (
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
      <path d='M14 8q0 1.032-.469 1.875a3.96 3.96 0 0 1-1.219 1.406l-.843-.656q.687-.405 1.125-1.094Q13 8.844 13 8q-.03-1.28-.875-2.125Q11.282 5.032 10 5q-1.062.031-1.812.625-.782.594-1.063 1.563l-.844-.657A4.1 4.1 0 0 1 7.72 4.72Q8.719 4.03 10 4q1.688.03 2.844 1.156Q13.969 6.312 14 8m1.625 11 1.031.813a.96.96 0 0 1-.593.187H3.938a.84.84 0 0 1-.657-.281.84.84 0 0 1-.281-.657q.063-2.344 1.625-3.937 1.594-1.562 3.938-1.625h.124l1.25 1H8.564q-1.907.063-3.188 1.313Q4.063 17.093 4 19zM.813 4.094l19 15.031q.343.312.093.688-.343.343-.718.093l-19-15q-.344-.343-.094-.718.344-.313.719-.094' />
    </g>
    <defs>
      <clipPath id='964ffb14a1c4ec58ff6a475cdff76122__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashMdRegularIcon);
export default ForwardRef;
