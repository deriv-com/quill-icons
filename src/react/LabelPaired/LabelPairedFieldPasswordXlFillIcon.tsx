import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordXlFillIcon = (
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
      <path d='M4.5 12c-.844 0-1.5.703-1.5 1.5v9c0 .844.656 1.5 1.5 1.5h21c.797 0 1.5-.656 1.5-1.5v-9c0-.797-.703-1.5-1.5-1.5zM0 13.5C0 11.016 2.016 9 4.5 9h21c2.484 0 4.5 2.016 4.5 4.5v9c0 2.484-2.016 4.5-4.5 4.5h-21A4.5 4.5 0 0 1 0 22.5zm20.25 9.375c-.656 0-1.125-.469-1.125-1.125v-7.5c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v7.5a1.11 1.11 0 0 1-1.125 1.125M9.375 18a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.876 0-.609-.328-.937-.937-.937-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.875 0 .562.328.937.938.937 1.594m4.5 0a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.876 0-.609-.328-.937-.937-.937-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.874 0 .563.328.938.938.938 1.594m4.5 0a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.875 0-.61-.328-.938-.937-.938-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.874 0 .563.328.938.938.938 1.594' />
    </g>
    <defs>
      <clipPath id='c5d229696a80967c451df2cd1c0736d2__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordXlFillIcon);
export default ForwardRef;
