import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineXlFillIcon = (
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
      <path d='M3 9v15.75c0 .422.328.75.75.75H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75C1.64 28.5 0 26.86 0 24.75V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m19.031 4.078-6 6c-.562.61-1.547.61-2.11 0l-2.671-2.672-4.219 4.172c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l5.25-5.25a1.445 1.445 0 0 1 2.11 0L15 15.892l4.922-4.922a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11' />
    </g>
    <defs>
      <clipPath id='ec96387da509302e3cb5065b19211c62__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineXlFillIcon);
export default ForwardRef;
