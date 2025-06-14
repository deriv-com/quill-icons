import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.188 4.188 5.813 7.78C6.53 6.688 7.656 5.875 9 5.625V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v.625c2.281.438 4 2.469 4 4.875v.594c0 1.469.531 2.906 1.5 4l.219.25c.281.312.343.719.187 1.094 0 0-.031 0-.031.03l2.813 2.22c.343.25.406.718.125 1.03-.25.345-.72.407-1.032.126l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125M12.688 17H4c-.406 0-.781-.219-.937-.562a1.01 1.01 0 0 1 .187-1.094l.219-.25a6.08 6.08 0 0 0 1.531-4v-.125zm-1.282 2.438A1.96 1.96 0 0 1 10 20c-.531 0-1.062-.187-1.437-.562C8.187 19.063 8 18.53 8 18h4c0 .531-.219 1.063-.594 1.438' />
    </g>
    <defs>
      <clipPath id='8de48a5f818e7ac903b9411c84a0b1be__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashMdFillIcon);
export default ForwardRef;
