import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusSmBoldIcon = (
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
      <path d='M7.156 5.719v4.375h4.375q.602.054.656.656-.054.602-.656.656H7.156v4.375q-.054.602-.656.656-.602-.054-.656-.656v-4.375H1.469q-.601-.054-.657-.656.055-.602.657-.656h4.375V5.719q.054-.601.656-.657.602.056.656.657' />
    </g>
    <defs>
      <clipPath id='d2f627916211e4555ecd5261bf1a5e84__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusSmBoldIcon);
export default ForwardRef;
