import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 8.25q-.703.047-.75.75v12H16.5v3H2.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 21.75q.047-.704.75-.75H3V9q.047-1.266.89-2.11Q4.735 6.048 6 6h15q1.266.047 2.11.89.843.844.89 2.11v1.5h-2.25V9q-.046-.703-.75-.75zm12 6q.047-.937.656-1.594A2.45 2.45 0 0 1 20.25 12h7.5q.937.047 1.594.656.61.657.656 1.594v13.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 27.75 30h-7.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 18 27.75zm2.25 0v13.5h7.5v-13.5z' />
    </g>
    <defs>
      <clipPath id='29cb091d148556c62de59ab416357dea__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileXlBoldIcon);
export default ForwardRef;
