import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.75 5.281v3.063q-.054.601-.656.656H1.03Q.43 8.946.375 8.344q.054-.602.656-.656h2.407V5.28q.054-.601.656-.656.601.054.656.656M1.031 12.5h3.063q.601.055.656.656v3.063q-.054.601-.656.656-.601-.055-.657-.656v-2.407H1.031q-.601-.054-.656-.656.054-.601.656-.656m8.532-7.219v2.407h2.406q.601.054.656.656-.055.601-.656.656H8.906q-.601-.054-.656-.656V5.28q.054-.601.656-.656.602.054.656.656M8.906 12.5h3.063q.601.055.656.656-.055.602-.656.656H9.563v2.407q-.056.601-.657.656-.601-.055-.656-.656v-3.063q.054-.601.656-.656' />
    </g>
    <defs>
      <clipPath id='2e7a01f11433c87fbb1f23e2b82e7abe__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressSmBoldIcon);
export default ForwardRef;
