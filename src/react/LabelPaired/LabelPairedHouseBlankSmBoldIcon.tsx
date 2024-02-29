import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.438 3.914 7.218 6.125q.41.41.055.93-.41.41-.902.054l-.684-.546v5.086q-.027.93-.629 1.558-.63.601-1.559.629H4.064q-.93-.027-1.56-.629-.6-.63-.628-1.558v-5.086l-.684.546Q.7 11.38.29 10.97q-.356-.52.055-.93l7.219-6.125q.437-.328.875 0m4.374 5.441L8 5.281 3.188 9.355v6.208q0 .382.246.628a.85.85 0 0 0 .628.247h7.876a.85.85 0 0 0 .628-.247.85.85 0 0 0 .246-.628z' />
    </g>
    <defs>
      <clipPath id='7533a98a788ae67189b78c41c9da06d1__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankSmBoldIcon);
export default ForwardRef;
