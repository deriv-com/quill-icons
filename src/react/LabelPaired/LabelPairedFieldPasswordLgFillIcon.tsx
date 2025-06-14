import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordLgFillIcon = (
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
      <path d='M3.75 10.5c-.703 0-1.25.586-1.25 1.25v7.5c0 .703.547 1.25 1.25 1.25h17.5c.664 0 1.25-.547 1.25-1.25v-7.5c0-.664-.586-1.25-1.25-1.25zM0 11.75C0 9.68 1.68 8 3.75 8h17.5C23.32 8 25 9.68 25 11.75v7.5c0 2.07-1.68 3.75-3.75 3.75H3.75C1.68 23 0 21.32 0 19.25zm16.875 7.813c-.547 0-.937-.391-.937-.938v-6.25c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937v6.25c0 .547-.43.938-.938.938M7.813 15.5c0 .586-.313 1.094-.782 1.367-.508.274-1.093.274-1.562 0-.508-.273-.782-.781-.782-1.367 0-.547.274-1.055.782-1.328.468-.274 1.054-.274 1.562 0 .469.273.782.781.782 1.328m3.75 0c0 .586-.313 1.094-.782 1.367-.508.274-1.094.274-1.562 0-.508-.273-.781-.781-.781-1.367 0-.547.273-1.055.78-1.328.47-.274 1.055-.274 1.563 0 .469.273.781.781.781 1.328m3.75 0c0 .586-.313 1.094-.782 1.367-.508.274-1.094.274-1.562 0-.508-.273-.781-.781-.781-1.367 0-.547.273-1.055.78-1.328.47-.274 1.055-.274 1.563 0 .469.273.781.781.781 1.328' />
    </g>
    <defs>
      <clipPath id='e635a2241d34cc85bf956f3fbf124d89__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordLgFillIcon);
export default ForwardRef;
