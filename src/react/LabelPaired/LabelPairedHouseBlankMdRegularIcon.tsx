import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.656 4.125a.52.52 0 0 1 .656 0l8.5 7.5c.22.188.22.5.063.719-.187.219-.5.219-.719.031L16 11.344V17.5c0 1.406-1.125 2.5-2.5 2.5h-9A2.47 2.47 0 0 1 2 17.5v-6.156L.813 12.375c-.188.188-.532.188-.688-.031-.187-.219-.187-.531.031-.719zM3 10.469V17.5c0 .844.656 1.5 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-7.031L9 5.188z' />
    </g>
    <defs>
      <clipPath id='0832da5345291e9d7063b94ad25a683e__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankMdRegularIcon);
export default ForwardRef;
