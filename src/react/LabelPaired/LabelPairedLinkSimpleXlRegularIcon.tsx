import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18c0-4.125 3.328-7.5 7.5-7.5h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H7.5c-3.328 0-6 2.719-6 6 0 3.328 2.672 6 6 6h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H7.5A7.46 7.46 0 0 1 0 18m27 0c0 4.172-3.375 7.5-7.5 7.5h-3.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h3.75c3.281 0 6-2.672 6-6 0-3.281-2.719-6-6-6h-3.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h3.75c4.125 0 7.5 3.375 7.5 7.5m-19.875-.75h12.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H7.125a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='46f39d48b72e377eed053bbd35710c44__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleXlRegularIcon);
export default ForwardRef;
