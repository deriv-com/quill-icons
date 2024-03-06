import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintSmFillIcon = (
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
      <path d='M1.313 10.75v1.094q-.055.601-.657.656-.601-.055-.656-.656V10.75q.027-1.968.957-3.527a6.94 6.94 0 0 1 2.516-2.516Q5.032 3.777 7 3.75q1.614 0 2.98.656a7 7 0 0 1 2.325 1.778q.355.492-.055.93-.492.354-.93-.055a5.55 5.55 0 0 0-1.914-1.45A5.3 5.3 0 0 0 7 5.063q-2.406.054-4.02 1.667-1.613 1.614-1.667 4.02m12.55-1.45q.137.712.137 1.45v1.094q-.055.601-.656.656-.602-.055-.656-.656V10.75q0-.601-.11-1.176-.082-.6.492-.765.602-.083.793.492M7 5.938q2.051.055 3.418 1.422 1.34 1.34 1.395 3.391v.684q0 1.148-.137 2.27-.11.518-.63.546-.327 0-.491-.219a.7.7 0 0 1-.164-.547q.108-1.012.109-2.05v-.684q-.027-1.476-1.012-2.488Q8.477 7.277 7 7.25q-.465 0-.902.11-.493.136-.82-.192-.22-.274-.137-.574.054-.3.382-.41A4.3 4.3 0 0 1 7 5.937M4.129 7.825q.3.438 0 .93A3.6 3.6 0 0 0 3.5 10.75v.684q0 1.175-.273 2.351-.138.438-.602.465a.6.6 0 0 1-.52-.273.7.7 0 0 1-.136-.575 9 9 0 0 0 .218-1.968v-.684Q2.216 9.055 3.2 7.797a.6.6 0 0 1 .465-.219.78.78 0 0 1 .465.246M7 8.125q1.12.027 1.86.766.738.738.765 1.859v.684q0 1.64-.328 3.226-.11.438-.574.465a.6.6 0 0 1-.465-.219q-.165-.219-.11-.52.274-1.476.274-2.952v-.684a1.53 1.53 0 0 0-.41-1.012A1.53 1.53 0 0 0 7 9.328a1.53 1.53 0 0 0-1.012.41q-.383.41-.41 1.012v.684q0 1.668-.437 3.28a.58.58 0 0 1-.547.411q-.328 0-.492-.246t-.11-.547a11 11 0 0 0 .383-2.898v-.684q.027-1.12.766-1.86.738-.738 1.859-.765m.656 2.625v.684q0 2.706-.984 5.25l-.164.437q-.246.52-.848.356-.52-.247-.355-.848l.164-.41a13.3 13.3 0 0 0 .875-4.785v-.684q.054-.602.656-.656.602.054.656.656' />
    </g>
    <defs>
      <clipPath id='28357c196c7425a2bebcae4dd1cc2531__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintSmFillIcon);
export default ForwardRef;
