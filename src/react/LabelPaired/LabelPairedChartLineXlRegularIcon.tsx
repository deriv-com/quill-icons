import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineXlRegularIcon = (
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
      <path d='M1.5 8.25v16.5c0 1.266.984 2.25 2.25 2.25h19.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.75C1.64 28.5 0 26.86 0 24.75V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m20.766 5.063-6.75 6.75c-.282.28-.797.28-1.078 0L10.5 16.078l-4.734 4.735c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l5.25-5.25c.28-.28.796-.28 1.078 0L15 18.47l6.188-6.235c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079' />
    </g>
    <defs>
      <clipPath id='8c74d9660f278378f87a930e6f43ff22__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineXlRegularIcon);
export default ForwardRef;
