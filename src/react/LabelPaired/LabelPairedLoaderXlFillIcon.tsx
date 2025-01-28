import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderXlFillIcon = (
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
      <path d='M13.5 7.5v3c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m0 18v3c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5M0 18c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 0 18m19.5-1.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 18 18c0-.797.656-1.5 1.5-1.5M3.516 9.516c.562-.563 1.5-.563 2.109 0l2.11 2.156c.609.562.609 1.547 0 2.11-.563.609-1.548.609-2.11 0l-2.11-2.11a1.5 1.5 0 0 1 0-2.156m14.812 12.75 2.156 2.109c.563.61.563 1.547 0 2.11a1.5 1.5 0 0 1-2.156 0l-2.11-2.11c-.562-.562-.562-1.547 0-2.11.61-.609 1.548-.609 2.11 0M3.516 26.484v.047a1.5 1.5 0 0 1 0-2.156l2.109-2.11a1.445 1.445 0 0 1 2.11 0c.609.563.609 1.547 0 2.11l-2.11 2.11c-.61.609-1.547.609-2.11 0m12.703-14.812 2.11-2.156a1.59 1.59 0 0 1 2.155 0c.563.609.563 1.547 0 2.156l-2.156 2.11c-.562.562-1.5.562-2.11 0-.562-.61-.562-1.548 0-2.11' />
    </g>
    <defs>
      <clipPath id='9fd3cc2052f0ba0ecb90d77a76355f87__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderXlFillIcon);
export default ForwardRef;
