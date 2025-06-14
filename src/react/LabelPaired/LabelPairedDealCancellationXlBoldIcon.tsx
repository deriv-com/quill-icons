import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.797 11.719H8.53q1.266 0 2.25.422c.703.234 1.266.656 1.781 1.172.47.515.844 1.171 1.079 1.968.28.797.422 1.688.422 2.719 0 1.078-.141 1.969-.422 2.766-.235.797-.61 1.453-1.078 1.968a5.1 5.1 0 0 1-1.782 1.172q-.984.423-2.25.422H3.797zM8.53 21.89c.797 0 1.453-.235 1.922-.703.469-.47.703-1.172.703-2.204v-1.922c0-1.03-.234-1.734-.703-2.203s-1.125-.703-1.922-.703H6.516v7.735zm12.89 2.625c-.843 0-1.64-.141-2.296-.375a4.65 4.65 0 0 1-1.734-1.22 5 5 0 0 1-1.125-2.015q-.422-1.195-.422-2.812c0-1.032.14-1.969.422-2.766q.351-1.266 1.125-2.11a4.3 4.3 0 0 1 1.734-1.265c.656-.281 1.453-.422 2.297-.422 1.172 0 2.11.235 2.86.703q1.195.705 1.827 2.25l-2.343 1.22c-.188-.517-.422-.938-.797-1.267-.328-.328-.844-.468-1.547-.468-.797 0-1.453.234-1.922.797-.516.515-.75 1.265-.75 2.25v2.015c0 .985.234 1.735.75 2.297.469.516 1.125.75 1.922.75.656 0 1.219-.187 1.594-.515.422-.375.703-.844.89-1.36l2.25 1.313c-.468.937-1.078 1.687-1.875 2.25-.75.515-1.687.75-2.86.75' />
    </g>
    <defs>
      <clipPath id='f77b580ef94d2313d2058c6b30c44501__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationXlBoldIcon);
export default ForwardRef;
