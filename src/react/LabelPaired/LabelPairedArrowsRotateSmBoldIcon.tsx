import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.563 9.219q-.056.601-.657.656H8.97q-.602-.054-.656-.656.054-.602.656-.656h2.351L9.898 7.14Q8.695 5.965 7 5.938q-1.504.027-2.68.82a4.8 4.8 0 0 0-1.75 2.105q-.274.547-.847.356-.547-.3-.356-.875a6 6 0 0 1 2.215-2.68Q5.086 4.654 7 4.625q2.216.027 3.828 1.586l1.422 1.422V5.28q.055-.601.656-.656.602.054.656.656zm-12.47 2.406h3.063q.601.055.657.656-.056.602-.657.656H2.68l1.422 1.422Q5.305 15.535 7 15.563q1.504-.028 2.68-.82a4.8 4.8 0 0 0 1.75-2.106q.274-.52.847-.328.547.273.356.847a6.25 6.25 0 0 1-2.215 2.68Q8.914 16.846 7 16.875q-2.216-.027-3.828-1.586L1.75 13.867v1.477q-.054.601-.656.656-.601-.055-.657-.656V12.28q.055-.601.657-.656' />
    </g>
    <defs>
      <clipPath id='ce9deff0edbfe87a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateSmBoldIcon);
export default ForwardRef;
