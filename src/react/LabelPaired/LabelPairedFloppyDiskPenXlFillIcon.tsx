import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenXlFillIcon = (
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
      <path d='M3 7.5h11.344c.797 0 1.594.328 2.156.89L20.11 12c.562.563.89 1.36.89 2.156v2.906l-7.453 7.454a3 3 0 0 0-.797 1.406l-.656 2.578H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3M3 12v3c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5v-3c0-.797-.703-1.5-1.5-1.5h-9c-.844 0-1.5.703-1.5 1.5m7.5 7.5c-1.078 0-2.062.61-2.625 1.5-.516.938-.516 2.11 0 3a3.05 3.05 0 0 0 2.625 1.5c1.031 0 2.016-.562 2.578-1.5.516-.89.516-2.062 0-3-.562-.89-1.547-1.5-2.578-1.5m15.234-2.437.703.703c.704.703.704 1.922 0 2.625l-1.406 1.406-3.328-3.328 1.406-1.407c.703-.703 1.922-.703 2.625 0m-11.156 8.53 6.094-6.093L24 22.828l-6.094 6.094a1.34 1.34 0 0 1-.656.375L14.39 30c-.234.047-.515 0-.703-.187-.187-.188-.234-.47-.187-.704l.703-2.859c.047-.234.188-.469.375-.656' />
    </g>
    <defs>
      <clipPath id='9d6c3cbde991353f8469292a607e30c3__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenXlFillIcon);
export default ForwardRef;
