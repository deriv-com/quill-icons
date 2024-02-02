import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.418 5.582 2 12.062h5.688V7.907q.054-.601.656-.656.601.054.656.656v4.157h1.094q.601.054.656.656-.055.601-.656.656H9v2.844q-.054.601-.656.656-.602-.055-.656-.656v-2.844H.906q-.355 0-.574-.328a.64.64 0 0 1 0-.629L4.27 4.98q.327-.519.875-.273.519.328.273.875' />
    </g>
    <defs>
      <clipPath id='ecf9a340e4df28b3__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourSmBoldIcon);
export default ForwardRef;
