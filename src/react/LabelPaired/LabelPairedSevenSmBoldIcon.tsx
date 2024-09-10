import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.281c0-.355.273-.656.656-.656H8.22c.219 0 .437.137.547.355.136.192.136.438 0 .657L2.203 16.574a.66.66 0 0 1-.902.219c-.301-.191-.41-.602-.219-.902l5.961-9.953H.781a.63.63 0 0 1-.656-.657' />
    </g>
    <defs>
      <clipPath id='fe2bc5a740f9b98536c9c78151eb2738__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenSmBoldIcon);
export default ForwardRef;
