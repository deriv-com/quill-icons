import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 8v2h6V8q-.03-1.28-.875-2.125Q8.282 5.032 7 5q-1.28.031-2.125.875Q4.032 6.718 4 8m-1 2V8q.03-1.687 1.156-2.844Q5.312 4.031 7 4q1.688.03 2.844 1.156Q10.969 6.312 11 8v2h.5q1.062.03 1.781.719.688.719.719 1.781v5q-.03 1.062-.719 1.781-.719.688-1.781.719h-9q-1.062-.03-1.781-.719Q.03 18.562 0 17.5v-5q.03-1.062.719-1.781Q1.438 10.03 2.5 10zm-2 2.5v5q.03.625.438 1.063.436.405 1.062.437h9a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 13 17.5v-5a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 11.5 11h-9a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 1 12.5' />
    </g>
    <defs>
      <clipPath id='a7e7cc63af1b6fbf5872782ef3064e2e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockMdRegularIcon);
export default ForwardRef;
