import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinXlFillIcon = (
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
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m13.5-7.5c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5m-1.5 15c1.64 0 3-1.312 3-3 0-1.64-1.36-3-3-3a2.82 2.82 0 0 0-1.781.61l-5.531-3.422c-.516-.329-1.22-.141-1.547.375-.328.515-.141 1.218.375 1.546L9 22.031v.469c0 1.688 1.313 3 3 3M8.25 12.75c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5M19.5 19.5c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5m-.75-6.75c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='74ccf9a8a00fbc2b1a50b7247f67a105__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinXlFillIcon);
export default ForwardRef;
