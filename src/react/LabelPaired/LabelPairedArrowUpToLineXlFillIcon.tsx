import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 7.5h15c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-15A1.48 1.48 0 0 1 0 9c0-.797.656-1.5 1.5-1.5m8.531 6.469 6 6c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L10.5 18.655V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 7.5 27v-8.344l-3.469 3.422c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l6-6a1.445 1.445 0 0 1 2.11 0' />
    </g>
    <defs>
      <clipPath id='56d74e23eddecc4804c3e64fde235338__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineXlFillIcon);
export default ForwardRef;
