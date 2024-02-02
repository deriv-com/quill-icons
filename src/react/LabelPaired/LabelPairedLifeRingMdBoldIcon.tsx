import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.031 17.094-2.5-2.5Q8.844 15 8 15a2.95 2.95 0 0 1-1.531-.406l-2.5 2.5Q5.657 18.468 8 18.5q2.344-.031 4.031-1.406m2.125 0 .375.375q.438.531 0 1.062-.531.438-1.062 0l-.375-.375Q10.968 19.937 8 20q-2.97-.062-5.094-1.844l-.375.375q-.531.438-1.062 0-.438-.531 0-1.062l.375-.375Q.063 14.969 0 12q.062-2.97 1.844-5.094l-.375-.375Q1.03 6 1.469 5.47q.531-.438 1.062 0l.375.375Q5.031 4.063 8 4q2.97.063 5.094 1.844l.375-.375q.531-.438 1.062 0 .438.531 0 1.062l-.375.375Q15.938 9.031 16 12q-.062 2.97-1.844 5.094m-1.062-1.063Q14.468 14.344 14.5 12q-.031-2.343-1.406-4.031l-2.5 2.5Q11 11.157 11 12q0 .844-.406 1.531zM12.03 6.906Q10.343 5.532 8 5.5q-2.343.031-4.031 1.406l2.5 2.5Q7.156 9.001 8 9q.844 0 1.531.406zm-6.625 6.625A2.95 2.95 0 0 1 5 12q0-.844.406-1.531l-2.5-2.5Q1.532 9.656 1.5 12q.031 2.344 1.406 4.031zM6.5 12q.03.844.75 1.313.75.375 1.5 0 .72-.469.75-1.313-.03-.844-.75-1.312-.75-.375-1.5 0-.72.469-.75 1.312' />
    </g>
    <defs>
      <clipPath id='49372a28046bc65c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingMdBoldIcon);
export default ForwardRef;
