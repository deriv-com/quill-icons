import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankXlBoldIcon = (
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
      <path d='m14.203 6.281 12.375 10.5c.469.422.516 1.125.14 1.594a1.17 1.17 0 0 1-1.593.14L24 17.532v8.719c0 2.11-1.687 3.75-3.75 3.75H6.75C4.64 30 3 28.36 3 26.25v-8.719l-1.172.985a1.17 1.17 0 0 1-1.594-.141 1.17 1.17 0 0 1 .141-1.594l12.375-10.5a1.196 1.196 0 0 1 1.453 0m7.547 9.328L13.5 8.625l-8.25 6.984V26.25c0 .844.656 1.5 1.5 1.5h13.5c.797 0 1.5-.656 1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='45c1466a3941b5fc3d2b9ca1e67966f1__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankXlBoldIcon);
export default ForwardRef;
