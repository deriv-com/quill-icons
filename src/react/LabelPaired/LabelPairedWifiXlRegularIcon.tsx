import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiXlRegularIcon = (
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
      <path d='M1.266 14.672c-.328.281-.797.281-1.078 0-.282-.328-.282-.797 0-1.078A21.06 21.06 0 0 1 15 7.5c5.719 0 10.969 2.344 14.766 6.094.28.281.28.75 0 1.078-.282.281-.75.281-1.078 0A19.27 19.27 0 0 0 15 9C9.61 9 4.781 11.156 1.266 14.672M15 16.5c-3.328 0-6.328 1.36-8.484 3.516-.282.28-.75.28-1.078 0a.736.736 0 0 1 0-1.032A13.46 13.46 0 0 1 15 15.047c3.703 0 7.078 1.5 9.516 3.937a.736.736 0 0 1 0 1.032c-.282.28-.75.28-1.078 0C21.28 17.859 18.28 16.5 15 16.5m0 7.5c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5m0 4.5a3.05 3.05 0 0 1-2.625-1.5c-.516-.89-.516-2.062 0-3 .563-.89 1.547-1.5 2.625-1.5 1.031 0 2.016.61 2.578 1.5.516.938.516 2.11 0 3-.562.938-1.547 1.5-2.578 1.5' />
    </g>
    <defs>
      <clipPath id='f9e6b7b2abd7163401248efedb4b9a48__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiXlRegularIcon);
export default ForwardRef;
