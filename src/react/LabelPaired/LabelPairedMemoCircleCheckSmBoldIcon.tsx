import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckSmBoldIcon = (
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
      <path d='M1.875 5.063q-.41.027-.437.437V16q.027.41.437.438h6.016q.519.765 1.257 1.285a1.4 1.4 0 0 1-.273.027h-7q-.738-.027-1.23-.52-.493-.492-.52-1.23V5.5q.027-.738.52-1.23.492-.493 1.23-.52h7q.738.027 1.23.52.493.492.52 1.23v3.691a4.3 4.3 0 0 0-1.312.602V5.5q-.028-.41-.438-.437zM3.406 7.25h3.938q.601.054.656.656-.054.601-.656.657H3.406q-.601-.056-.656-.657.054-.601.656-.656m0 2.625h3.938q.601.054.656.656-.054.602-.656.656H3.406q-.601-.054-.656-.656.054-.601.656-.656m0 2.625H4.72q.601.055.656.656-.054.602-.656.656H3.406q-.601-.054-.656-.656.054-.601.656-.656m12.469 1.313q0 1.066-.52 1.968a3.95 3.95 0 0 1-1.449 1.45q-.93.519-1.969.519a4 4 0 0 1-1.968-.52 3.95 3.95 0 0 1-1.45-1.449A3.9 3.9 0 0 1 8 13.812q0-1.066.52-1.968a3.95 3.95 0 0 1 1.449-1.45 4 4 0 0 1 1.969-.519q1.038 0 1.968.52.93.546 1.45 1.449.519.902.519 1.969m-2.105-1.176q-.302-.274-.602 0l-1.668 1.64-.793-.765q-.3-.274-.602 0-.273.3 0 .601l1.094 1.094q.3.273.602 0l1.969-1.969q.273-.3 0-.601' />
    </g>
    <defs>
      <clipPath id='d0ccd0ea31b32b481077c52ddd50c93a__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckSmBoldIcon);
export default ForwardRef;
