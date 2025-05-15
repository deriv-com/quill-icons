import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 21.75c0 .352.273.625.625.625h15a.64.64 0 0 0 .625-.625v-8.125H1.875zm11.25-10h2.5l2.5-2.5c0-.312-.312-.625-.625-.625h-1.25zm-3.75 0L12.5 8.625H10L6.875 11.75zm-6.25 0L6.25 8.625h-2.5L1.875 10.5v1.25zM20 9.25v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5M8.438 14.953c.195-.078.468-.078.624.04l3.75 2.5a.61.61 0 0 1 .313.507c0 .234-.117.43-.312.547l-3.75 2.5c-.157.117-.43.117-.626.039a.69.69 0 0 1-.312-.586v-5c0-.195.117-.43.313-.547' />
    </g>
    <defs>
      <clipPath id='8c9f5c5e73ba16be9680552a161273d1__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayLgBoldIcon);
export default ForwardRef;
