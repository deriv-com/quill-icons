import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedXlFillIcon = (
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
      <path d='m23.438 10.172-7.5 6a1.484 1.484 0 0 1-1.876.047L9 12.422l-6.562 5.25c-.657.515-1.594.422-2.11-.235-.516-.609-.422-1.593.235-2.109l7.5-6c.515-.422 1.265-.422 1.828 0l5.062 3.797 6.61-5.297c.609-.516 1.593-.375 2.109.234.515.657.375 1.594-.235 2.11M7.5 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v9c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 7.5 27zm-6 4.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 1.5 27zm13.5-3c.797 0 1.5.703 1.5 1.5v6c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-6c0-.797.656-1.5 1.5-1.5m4.5-1.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v9c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='207d39b8a0b96ebdfe39628632c9c911__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedXlFillIcon);
export default ForwardRef;
