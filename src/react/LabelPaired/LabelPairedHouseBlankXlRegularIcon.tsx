import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.984 6.188a.78.78 0 0 1 .985 0l12.75 11.25c.328.28.328.75.093 1.078-.28.328-.75.328-1.078.047L24 17.016v9.234c0 2.11-1.687 3.75-3.75 3.75H6.75C4.64 30 3 28.36 3 26.25v-9.234l-1.781 1.547c-.282.28-.797.28-1.031-.047-.282-.328-.282-.797.046-1.078zM4.5 15.703V26.25c0 1.266.984 2.25 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V15.703l-9-7.922z' />
    </g>
    <defs>
      <clipPath id='1641965c9b59a3acc86a26c9818a3a87__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankXlRegularIcon);
export default ForwardRef;
