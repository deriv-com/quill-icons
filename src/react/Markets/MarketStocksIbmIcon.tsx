import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksIbmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#2665F5'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M8.673 11H4v.69h4.672zM16 11.69a2.67 2.67 0 0 0-1.598-.69H9.25v.69zM17.35 11h3.712l.24.69H17.35zM28 11.69h-3.997l.247-.69H28zM23.545 12.98H28v-.683h-4.207zM21.76 12.98h-4.41v-.683h4.17zM16.72 12.98a1.755 1.755 0 0 0-.195-.683H9.25v.683zM8.673 12.298H4v.682h4.672zM23.335 13.588l-.24.69h3.585v-.69zM21.978 13.588l.24.69h-3.555v-.69zM16.653 14.285c.07-.223.104-.456.097-.69h-2.107v.69zM7.315 13.595h-2.01v.682h2.01zM10.63 13.588h2.002v.69H10.63zM20.643 15.02v.525h-1.98v-.69h3.764l.233.645.225-.645h3.795v.69h-1.965v-.525l-.18.525h-3.712zM16.383 14.855H10.63v.69h5.182c.229-.195.422-.429.57-.69M7.315 14.855h-2.01v.682h2.01zM24.715 16.153h1.965v.682h-1.965zM20.643 16.153h-1.98v.682h1.98zM24.078 16.835c.007 0 .24-.683.24-.683h-3.315l.247.683zM10.63 16.153h5.175c.234.2.44.429.615.682h-5.79zM7.307 16.153v.682H5.305v-.683zM26.68 17.443h-1.965v.682h1.965zM18.663 17.443h1.972v.682h-1.973zM23.62 18.133s.24-.69.247-.69h-2.384l.247.682zM10.63 17.443v.682h2.032v-.683zM16.705 17.443c.081.22.124.454.128.69H14.68v-.69zM5.305 17.443h2.002v.682H5.305zM28 18.71h-3.285v.682H28zM17.35 18.71h3.292v.682H17.35zM23.178 19.393h-1.006l-.24-.683h1.478zM4 19.393v-.683h4.665v.682zM16.75 18.71a1.5 1.5 0 0 1-.262.682H9.25v-.682zM22.63 20.69h.09l.24-.69h-.562zM28 20h-3.285v.69H28zM9.25 20v.69h5.01c.647 0 1.27-.246 1.74-.69zM20.643 20H17.35v.69h3.292zM8.665 20.69v-.683L4 20v.69z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksIbmIcon);
export default ForwardRef;
