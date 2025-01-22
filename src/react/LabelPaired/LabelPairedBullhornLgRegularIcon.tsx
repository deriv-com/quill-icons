import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.25 7.258a.319.319 0 0 0-.547-.235L14.766 8c-1.641 1.719-3.75 2.93-6.016 3.438v6.914a11.73 11.73 0 0 1 6.016 3.437l.937.977c.195.195.547.039.547-.235zM7.5 18.156v-6.523c-.234.039-.469.039-.703.078l-1.172.039H2.5c-.703 0-1.25.586-1.25 1.25v3.75c0 .703.547 1.25 1.25 1.25h3.125l1.172.078c.234 0 .469.04.703.078m7.305-11.992c.937-1.016 2.695-.351 2.695 1.094V22.53c0 1.407-1.758 2.11-2.695 1.094l-.938-.977c-1.719-1.796-3.945-2.93-6.367-3.242v3.907c0 1.21-.977 2.187-2.187 2.187h-.625A2.184 2.184 0 0 1 2.5 23.313V19.25a2.47 2.47 0 0 1-2.5-2.5V13c0-1.367 1.094-2.5 2.5-2.5h3.086l1.133-.04a10.6 10.6 0 0 0 7.148-3.32zM3.75 19.25v4.063c0 .546.39.937.938.937h.625c.507 0 .937-.39.937-.937v-4.024l-.664-.039zM19.375 13c.313 0 .625.313.625.625v2.5a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-2.5c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='4b5890b549aa46e5254e8fed48c863a7__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornLgRegularIcon);
export default ForwardRef;
