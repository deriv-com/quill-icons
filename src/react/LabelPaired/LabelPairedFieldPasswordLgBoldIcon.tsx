import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 10.188c-.898 0-1.562.703-1.562 1.562v7.5c0 .898.664 1.563 1.562 1.563h17.5c.86 0 1.563-.665 1.563-1.563v-7.5c0-.86-.704-1.562-1.563-1.562zM.313 11.75A3.443 3.443 0 0 1 3.75 8.313h17.5c1.875 0 3.438 1.562 3.438 3.437v7.5a3.443 3.443 0 0 1-3.438 3.438H3.75A3.42 3.42 0 0 1 .313 19.25zm16.562 7.813c-.547 0-.937-.391-.937-.938v-6.25c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937v6.25c0 .547-.43.938-.938.938M7.813 15.5c0 .586-.313 1.094-.782 1.367-.508.274-1.093.274-1.562 0-.508-.273-.782-.781-.782-1.367 0-.547.274-1.055.782-1.328.468-.274 1.054-.274 1.562 0 .469.273.782.781.782 1.328m3.75 0c0 .586-.313 1.094-.782 1.367-.508.274-1.094.274-1.562 0-.508-.273-.781-.781-.781-1.367 0-.547.273-1.055.78-1.328.47-.274 1.055-.274 1.563 0 .469.273.781.781.781 1.328m3.75 0c0 .586-.313 1.094-.782 1.367-.508.274-1.094.274-1.562 0-.508-.273-.781-.781-.781-1.367 0-.547.273-1.055.78-1.328.47-.274 1.055-.274 1.563 0 .469.273.781.781.781 1.328' />
    </g>
    <defs>
      <clipPath id='087305caeb032e5344d06c97c67c2581__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordLgBoldIcon);
export default ForwardRef;
