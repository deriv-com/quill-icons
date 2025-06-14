import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockXlFillIcon = (
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
      <path d='M0 9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v15.75c0 .422.328.75.75.75h11.531c.328 1.125.844 2.156 1.594 3H3.75C1.64 28.5 0 26.86 0 24.75zm4.922 7.969 3.75-3.75a1.445 1.445 0 0 1 2.11 0L13.5 15.89l4.172-4.172-.89-.89c-.188-.188-.282-.47-.282-.75 0-.563.469-1.079 1.031-1.079h4.219c.375 0 .75.375.75.75v4.219c0 .562-.516 1.031-1.078 1.031-.281 0-.563-.094-.75-.281l-.89-.89-5.25 5.25c-.563.608-1.548.608-2.11 0L9.75 16.405l-2.719 2.672c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11M16.5 23.25c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m6-3v3c0 .422.328.75.75.75h2.25c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H24v-2.25c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75' />
    </g>
    <defs>
      <clipPath id='3d5f7eafe31a9f784f88e495265086de__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockXlFillIcon);
export default ForwardRef;
