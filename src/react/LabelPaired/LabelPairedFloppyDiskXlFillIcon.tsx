import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 7.5h11.344c.797 0 1.594.328 2.156.89L20.11 12c.562.563.89 1.36.89 2.156V25.5c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3M3 12v3c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5v-3c0-.797-.703-1.5-1.5-1.5h-9c-.844 0-1.5.703-1.5 1.5m7.5 7.5c-1.078 0-2.062.61-2.625 1.5-.516.938-.516 2.11 0 3a3.05 3.05 0 0 0 2.625 1.5c1.031 0 2.016-.562 2.578-1.5.516-.89.516-2.062 0-3-.562-.89-1.547-1.5-2.578-1.5' />
    </g>
    <defs>
      <clipPath id='a3ae65d39653f35309a2d9a59aa0bb34__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskXlFillIcon);
export default ForwardRef;
