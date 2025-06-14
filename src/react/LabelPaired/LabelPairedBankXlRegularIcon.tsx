import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.328 6.14 10.922 6.141c.469.281.75.75.75 1.266 0 .797-.656 1.453-1.5 1.453H1.453A1.46 1.46 0 0 1 0 13.547c0-.516.281-.985.703-1.266l10.922-6.14c.234-.141.516-.141.703 0m2.016 7.36h8.015L12 7.64 1.594 13.5h8.015c-.187-.328-.234-.703-.234-1.125 0-1.406 1.172-2.625 2.625-2.625 1.406 0 2.625 1.219 2.625 2.625q0 .633-.281 1.125M12 11.25a1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 12 11.25M3 22.5v-6h1.5v6h3.75v-6h1.5v6h4.5v-6h1.5v6h3.75v-6H21v6c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75m-1.125 3h20.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H1.875a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75m-1.125 3h22.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='13fd28404770b2722b2cde861d22e3a2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankXlRegularIcon);
export default ForwardRef;
