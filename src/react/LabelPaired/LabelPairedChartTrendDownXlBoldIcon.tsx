import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownXlBoldIcon = (
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
      <path d='M28.969 29.531c-.563.282-1.219.047-1.5-.515l-4.172-8.391H16.5c-.469 0-.844-.234-1.031-.61L9.984 9.048 1.97 13.03c-.563.281-1.219.047-1.5-.515s-.047-1.22.515-1.5l9-4.5c.563-.282 1.22-.047 1.5.515l5.672 11.344h6.797c.469 0 .844.281 1.031.656l4.5 9c.282.563.047 1.219-.515 1.5' />
    </g>
    <defs>
      <clipPath id='d9de7735a1067e8007e8ea8d271205f8__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownXlBoldIcon);
export default ForwardRef;
