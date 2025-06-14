import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingMdRegularIcon = (
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
      <path d='m12.563 17.313-2.844-2.844C9.219 14.813 8.625 15 8 15c-.656 0-1.25-.187-1.75-.531l-2.844 2.844C4.625 18.375 6.22 19 8 19c1.75 0 3.344-.625 4.563-1.687m.718-.72A6.95 6.95 0 0 0 15 12c0-1.75-.656-3.344-1.719-4.562l-2.844 2.843c.344.5.563 1.094.563 1.719 0 .656-.219 1.25-.562 1.75zm.719.72.344.343a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L13.281 18A7.9 7.9 0 0 1 8 20a7.99 7.99 0 0 1-5.312-2l-.344.375a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L2 17.313A7.99 7.99 0 0 1 0 12c0-2 .75-3.875 2-5.281l-.375-.344a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L2.688 6A8.15 8.15 0 0 1 8 4c2 0 3.875.781 5.281 2l.344-.344a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L14 6.719c1.219 1.406 2 3.25 2 5.281a8.15 8.15 0 0 1-2 5.313M12.563 6.719A6.93 6.93 0 0 0 8 5a6.95 6.95 0 0 0-4.594 1.719L6.25 9.562A3.07 3.07 0 0 1 8 9c.625 0 1.219.219 1.719.563zM5.53 13.75A3.05 3.05 0 0 1 5 12c0-.625.188-1.219.531-1.719L2.688 7.437A6.9 6.9 0 0 0 1 12c0 1.781.625 3.375 1.688 4.594zM6 12c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75 0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 6 12' />
    </g>
    <defs>
      <clipPath id='d9bb581b6d53a114040344e17b331813__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingMdRegularIcon);
export default ForwardRef;
