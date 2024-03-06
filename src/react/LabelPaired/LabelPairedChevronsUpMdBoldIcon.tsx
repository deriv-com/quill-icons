import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpMdBoldIcon = (
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
      <path d='m8.531 5.469 6 6q.438.531 0 1.062-.531.438-1.062 0L8 7.062l-5.469 5.47q-.531.435-1.062 0-.438-.533 0-1.063l6-6q.531-.438 1.062 0m6 12q.438.531 0 1.062-.531.438-1.062 0L8 13.063 2.531 18.53q-.531.438-1.062 0-.438-.531 0-1.062l6-6q.531-.438 1.062 0z' />
    </g>
    <defs>
      <clipPath id='2095dcb5aa29359c5b71940c6092925d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpMdBoldIcon);
export default ForwardRef;
